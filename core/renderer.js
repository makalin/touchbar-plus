const chalk = require('chalk');

function render(text, theme = 'dark') {
  // Clear the current line
  process.stdout.write('\r\x1b[K');
  
  const boxChar = '▐';
  const endChar = '▌';
  
  // Professional Touch Bar Simulation using Chalk
  const label = chalk.bold.cyan(' TB+ ');
  const content = theme === 'light' 
    ? chalk.black.bgWhite(` ${text} `)
    : chalk.white.bgBlack(` ${text} `);
    
  const bar = `${chalk.gray(boxChar)}${label}${content}${chalk.gray(endChar)}`;
  
  process.stdout.write(bar);
}

module.exports = { render };
