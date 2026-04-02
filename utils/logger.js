const chalk = require('chalk');

const logger = {
  info: (msg) => console.log(`${chalk.blue('ℹ')} ${chalk.gray(msg)}`),
  success: (msg) => console.log(`${chalk.green('✔')} ${chalk.white(msg)}`),
  warn: (msg) => console.log(`${chalk.yellow('⚠')} ${chalk.yellow(msg)}`),
  error: (msg) => console.error(`${chalk.red('✘')} ${chalk.red.bold(msg)}`),
  debug: (msg) => {
    if (process.env.DEBUG) {
      console.log(`${chalk.magenta('⚙')} ${chalk.magenta(msg)}`);
    }
  }
};

module.exports = logger;
