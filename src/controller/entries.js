import models from '../database/models/index';

const createEntries = async (req, res) => {
  try {
    const data = {
      ...req.body, createdAt: new Date(), updatedAt: new Date(), date: new Date(req.body.date),
    };
    const entry = await models.Entry.create(data);
    res
      .status(201)
      .json(entry);
  } catch (error) {
    res
      .status(500)
      .json({
        message: error.message,
      });
  }
};

const getAllEntries = async (req, res) => {
  try {
    const { query: { id } } = req;
    const where = id ? { userId: id } : {};
    const entries = await models.Entry.findAll({
      where: {
        ...where,
      },
      include: [{
        model: models.User,
        as: 'user',
      }],
    });
    const totals = {
      channel: 0,
      response: 0,
      dm: 0,
      multiDm: 0,
      Sync: 0,
    };

    entries.forEach((e) => {
      totals.channel += e.channel;
      totals.response += e.response;
      totals.dm += e.dm;
      totals.multiDm += e.multiDm;
      totals.Sync += e.Sync;
    });

    res.status(200)
      .json({
        entries, totals,
      });
  } catch (error) {
    res
      .status(500)
      .json({
        message: error.message,
      });
  }
};


export default { createEntries, getAllEntries };
