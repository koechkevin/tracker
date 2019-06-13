import express from 'express';
import chalk from 'chalk';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import cors from 'cors';
import path from 'path';
import routes from './routes';

// used to hunt bugs
global.logger = (message, arg1 = '', arg2 = '', arg3 = '', arg4 = '', arg5 = '') => console.log(chalk.rgb(0, 0, 204)(message, arg1, arg2, arg3, arg4, arg5));

global.bug = (message, arg1 = '', arg2 = '', arg3 = '', arg4 = '', arg5 = '') => console.log(chalk.red(message, arg1, arg2, arg3, arg4, arg5));

const expressApp = express();

expressApp.use(cors());
expressApp.use(bodyParser.json());
expressApp.use(expressValidator());
// This registers your routes
const app = routes(expressApp);

app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use('*', (req, res) => {
  res
    .sendFile(path.resolve(
      __dirname, '..', 'public/index.html',
    ));
});
export default app;
