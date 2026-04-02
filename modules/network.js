const si = require('systeminformation');

module.exports = {
  name: 'network',
  run: async (config) => {
    try {
      const networkStats = await si.networkStats();
      const stats = networkStats[0]; // Primary interface
      
      if (!stats) return '🌐 Network Offline';

      const rx = (stats.rx_sec / 1024 / 1024).toFixed(2); // MB/s
      const tx = (stats.tx_sec / 1024 / 1024).toFixed(2); // MB/s
      
      return `🌐 ↓ ${rx} MB/s | ↑ ${tx} MB/s`;
    } catch (err) {
      return '⚠️ Network Stats Error';
    }
  }
};
