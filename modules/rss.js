const Parser = require('rss-parser');
const parser = new Parser();

let currentItemIndex = 0;
let cachedItems = [];
let lastFetch = 0;
const CACHE_TTL = 60000; // 1 minute

module.exports = {
  name: 'rss',
  run: async (config) => {
    const feedUrl = config.feed || 'https://news.ycombinator.com/rss';
    
    try {
      const now = Date.now();
      // Fetch new items if cache is empty or TTL expired
      if (cachedItems.length === 0 || now - lastFetch > CACHE_TTL) {
        const feed = await parser.parseURL(feedUrl);
        if (feed && feed.items && feed.items.length > 0) {
          cachedItems = feed.items;
          lastFetch = now;
          currentItemIndex = 0;
        }
      }

      if (cachedItems.length > 0) {
        const item = cachedItems[currentItemIndex];
        // Move to next item for the next tick
        currentItemIndex = (currentItemIndex + 1) % cachedItems.length;
        return `📰 ${item.title}`;
      } else {
        return `📰 No items found in feed`;
      }
    } catch (err) {
      return `⚠️ RSS Fetch Error: ${err.message}`;
    }
  }
};
