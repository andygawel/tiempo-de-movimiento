# Archivos pendientes de activar

Estos archivos estaban en pp/ pero se movieron para evitar generar URLs con un dominio placeholder en GitHub Pages.

## Cuando activarlos

Cuando tengas el dominio definitivo (ej. https://tiempodemovimiento.com.ar):

1. Copiar sitemap.ts y obots.ts de vuelta a pp/ 
2. En pp/layout.tsx, actualizar metadataBase con tu dominio real
3. En data/site.ts, actualizar site.url con tu dominio real
4. Hacer commit y push. Se regenerarán en el build.

Mientras estén aquí fuera de pp/, no se publican y no generan URLs rotas.
