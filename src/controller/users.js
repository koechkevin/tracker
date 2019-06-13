import models from '../database/models/index';

const getAllUsers = async (req, res) => {
  try {
    const users = await models.User.findAll();
    res.status(200).json({ users });
  } catch (error) {
    res
      .status(500)
      .json({
        message: error.message,
      });
  }
};

export default { getAllUsers };
