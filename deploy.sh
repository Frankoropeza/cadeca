#!/bin/zsh
# ─────────────────────────────────────────────────────────────────
# deploy.sh — Deploy CADECA a GitHub Pages
# Uso: ./deploy.sh "mensaje del commit"
# Si no se da mensaje, genera uno automático basado en los cambios
# ─────────────────────────────────────────────────────────────────

set -e
cd "$(dirname "$0")"

# ── 1. Verificar cambios ──────────────────────────────────────────
STATUS=$(git status --short)
if [[ -z "$STATUS" ]]; then
  echo "⚠️  No hay cambios pendientes. El sitio ya está actualizado."
  git log --oneline -1
  exit 0
fi

echo "📋 Cambios detectados:"
git status --short
echo ""

# ── 2. Mensaje del commit ─────────────────────────────────────────
if [[ -n "$1" ]]; then
  MSG="$1"
else
  # Auto-generar mensaje basado en archivos modificados
  ADDED=$(git status --short | grep "^?" | wc -l | tr -d ' ')
  MODIFIED=$(git status --short | grep "^.M\|^M" | wc -l | tr -d ' ')
  DELETED=$(git status --short | grep "^.D\|^D" | wc -l | tr -d ' ')
  IMGS=$(git status --short | grep -c "\.\(avif\|jpg\|png\|webp\)" 2>/dev/null || echo 0)

  PARTS=()
  [[ $IMGS -gt 0 ]] && PARTS+=("$IMGS imágenes")
  [[ $MODIFIED -gt 0 ]] && PARTS+=("$MODIFIED archivos modificados")
  [[ $ADDED -gt 0 ]] && PARTS+=("$ADDED archivos nuevos")
  [[ $DELETED -gt 0 ]] && PARTS+=("$DELETED eliminados")

  MSG="update: $(IFS=', '; echo "${PARTS[*]:-cambios generales}")"
fi

# ── 3. Commit y push ─────────────────────────────────────────────
echo "📦 Haciendo commit: \"$MSG\""
git add -A
git commit -m "$MSG"

echo "🚀 Subiendo a GitHub..."
git push origin main

echo ""
echo "✅ Deploy iniciado. GitHub Actions está construyendo el sitio."
echo "   Ver progreso: https://github.com/Frankoropeza/cadeca/actions"
echo "   Sitio en vivo: https://cajas-de-carton.com (en ~2 minutos)"
