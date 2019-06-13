const authController = (req, res) => {
  res
    .status(200)
    .json({
      message: '/auth route successful',
    });
};

export default authController;
