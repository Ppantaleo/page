# Patricio Pantaleo - Personal Website & Blog

Este repositorio contiene el sitio web personal y blog de Patricio Pantaleo, especialista en Humanidades Digitales y Publicación Académica.

## 📋 Descripción del Proyecto

El proyecto combina dos tecnologías principales:

1. **Sitio Principal**: Aplicación Next.js con TypeScript y Tailwind CSS
2. **Blog**: Generado con Quarto desde archivos fuente y compilado a HTML estático

## 🏗️ Arquitectura

```
├── app/                    # Aplicación Next.js principal
├── components/             # Componentes React reutilizables
│   ├── LinkedInFeed.tsx   # Componente de posts de LinkedIn
│   └── ui/                # Componentes shadcn/ui
├── public/
│   ├── blog/              # ✅ OUTPUT del proyecto Quarto (HTML compilado)
│   └── images/            # Imágenes del sitio principal
├── public/blog/blog_src/  # 📝 FUENTES del blog en Quarto
│   ├── posts/             # Posts del blog (.qmd)
│   │   ├── cuentos/       # Cuentos y relatos breves
│   │   ├── aforismos/     # Aforismos y reflexiones
│   │   └── ...            # Posts académicos
│   ├── _quarto.yml        # Configuración de Quarto
│   ├── custom.scss        # Estilos personalizados
│   ├── cuentos.qmd        # Página de todos los cuentos
│   └── aforismos.qmd      # Página de todos los aforismos
└── ...
```

## 🚀 Tecnologías Utilizadas

### Sitio Principal (Next.js)
- **Framework**: Next.js 15 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS + shadcn/ui
- **Deployment**: Exportación estática para GitHub Pages
- **Fuentes**: Montserrat (sans-serif) + Tan Pearl (serif)

### Blog (Quarto)
- **Generador**: Quarto (sistema de publicación científica)
- **Formato fuente**: Archivos `.qmd` (Quarto Markdown)
- **Output**: HTML estático en `public/blog/`
- **Estilos**: SCSS personalizado que replica el diseño del sitio principal

## 🛠️ Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+
- Quarto CLI (para el blog)

### Configuración Inicial

```bash
# Clonar el repositorio
git clone https://github.com/Ppantaleo/page.git
cd page

# Instalar dependencias
npm install
```

### Desarrollo del Sitio Principal

```bash
# Servidor de desarrollo
npm run dev

# Build para producción
npm run build
```

### Desarrollo del Blog

```bash
# Navegar al directorio del blog
cd public/blog/blog_src

# Renderizar el blog (output a public/blog/)
quarto render

# Servidor de desarrollo para el blog
quarto preview
```

## 📝 Gestión de Contenido

### Estructura del Blog

El blog está organizado en tres categorías principales:

1. **Posts Académicos**: Artículos de investigación, metodología y reflexiones académicas
2. **Cuentos**: Relatos breves y narrativa literaria
3. **Aforismos**: Reflexiones breves y sentencias sobre la experiencia humana

### Crear un Nuevo Post Académico

1. Crear archivo `.qmd` en `public/blog/blog_src/posts/nombre-post/`
2. Incluir metadatos YAML en el frontmatter:

```yaml
---
title: "Título del Post"
author: "Patricio Iván Pantaleo"
date: "2025-06-16"
categories: [posts, categoria]
description: "Descripción del post"
downloads: [pdf, epub]
sharing: [twitter, facebook, linkedin]
license: "CC BY"
doi: 10.62059/ejemplo
---
```

3. Escribir contenido en Markdown
4. Renderizar con `quarto render`

### Crear un Nuevo Cuento

1. Crear archivo `.qmd` en `public/blog/blog_src/posts/nombre-cuento/`
2. Usar plantilla simplificada:

```yaml
---
title: "Título del Cuento"
author:
  - name: Patricio Iván Pantaleo
    orcid: 0000-0002-8104-8975
date: "2025-08-04"
categories: [cuentos, spanish]
description: |
  Breve descripción del cuento.

downloads: [pdf, epub]
sharing: [twitter, facebook, linkedin]
license: "CC BY"
copyright: >
  © 2025 Patricio Iván Pantaleo.

comments:
  hypothesis: true

format:
  html: default
  pdf:
    documentclass: scrartcl
    toc: true
    number-sections: false
    fontsize: 11pt
  epub:
    toc: true
lang: es
---
```

### Gestionar Aforismos

Los aforismos se gestionan de forma centralizada en un solo archivo:

1. Editar `public/blog/blog_src/posts/aforismos/index.qmd`
2. Agregar nuevos aforismos siguiendo el formato:

```markdown
## [Mes Año]

**[fecha]**
> "[aforismo]"

**[otra fecha]**
> "[otro aforismo]"
*[tema opcional]*

---
```

3. Los aforismos aparecen automáticamente en la página principal y en la sección dedicada

### Estructura de un Post

```
posts/nombre-post/
├── index.qmd          # Contenido principal
├── post.jpg           # Imagen destacada
├── post.bib           # Referencias (opcional)
└── archivos/          # Recursos adicionales
```

## 🎨 Organización del Contenido en el Blog

### Página Principal del Blog (`index.qmd`)

La página principal está organizada en secciones:

- **Posts Académicos**: Artículos principales (excluye cuentos y aforismos)
- **Cuentos**: Sección horizontal deslizable con los últimos cuentos
- **Aforismos**: Sección minimalista con enlace al archivo completo

### Categorización Automática

El sistema usa las categorías para organizar el contenido:

- `categories: [posts, ...]` → Aparece en la sección principal
- `categories: [cuentos, ...]` → Aparece en la sección de cuentos
- `categories: [aforismos, ...]` → Aparece en la sección de aforismos

### Páginas Especializadas

- **`cuentos.qmd`**: Todos los cuentos en formato grid
- **`aforismos.qmd`**: Vista completa de aforismos organizados por fecha

## 📱 Actualizar Posts de LinkedIn

### 🔄 Cómo actualizar el componente LinkedIn Feed

El sitio incluye una sección que muestra los últimos posts de LinkedIn mediante iframes embebidos.

**Ubicación:** `components/LinkedInFeed.tsx`

#### Pasos para actualizar:

1. **Obtener la URL del embed:**
   - Ve a tu post en LinkedIn
   - Clic en los 3 puntos (`...`) del post
   - Selecciona "Insertar esta publicación"
   - Copia la URL del atributo `src` del iframe

2. **Actualizar el componente:**
   ```tsx
   // En components/LinkedInFeed.tsx
   const linkedinEmbeds = [
     {
       id: 1,
       src: "https://www.linkedin.com/embed/feed/update/urn:li:share:TU_NUEVO_POST_ID",
       title: "Descripción de tu post"
     },
     // ... otros posts
   ]
   ```

3. **Hacer deploy:**
   ```bash
   git add .
   git commit -m "Update LinkedIn posts"
   git push origin main
   ```

#### ⚠️ Limitaciones:
- No todos los posts de LinkedIn permiten embed
- Usa solo posts que tengan la opción "Insertar esta publicación"
- Los posts muy antiguos pueden no funcionar

#### 💡 Consejos:
- Mantén solo los 3 posts más recientes
- Verifica que los embeds funcionen antes de hacer commit
- Los iframes se cargan automáticamente desde LinkedIn con datos actualizados

## 🎨 Personalización de Estilos

### Sitio Principal
- Configuración en `tailwind.config.ts`
- Colores y variables CSS en `app/globals.css`
- Componentes en `components/ui/`

### Blog
- Estilos principales en `public/blog/blog_src/custom.scss`
- Variables SCSS que replican el diseño del sitio principal
- Estilos específicos para secciones de cuentos y aforismos
- Footer y header personalizados en `footer.html` y `header.html`

### Estilos por Sección

- **Cuentos**: Diseño horizontal deslizable con cards destacadas
- **Aforismos**: Diseño minimalista con tipografía elegante
- **Posts Académicos**: Diseño estándar de blog con metadatos completos

## 🚀 Deployment

El sitio se despliega automáticamente en GitHub Pages mediante GitHub Actions:

1. **Trigger**: Push a la rama `main`
2. **Build**: Next.js exporta estático + Quarto ya renderizado
3. **Deploy**: Archivos estáticos a `gh-pages`
4. **URL**: https://patricio.pantaleo.ar

### Configuración de Deployment

```yaml
# .github/workflows/build-and-deploy.yml
- name: Build
  run: npm run build
- name: Create CNAME
  run: echo "patricio.pantaleo.ar" > out/CNAME
```

## 📁 Estructura de Archivos Clave

```
├── app/
│   ├── layout.tsx         # Layout principal con metadatos
│   ├── page.tsx           # Página de inicio
│   └── globals.css        # Estilos globales
├── components/
│   ├── header.tsx         # Navegación principal
│   ├── LinkedInFeed.tsx   # Componente de LinkedIn
│   └── ui/                # Componentes shadcn/ui
├── public/
│   ├── blog/              # Blog compilado (NO EDITAR)
│   │   ├── index.html     # Lista de posts con secciones
│   │   ├── cuentos.html   # Página de todos los cuentos
│   │   ├── aforismos.html # Página de todos los aforismos
│   │   └── posts/         # Posts individuales
│   └── blog/blog_src/     # Fuentes del blog (EDITAR AQUÍ)
│       ├── posts/
│       │   ├── cuentos/   # Cuentos individuales
│       │   ├── aforismos/ # Archivo único de aforismos
│       │   └── ...        # Posts académicos
│       ├── custom.scss    # Estilos del blog
│       ├── cuentos.qmd    # Página de cuentos
│       └── aforismos.qmd  # Página de aforismos
├── next.config.mjs        # Configuración Next.js para export
└── package.json           # Dependencias y scripts
```

## 📄 Licencia

Este proyecto está bajo la licencia GPL-3.0. Ver [LICENSE](LICENSE) para más detalles.

## 🤝 Contribución

1. Fork del proyecto
2. Crear feature branch (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push al branch (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

## 📧 Contacto

- **Autor**: Patricio Iván Pantaleo
- **Email**: patricio@pantaleo.ar
- **Website**: https://patricio.pantaleo.ar
- **ORCID**: [0000-0002-8104-8975](https://orcid.org/0000-0002-8104-8975)

---

**Nota**: El blog se genera con Quarto desde `public/blog/blog_src/` y el output se coloca en `public/blog/`. No editar directamente los archivos HTML del blog.

### 📖 Flujo de Trabajo Recomendado

1. **Para posts académicos**: Crear nueva carpeta en `posts/` con metadatos completos
2. **Para cuentos**: Crear nueva carpeta en `posts/` con categoría `cuentos`
3. **Para aforismos**: Editar directamente `posts/aforismos/index.qmd`
4. **Renderizar**: `cd public/blog/blog_src && quarto render`
5. **Deploy**: `git push origin main` (automático)