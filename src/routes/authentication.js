import express from 'express';
import authController from "../controller/authentication";


const authenticationRouter = express.Router();

authenticationRouter.get('/auth', authController);

export default authenticationRouter;
