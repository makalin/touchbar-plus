# TouchBar+

Turn your MacBook Pro Touch Bar into a live, customizable display for real-time data, visuals, and ambient information.

## Features

- 📈 Live crypto ticker (Binance, CoinGecko)
- 📰 RSS / Atom feed scrolling
- 🎞 GIF & lightweight animation support
- 🖼 Custom images / screensaver mode
- ⏱ Clock + system stats (CPU, RAM)
- 🔋 Battery monitoring (Charge, Time Remaining)
- 🌐 Network traffic (Real-time speed monitoring)
- ☁️ Weather updates (OpenWeatherMap)
- 🔌 Plugin-based architecture (Sanitized & Secure)
- ⚡ Fast, local-first rendering (Chalk-powered TUI)
- 🎛 CLI + config driven (Zod validation)

## Security

TouchBar+ is built with security in mind:
- **Path Sanitization**: All plugin and module paths are strictly validated to prevent path traversal attacks.
- **Config Validation**: Uses Zod to ensure all inputs are schema-valid before the engine starts.
- **Secret Management**: Support for `.env` files to keep your API keys safe.

## Usage

```bash
# New Modes
touchbar-plus --mode battery
touchbar-plus --mode network
touchbar-plus --mode weather --city "New York" --key YOUR_API_KEY

# Existing Modes
touchbar-plus --mode crypto --symbol BTCUSDT
touchbar-plus --mode rss --feed https://news.ycombinator.com/rss
touchbar-plus --mode system --rate 1
```

## Config Example

```json
{
  "mode": "crypto",
  "symbol": "BTCUSDT",
  "speed": 2,
  "theme": "dark"
}
```

## Plugin Example

```js
module.exports = {
  name: "custom",
  run: async () => {
    return "HELLO FROM TOUCHBAR+";
  }
};
```

## Roadmap

* [ ] Multi-widget split view
* [ ] Touch interaction support
* [ ] Web dashboard
* [ ] Weather widgets
* [ ] Music integrations

## Author

**Mehmet Turgay Akalın**
Full Stack Developer
GitHub: [https://github.com/makalin](https://github.com/makalin)

## Philosophy

Minimal. Fast. Local.
Make the Touch Bar useful again.

## License

MIT
