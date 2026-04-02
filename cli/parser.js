const fs = require('fs');
const path = require('path');
const Engine = require('../core/engine');

function startCli(options) {
  let config = {};

  // Load default config
  try {
    const defaultConfigPath = path.join(__dirname, '../configs/default.json');
    if (fs.existsSync(defaultConfigPath)) {
      config = JSON.parse(fs.readFileSync(defaultConfigPath, 'utf-8'));
    }
  } catch (err) {
    console.error('Failed to load default config:', err.message);
  }

  // Override with custom config if provided
  if (options.config) {
    try {
      const customConfigPath = path.resolve(process.cwd(), options.config);
      if (fs.existsSync(customConfigPath)) {
        const customConfig = JSON.parse(fs.readFileSync(customConfigPath, 'utf-8'));
        config = { ...config, ...customConfig };
      }
    } catch (err) {
      console.error('Failed to load custom config:', err.message);
    }
  }

  // Override with CLI options
  if (options.mode) config.mode = options.mode;
  if (options.symbol) config.symbol = options.symbol;
  if (options.feed) config.feed = options.feed;
  if (options.file) config.file = options.file;
  if (options.plugin) config.plugin = options.plugin;
  if (options.city) config.city = options.city;
  if (options.key) config.apiKey = options.key;
  if (options.rate) config.speed = options.rate;

  // Initialize and start engine
  const engine = new Engine(config);
  engine.start();
}

module.exports = { startCli };
