const path = require('path');
const fs = require('fs');

module.exports = {
  name: 'image',
  run: async (config) => {
    const imagePath = config.file || './screen.png';
    const absolutePath = path.resolve(process.cwd(), imagePath);
    
    if (fs.existsSync(absolutePath)) {
      // Since CLI can't render image, we display path
      return `🖼 Displaying: ${path.basename(absolutePath)}`;
    } else {
      return `⚠️ Image not found: ${imagePath}`;
    }
  }
};
