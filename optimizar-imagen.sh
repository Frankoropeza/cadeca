#!/bin/zsh
# ─────────────────────────────────────────────────────────────────
# optimizar-imagen.sh — Optimiza imágenes descargadas de ImageFX
# Uso: ./optimizar-imagen.sh <archivo-entrada> <nombre-seo>
#
# Ejemplo:
#   ./optimizar-imagen.sh ~/Downloads/Image_fx.png cajas-corrugado-estandar-cdmx
#
# Resultado: public/img/productos/cajas-corrugado-estandar-cdmx.avif
#            1200×675px · AVIF quality 55 · ~15-50 KB
# ─────────────────────────────────────────────────────────────────

set -e

INPUT="$1"
SEO_NAME="$2"
DEST_DIR="$(dirname "$0")/public/img/productos"
OUTPUT="$DEST_DIR/${SEO_NAME}.avif"

if [[ -z "$INPUT" || -z "$SEO_NAME" ]]; then
  echo "Uso: $0 <archivo> <nombre-seo-sin-extension>"
  echo "Ejemplo: $0 ~/Downloads/Image_fx.png cajas-corrugado-bodega-cdmx"
  exit 1
fi

if [[ ! -f "$INPUT" ]]; then
  echo "❌ Archivo no encontrado: $INPUT"
  exit 1
fi

echo "📦 Optimizando: $(basename "$INPUT") → ${SEO_NAME}.avif"
echo "   Destino: $OUTPUT"

npx --yes sharp-cli \
  -i "$INPUT" \
  -o "$OUTPUT" \
  --format avif \
  -mq 55 \
  resize 1200 675

SIZE=$(du -sh "$OUTPUT" | cut -f1)
DIMS=$(sips -g pixelWidth -g pixelHeight "$OUTPUT" 2>/dev/null | awk '/pixel/{printf $2"x"}' | sed 's/x$//')

echo "✅ Listo: ${SEO_NAME}.avif — ${DIMS}px · ${SIZE}"
