import express from 'express';
import controller from '../controller/users';
import entries from '../controller/entries';
import validator from '../middlewares/index';

const usersRouter = express.Router();
const { getAllUsers } = controller;
const { createEntries } = entries;
const { validateNewEntry } = validator;

usersRouter.get('/users', getAllUsers);
usersRouter.post('/entries/create', validateNewEntry, createEntries);

export default usersRouter;
