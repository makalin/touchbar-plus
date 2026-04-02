const axios = require('axios');

module.exports = {
  name: 'weather',
  run: async (config) => {
    const city = config.city || 'London';
    const apiKey = config.apiKey || process.env.OPENWEATHER_API_KEY;
    
    if (!apiKey) {
      return '☁️ Weather: No API Key';
    }

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      
      const temp = response.data.main.temp.toFixed(1);
      const desc = response.data.weather[0].main;
      
      return `☁️ ${city}: ${temp}°C, ${desc}`;
    } catch (err) {
      return `⚠️ Weather Error for ${city}`;
    }
  }
};
