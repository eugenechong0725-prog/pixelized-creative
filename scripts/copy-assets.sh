#!/bin/bash
# Optional: copy brand assets into public/images for static hosting
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ASSETS="/Users/eugenechongzhikai/.cursor/projects/Users-eugenechongzhikai-Projects-pixelized-creative/assets"
OUT="$ROOT/public/images"
mkdir -p "$OUT"

cp "$ASSETS/WhatsApp_Image_2026-08-07_at_18.11.13-2-7501515d-e787-4a51-bfad-a383317aa0fe.png" "$OUT/logo-black.png"
cp "$ASSETS/WhatsApp_Image_2026-08-07_at_18.11.13-375ea927-5c1b-4dda-9c95-d077761a7b6e.png" "$OUT/logo-cyan.png"
cp "$ASSETS/WhatsApp_Image_2026-08-07_at_18.12.46-2-78b1eec2-4cd5-4400-8577-277499d0aad9.png" "$OUT/portfolio-bharat-group.png"
cp "$ASSETS/WhatsApp_Image_2026-08-07_at_18.12.46-80131181-73c0-4d90-85d3-a0c0519ea950.png" "$OUT/portfolio-business-card.png"
cp "/Users/eugenechongzhikai/Downloads/A4-210Hx297W-Landscape-1Fa-Design1.pdf" "$OUT/flyer-design.pdf"
sips -s format png "/Users/eugenechongzhikai/Downloads/A4-210Hx297W-Landscape-1Fa-Design1.pdf" --out "$OUT/portfolio-flyer.png" || true

echo "Assets copied to $OUT"
ls -la "$OUT"
