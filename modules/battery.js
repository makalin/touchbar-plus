const si = require('systeminformation');

module.exports = {
  name: 'battery',
  run: async (config) => {
    try {
      const battery = await si.battery();
      
      if (!battery.hasBattery) {
        return '🔌 No Battery Detected';
      }

      const status = battery.isCharging ? '⚡' : '🔋';
      const percent = battery.percent;
      const timeLeft = battery.timeRemaining ? ` (${battery.timeRemaining}m)` : '';
      
      return `${status} ${percent}%${timeLeft}`;
    } catch (err) {
      return '⚠️ Battery Stats Error';
    }
  }
};
