#!/usr/bin/env node

const { program } = require('commander');
const { startCli } = require('../cli/parser');

program
  .name('touchbar-plus')
  .description('Turn your MacBook Pro Touch Bar into a live, customizable display')
  .version('1.0.0')
  .option('-m, --mode <type>', 'Mode (crypto, rss, system, weather, battery, network, custom)', 'system')
  .option('-s, --symbol <symbol>', 'Crypto symbol (e.g., BTCUSDT)', 'BTCUSDT')
  .option('-f, --feed <url>', 'RSS feed URL')
  .option('-l, --file <path>', 'File path for gif or image modes')
  .option('-c, --config <path>', 'Path to custom config JSON file')
  .option('-p, --plugin <name>', 'Name of the plugin to run in custom mode')
  .option('-y, --city <city>', 'City for weather mode', 'London')
  .option('-k, --key <apikey>', 'API Key for weather or crypto')
  .option('-r, --rate <seconds>', 'Refresh rate in seconds', (v) => parseInt(v), 3)
  .parse(process.argv);

const options = program.opts();

startCli(options);
