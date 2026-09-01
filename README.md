# Calcula.pe — Calculadoras laborales para Perú

Colección de calculadoras y guías laborales gratuitas para trabajadores en Perú.

## Calculadoras disponibles

- **Liquidación de empleo** — CTS, vacaciones truncas, gratificación e indemnización
- **CTS** — Depósito semestral (mayo y noviembre)
- **Gratificación** — Julio y diciembre con bonificación del 9%
- **Vacaciones truncas** — Pago por días no tomados
- **IGV** — Agrega o extrae el 18%

## Guías

- Cómo calcular tu liquidación paso a paso
- CTS: qué es y cuándo te la depositan
- Gratificaciones: fechas, cálculo y bonificación del 9%
- Vacaciones truncas: cuándo te pagan y cuánto
- Asignación familiar: quién tiene derecho y cuánto es

## Vista previa local

```bash
python3 -m http.server 8080
# Abre http://localhost:8080
```

## Despliegue

El sitio es estático — cualquier hosting funciona (GitHub Pages, Netlify, Cloudflare Pages, Vercel).

Para **GitHub Pages**: Settings → Pages → Source: `main`, folder: `/ (root)`.

## SEO y Google Search Console

1. Registra tu URL en [Google Search Console](https://search.google.com/search-console)
2. Verifica propiedad con el método "Etiqueta HTML"
3. Añade la etiqueta meta al archivo `index.html` (dentro de `<head>`)
4. Envía el sitemap: `tu-dominio.com/sitemap.xml`
5. Solicita indexación de cada página desde la sección "Inspeccionar URL"

## AdSense

1. Crea cuenta en [Google AdSense](https://www.google.com/adsense)
2. Añade tu sitio y espera aprobación (1-7 días)
3. Coloca el script de AdSense en el `<head>` de cada página
4. Reemplaza los bloques `<div class="ad-slot">` con tus unidades de anuncio
5. Tras aprobación, añade el archivo `ads.txt` en la raíz

## Monetización

El RPM típico en español para contenido laboral oscila entre $0.50 y $3 por cada 1,000 pageviews. Los ingresos dependen directamente del tráfico SEO.

## Licencia

MIT — usa y modifica libremente.
