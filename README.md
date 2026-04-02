# TouchBar+

Turn your MacBook Pro Touch Bar into a live, customizable display for real-time data, visuals, and ambient information.

## Features

- 📈 Live crypto ticker (Binance, CoinGecko)
- 📰 RSS / Atom feed scrolling
- 🎞 GIF & lightweight animation support
- 🖼 Custom images / screensaver mode
- ⏱ Clock + system stats (CPU, RAM)
- 🔌 Plugin-based architecture
- ⚡ Fast, local-first rendering
- 🎛 CLI + config driven

## Use Cases

- Crypto prices always visible
- News headlines while coding
- Ambient visuals (GIF loops)
- Minimal system monitor
- Personal info strip (quotes, reminders)

## Architecture

```

/touchbar-plus
/core
/modules
/plugins
/configs
/cli

````

## Installation

```bash
git clone https://github.com/makalin/touchbar-plus
cd touchbar-plus
npm install
npm start
````

## Usage

```bash
touchbar-plus --mode crypto --symbol BTCUSDT
touchbar-plus --mode rss --feed https://news.ycombinator.com/rss
touchbar-plus --mode gif --file ./loop.gif
touchbar-plus --mode image --file ./screen.png
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
