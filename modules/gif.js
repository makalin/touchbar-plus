const path = require('path');
const fs = require('fs');

let currentFrame = 0;
const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

module.exports = {
  name: 'gif',
  run: async (config) => {
    const gifPath = config.file || './loop.gif';
    const absolutePath = path.resolve(process.cwd(), gifPath);
    
    const frameChar = frames[currentFrame];
    currentFrame = (currentFrame + 1) % frames.length;
    
    if (fs.existsSync(absolutePath)) {
      return `🎞 ${frameChar} Playing: ${path.basename(absolutePath)}`;
    } else {
      return `⚠️ GIF not found: ${gifPath}`;
    }
  }
};
