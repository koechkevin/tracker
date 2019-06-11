const authController = (req, res) => {
  bug('bug found');
  res
    .status(200)
    .json({
      message: '/auth route successful'
    })
};

export default authController
