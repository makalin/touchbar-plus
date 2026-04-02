const axios = require('axios');

module.exports = {
  name: 'crypto',
  run: async (config) => {
    const symbol = config.symbol || 'BTCUSDT';
    try {
      // Fetch from Binance API
      const response = await axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`);
      const price = parseFloat(response.data.price).toFixed(2);
      
      return `📈 ${symbol}: $${price}`;
    } catch (err) {
      // Fallback
      return `⚠️ Unable to fetch ${symbol}`;
    }
  }
};
