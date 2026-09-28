// Genera páginas de redirección estáticas a partir de public/_redirects.
// Hosting de producción: GitHub Pages, que no lee _redirects. Para cada regla fija
// «/origen /destino 301» se escribe dist/origen/index.html con meta refresh inmediato
// + rel=canonical al destino (Google lo trata como redirección permanente).
// Las reglas con comodín (*, :param) se resuelven en el cliente desde 404.html.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';

const SITE = 'https://cajas-de-carton.com';
const reglas = readFileSync('public/_redirects', 'utf8').split('\n')
  .map((l) => l.trim()).filter((l) => l && !l.startsWith('#'))
  .map((l) => l.split(/\s+/));

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
let creadas = 0, omitidas = 0;

for (const [origen, destino] of reglas) {
  if (!origen || !destino || /[*:?]/.test(origen)) continue;
  const ruta = /\.[a-z0-9]+$/i.test(origen) ? origen : origen.replace(/\/?$/, '/index.html');
  const archivo = join('dist', decodeURI(ruta));
  if (existsSync(archivo)) { omitidas++; continue; } // nunca pisar una página real
  const url = destino.startsWith('http') ? destino : SITE + destino;
  mkdirSync(dirname(archivo), { recursive: true });
  writeFileSync(archivo, `<!doctype html><html lang="es-MX"><head><meta charset="utf-8">
<title>Redirigiendo…</title><meta name="robots" content="noindex">
<link rel="canonical" href="${esc(url)}"><meta http-equiv="refresh" content="0; url=${esc(destino)}">
<script>location.replace(${JSON.stringify(destino)}+location.hash)</script></head>
<body><a href="${esc(destino)}">Continuar</a></body></html>\n`);
  creadas++;
}
console.log(`redirecciones estáticas: ${creadas} creadas, ${omitidas} omitidas (ya existe la página)`);
