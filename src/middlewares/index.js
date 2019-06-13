import { Op } from 'sequelize';
import models from '../database/models/index';

// eslint-disable-next-line consistent-return
const validateNewEntry = (req, res, next) => {
  req
    .checkBody('userId', 'userId should be provided')
    .isInt()
    .notEmpty();
  req
    .checkBody('channel', 'channel should be provided')
    .isInt()
    .notEmpty();
  req
    .checkBody('response', 'response should be provided')
    .isInt()
    .notEmpty();
  req
    .checkBody('dm', 'dm should be provided')
    .isInt()
    .notEmpty();
  req
    .checkBody('Sync', 'Sync should be provided')
    .isInt()
    .notEmpty();
  req
    .checkBody('multiDm', 'multiDm should be provided')
    .isInt()
    .notEmpty();
  req
    .checkBody('date', 'date should be provided')
    .notEmpty();
  const errors = req.validationErrors();
  if (errors) {
    return res.status(422).json({
      errors,
    });
  }
  next();
};

// eslint-disable-next-line consistent-return
const validateUniqueDate = async (req, res, next) => {
  const { body: { date, userId } } = req;
  const entry = await models.Entry.findOne({
    where: {
      [Op.and]: [{ userId }, { date }],
    },
  });
  if (entry) {
    return res
      .status(409)
      .json({
        errors: [{
          location: 'body', param: 'date', msg: 'date should be provided', value: '',
        }, {
          location: 'body', param: 'dm', msg: 'date should be provided', value: '',
        }, {
          location: 'body', param: 'response', msg: 'date should be provided', value: '',
        }, {
          location: 'body', param: 'channel', msg: 'date should be provided', value: '',
        }, {
          location: 'body', param: 'multiDm', msg: 'date should be provided', value: '',
        }, {
          location: 'body', param: 'Sync', msg: 'date should be provided', value: '',
        }],
      });
  }
  next();
};

export default { validateNewEntry, validateUniqueDate };
