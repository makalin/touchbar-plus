const path = require('path');
require('dotenv').config();
const { render } = require('./renderer');
const logger = require('../utils/logger');
const { validateConfig, sanitizePath } = require('../utils/validator');

class Engine {
  constructor(config) {
    const result = validateConfig(config);
    if (!result.success) {
      logger.error('Invalid Configuration:');
      console.error(result.error.format());
      process.exit(1);
    }
    
    this.config = result.data;
    this.module = null;
    this.intervalId = null;
    this.refreshRate = this.config.speed ? this.config.speed * 1000 : 3000;
  }

  loadModule() {
    const { mode } = this.config;
    
    try {
      if (mode === 'custom') {
        const pluginName = this.config.plugin || 'custom-plugin';
        const sanitized = sanitizePath(path.join(__dirname, '../plugins'), `${pluginName}.js`);
        this.module = require(sanitized);
      } else {
        const sanitized = sanitizePath(path.join(__dirname, '../modules'), `${mode}.js`);
        this.module = require(sanitized);
      }
      logger.info(`Loaded module: ${mode}`);
    } catch (err) {
      logger.error(`Security/Load Error: ${err.message}`);
      process.exit(1);
    }
  }

  async tick() {
    try {
      if (this.module && typeof this.module.run === 'function') {
        const data = await this.module.run(this.config);
        render(data, this.config.theme);
      } else {
        render(`[Error: Module ${this.config.mode} is invalid]`);
      }
    } catch (err) {
      logger.debug(`Tick error: ${err.message}`);
      render(`[Error: Check logs]`);
    }
  }

  start() {
    this.loadModule();
    logger.success(`TouchBar+ started in [${this.config.mode}] mode`);
    logger.info('Running simulation... Press Ctrl+C to stop.\n');
    
    this.tick();
    this.intervalId = setInterval(() => this.tick(), this.refreshRate);
    
    // Graceful shutdown
    process.on('SIGINT', () => this.stop());
    process.on('SIGTERM', () => this.stop());
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    render('Powering off...', 'dark');
    console.log('\n');
    logger.warn('TouchBar+ gracefully stopped.');
    process.exit(0);
  }
}

module.exports = Engine;
