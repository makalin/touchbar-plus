const { z } = require('zod');
const path = require('path');

const configSchema = z.object({
  mode: z.enum(['crypto', 'rss', 'system', 'image', 'gif', 'weather', 'battery', 'network', 'custom']),
  symbol: z.string().optional(),
  feed: z.string().url().optional().or(z.string().optional()),
  speed: z.number().min(0.1).max(3600).default(3),
  theme: z.enum(['dark', 'light']).default('dark'),
  file: z.string().optional(),
  plugin: z.string().optional(),
  apiKey: z.string().optional()
});

function validateConfig(config) {
  return configSchema.safeParse(config);
}

function sanitizePath(base, inputPath) {
  const absoluteBase = path.resolve(base);
  const absoluteInput = path.resolve(base, inputPath);
  
  if (!absoluteInput.startsWith(absoluteBase)) {
    throw new Error('Security Error: Path traversal detected.');
  }
  return absoluteInput;
}

module.exports = { validateConfig, sanitizePath };
