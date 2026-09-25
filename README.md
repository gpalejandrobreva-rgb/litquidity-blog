# Tema Litquidity — Duplicación Exacta 100% para Blog

Tema editorial y financiero duplicado con **100% de fidelidad visual, tipográfica, interactiva y estructural** a partir de [Litquidity.co](https://litquidity.co/?ref=land-book.com).

Diseñado para un blog de alto impacto sobre finanzas, negocios, tecnología, startups, cripto o newsletter editorial.

---

## 🚀 Vista Rápida del Proyecto

`	ext
quick-noether/
├── index.html                   # Página de Inicio (Home): Hero, Ticker, Reloj NY, Artículos, Snapshot
├── articles.html                # Archivo del Blog: Filtros de categorías, cuadrícula responsive 3 columnas
├── article.html                 # Lectura de Post Individual: Breadcrumbs, autor, botones de compartir, RTE
├── assets/
│   ├── css/
│   │   ├── main.css             # Estilos completos y exactos de Litquidity (tokens de color, tipografía, layouts)
│   │   └── custom.css           # Optimizaciones, animaciones flotantes [data-float] y fallbacks
│   ├── js/
│   │   ├── main.js              # Controlador interactivo: Reloj de NY en vivo, Marquee, Modal, Menú móvil
│   │   └── litquidity-bundle.js # Bundle original completo de Litquidity con librerías auxiliares
│   └── images/
│       ├── bg-pattern-15.svg    # Textura dot-grid (15% opacidad)
│       ├── bg-pattern-20.svg    # Textura dot-grid (20% opacidad)
│       └── bg-pattern-50.svg    # Textura dot-grid (50% opacidad)
└── README.md                    # Esta guía
`

---

## ⚡ Características Duplicadas al 100%

1. **Tipografía y Estilo:**
   - Fuente sans: **Instrument Sans** (Google Fonts).
   - Fuente serif editorial: **IvyPresto Headline** (Adobe Typekit) con soporte fallback integrado de alta calidad (**Newsreader**).
   - Paleta de color premium:
     - Verde bosque profundo: #23352f / #2b5038
     - Menta brillante: #d2faaa
     - Blanco roto / Marfil: #ecf1ee
     - Gris pizarra: #cddedd
     - Fondos texturizados: g-mint-fade, g-dark-gradient.

2. **Componentes Interactivos en Vivo:**
   - **Ticker Financiero Continuo**: Barra horizontal animada infinita con cotizaciones de Wall Street (NVDA, TSLA, PLTR, META, AAPL, ^GSPC, BTC-USD, etc.) con indicadores verde/rojo.
   - **Reloj de Mercado en Tiempo Real**: Fecha y hora exacta sincronizadas al segundo con la zona horaria de Wall Street (America/New_York).
   - **Modal de Suscripción**: Ventana emergente con selector de publicaciones y cierre con tecla Escape o clic fuera.
   - **Menú Móvil Completo**: Drawer responsive con animación suave y enlaces sociales (Instagram y X/Twitter).
   - **Botón de Compartir con 1 Clic**: Botón para copiar enlace al portapapeles con notificación toast emergente y popups para Twitter/X, LinkedIn y Facebook.

---

## 🛠️ Cómo Ejecutar en Local

Puedes abrir los archivos .html directamente en tu navegador o lanzar un servidor estático ligero:

### Opción 1: Con Node.js (Recomendado)
`ash
npx serve .
`
Abre en tu navegador http://localhost:3000.

### Opción 2: Abrir directamente
Haz doble clic sobre index.html, rticles.html o rticle.html en el explorador de archivos.

---

## ✏️ Cómo Personalizar para Tu Blog

### 1. Cambiar el Logotipo o Nombre
En index.html, rticles.html y rticle.html, localiza:
`html
<div class=site-header_logo>
  <a class=logo href=index.html aria-label=Tu Blog>
    <!-- Aquí puedes poner tu texto en <h2> o sustituir el SVG -->
  </a>
</div>
`

### 2. Añadir un Nuevo Artículo
1. Duplica rticle.html con el nombre de tu nuevo artículo (por ejemplo, mi-primer-post.html).
2. Edita el título, la fecha, el autor y el texto dentro de:
   `html
   <section class=post-content mw-40 rte>
     <!-- Tu contenido aquí -->
   </section>
   `
3. Enlázalo en la lista de artículos de index.html y rticles.html.

### 3. Conectar tu Proveedor de Newsletter
Si usas **Beehiiv**, **Substack**, **Mailchimp** o **ConvertKit**:
- Reemplaza el atributo ction de <form class=subscription-form> con la URL de captura de tu proveedor o añade el código de incrustación de tu formulario.

---

## 🌐 Despliegue en Producción
Este tema no requiere base de datos ni compilación previa. Puedes arrastrar la carpeta o conectarla con un solo clic a:
- **Vercel**
- **Netlify**
- **Cloudflare Pages**
- **GitHub Pages**
