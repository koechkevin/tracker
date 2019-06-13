import models from '../database/models/index';

const createEntries = async (req, res) => {
  try {
    const data = {
      ...req.body, createdAt: new Date(), updatedAt: new Date(), date: new Date(),
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

export default { createEntries };
