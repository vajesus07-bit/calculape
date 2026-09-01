# Calcula.pe — Calculadoras laborales para Perú

Colección de calculadoras y guías laborales gratuitas para trabajadores en Perú. Monetizado con AdSense.

## Estructura

```
calcula-pe/
├── index.html                  # Página principal
├── sobre.html                 # Página "sobre nosotros"
├── politica-privacidad.html   # Política de privacidad (requerida por AdSense)
├── sitemap.xml                # Sitemap para SEO
├── robots.txt
├── calculadoras/
│   ├── liquidacion.html
│   ├── cts.html
│   ├── gratificacion.html
│   ├── vacaciones.html
│   └── igv.html
├── guias/
│   ├── liquidacion-paso-a-paso.html
│   ├── cts-guia.html
│   ├── gratificaciones-guia.html
│   ├── vacaciones-guia.html
│   └── asignacion-familiar.html
└── assets/
    ├── css/styles.css
    ├── js/utils.js
    └── img/favicon.svg
```

## Vista previa local

```bash
cd calcula-pe
python3 -m http.server 8080
# Abre http://localhost:8080
```

O simplemente abre `index.html` directamente en tu navegador.

## Despliegue en GitHub Pages

1. Crea un repositorio en GitHub (ej. `calcula-pe`).
2. Sube todos los archivos de `calcula-pe/` a la rama `main`.
3. Ve a Settings → Pages → Source: `main`, folder: `/ (root)`.
4. Espera ~2 minutos. Tu sitio estará en `https://tu-usuario.github.io/calcula-pe/`.

## Despliegue en Netlify / Cloudflare Pages / Vercel

Estas plataformas sirven archivos estáticos desde la carpeta raíz. Solo arrastra la carpeta `calcula-pe/` al panel de Netlify o conecta el repositorio de GitHub.

## Cambiar el dominio

En todos los archivos `.html`, el atributo `href="/"` y los `canonical` usan rutas relativas que funcionan en cualquier dominio. Los `canonical` y URLs del sitemap usan `https://calcula.pe/` como placeholder. Reemplázalos:

```bash
cd calcula-pe
# Reemplaza el dominio placeholder por el tuyo
grep -rl "calcula.pe" . --include="*.html" --include="*.xml" | xargs sed -i 's|https://calcula.pe|https://tu-dominio.com|g'
```

## Checklist AdSense

Google AdSense exige que el sitio tenga contenido original y genuino, páginas de política de privacidad y sobre nosotros (ya incluidas), y tráfico antes de aprobarte. Sigue estos pasos:

### 1. Crear cuenta AdSense
- Ve a [Google AdSense](https://www.google.com/adsense) y crea una cuenta.
- Añade tu sitio web (dominio).

### 2. Colocar el script de AdSense
En cada archivo `.html`, dentro de `<head>`, encontrarás un bloque comentado:

```html
<!-- AdSense: descomenta y coloca tu ID tras crear el sitio en AdSense
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
-->
```

Reemplaza `XXXXXXXXXXXXXXXX` con tu ID de editor de AdSense (lo encuentras en tu panel de AdSense) y descomenta el bloque.

### 3. Reemplazar los espacios publicitarios

En cada página hay bloques `<div class="ad-slot">`. Reemplaza el contenido de cada uno por tu código de unidad de anuncio de AdSense:

```html
<div class="ad-slot" data-pos="top">
  <ins class="adsbygoogle"
    style="display:block"
    data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
    data-ad-slot="1234567890"
    data-ad-format="auto">
  </ins>
</div>
```

### 4. Archivo ads.txt (después de ser aprobado)

Una vez que AdSense te approve, ve a tu panel → "Accesos de anuncio" → descarga el archivo `ads.txt` y colócalo en la raíz del sitio (al mismo nivel que `index.html`). Esto es necesario para que los anuncios se muestren correctamente.

### 5. Esperar aprobación

El proceso de revisión puede tardar de 1 a 7 días. Google verifica que el sitio tenga contenido suficiente, páginas necesarias y cumpla las políticas. Si te rechazan, lee el motivo en el panel de AdSense y ajusta.

## Requisitos para la aprobación

- **5 calculadoras + 5 guías** de contenido original (✓ ya cumplidos).
- **Páginas de política de privacidad y sobre nosotros** (✓ incluidas).
- **Dominio activo** (no localhost).
- **Sin contenido prohibido** (material pirateado, contenido adulto, etc.).
- **Navegación funcional**: todos los enlaces funcionan.
- **Responsive**: el diseño funciona en móvil (✓).

## Monetización realista

- **AdSense no genera ingresos sin tráfico**. Los RPM típicos en español para contenido laboral en Perú rondan los $0.5–$3 por cada 1,000 pageviews.
- Para que el sitio sea rentable necesitas tráfico SEO consistente. El nicho de calculadoras laborales en Perú tiene buena oportunidad porque los sitios oficiales son confusos y hay poca competencia de calidad.
- El contenido de las guías con datos estructurados (FAQ, HowTo) ayuda a posicionarse en búsquedas de fragmentos destacados (rich snippets).

## Mantenimiento

- Los montos legales (asignación familiar, RMV) pueden cambiar anualmente. Revisa y actualiza los valores por defecto en las calculadoras cuando se publiquen nuevas tasas.
- Agrega más calculadoras y guías conforme crezca el tráfico.

## Licencia

Código abierto bajo MIT. Puedes usarlo, modificarlo y monetizarlo libremente.
