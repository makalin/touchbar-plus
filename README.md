# TouchBar+

Turn your MacBook Pro Touch Bar into a live, customizable display for real-time data, visuals, and ambient information.

## Features

- 📈 Live crypto ticker (Binance)
- 📰 RSS / Atom feed scrolling
- 🎞 GIF & lightweight animation support
- 🖼 Image mode (file-based placeholder: shows filename/path)
- ⏱ Clock + system stats (CPU, RAM)
- 🔋 Battery monitoring (Charge, Time Remaining)
- 🌐 Network traffic (Real-time speed monitoring)
- ☁️ Weather updates (OpenWeatherMap)
- 🔌 Plugin-based architecture (Sanitized & Secure)
- ⚡ Fast, local-first rendering (Chalk-powered TUI)
- 🎛 CLI + config driven (Zod validation)
- 🎨 Theme support via config (`dark` / `light`)

## Security

TouchBar+ is built with security in mind:
- **Path Sanitization**: All plugin and module paths are strictly validated to prevent path traversal attacks.
- **Config Validation**: Uses Zod to ensure all inputs are schema-valid before the engine starts.
- **Secret Management**: Support for `.env` files to keep your API keys safe.

## Usage

The short, recommended command is `tbarp`. The older `touchbar-plus` command is still supported as an alias.

```bash
# New Modes (recommended)
tbarp --mode battery
tbarp --mode network
tbarp --mode weather --city "New York" --key YOUR_API_KEY

# Existing Modes
tbarp --mode crypto --symbol BTCUSDT
tbarp --mode rss --feed https://news.ycombinator.com/rss
tbarp --mode system --rate 1

# Backwards-compatible alias
touchbar-plus --mode battery
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

* [ ] Multi-widget split view (run multiple modes at once)
* [ ] Touch interaction support (tap/scroll gestures on supported models)
* [ ] Web dashboard (configure modes, preview, and manage plugins)
* [ ] Weather widgets (hourly forecast + icons)
* [ ] Music integrations (local library + streaming)

## Future Improvements
* [ ] Image mode: render previews/ASCII thumbnails instead of just filenames
* [ ] GIF mode: real frame rendering (optional) with better performance controls
* [ ] Config hot-reload while the engine is running
* [ ] Smarter caching/backoff for RSS + external APIs to reduce rate limits
* [ ] Plugin directory management (install/remove/update + signed plugins)

## Author

**Mehmet Turgay Akalın**
Full Stack Developer
GitHub: [https://github.com/makalin](https://github.com/makalin)

## Philosophy

Minimal. Fast. Local.
Make the Touch Bar useful again.

## License

MIT
