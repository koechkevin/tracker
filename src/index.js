import chalk from 'chalk';
import app from './app';

const port = 3000;

app.listen(port, () => {
  console.info(chalk.blue(`This is an express app port ${port}`));
});
