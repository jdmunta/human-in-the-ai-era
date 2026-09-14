// Minimal static server for the Astro build. Railway sets PORT.
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, 'dist');
const app = express();
const port = process.env.PORT || 4321;

app.disable('x-powered-by');

// Immutable hashed assets get a long cache; HTML stays fresh.
app.use(
  '/_astro',
  express.static(path.join(dist, '_astro'), {
    immutable: true,
    maxAge: '1y',
  })
);

// Fonts never change at these paths; treat them like hashed assets.
app.use(
  '/fonts',
  express.static(path.join(dist, 'fonts'), { immutable: true, maxAge: '1y' })
);

// Everything else (HTML, sitemap, favicon) must revalidate so content
// updates are visible immediately after a deploy.
app.use(
  express.static(dist, {
    extensions: ['html'],
    setHeaders(res) {
      res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    },
  })
);

app.get('/healthz', (_req, res) => res.type('text/plain').send('ok'));

app.use((_req, res) => {
  res.status(404).sendFile(path.join(dist, '404.html'), (err) => {
    if (err) res.type('text/plain').send('404 — Not found');
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`[human-in-the-ai-era] serving ./dist on :${port}`);
});
