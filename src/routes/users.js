import express from 'express';


const usersRouter = express.Router();

usersRouter.get('/', (req, res) => {
  res
    .status(200)
    .json({
      message: '/ route successful',
    });
});

export default usersRouter;
