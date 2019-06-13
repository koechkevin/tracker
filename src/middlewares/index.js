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
    .checkBody('dm', 'dmshould be provided')
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

export default { validateNewEntry };
