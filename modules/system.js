const si = require('systeminformation');

module.exports = {
  name: 'system',
  run: async (config) => {
    try {
      const cpuLoad = await si.currentLoad();
      const mem = await si.mem();
      
      const cpuPercent = cpuLoad.currentLoad.toFixed(1);
      const usedMem = ((mem.active / mem.total) * 100).toFixed(1);
      
      // Get current time
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      
      return `⏱  ${time} | 🧠 CPU: ${cpuPercent}% | 💾 RAM: ${usedMem}%`;
    } catch (err) {
      return `⚠️ System Stats Error`;
    }
  }
};
