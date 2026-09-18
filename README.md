# ⚠️ REPOSITORIO INACTIVO / ARCHIVADO

> **ESTE REPOSITORIO YA NO ESTÁ EN PRODUCCIÓN**  
> Ha sido reemplazado por la plataforma unificada en `davidbonucci-web` y su dominio oficial: **[davidbonucci.com](https://davidbonucci.com)**.  
> Todo el tráfico de `daerbon.com.ar` ha sido redirigido vía Cloudflare Redirect Rules a `https://davidbonucci.com`.  
> Este código se conserva únicamente como archivo histórico.

---

# Portfolio Fotográfico - Daerbon Photography (Histórico)

Portfolio web moderno y responsive para **David Eric Bonucci (Daerbon)**, fotógrafo de Acebal, Santa Fe, Argentina. Diseñado para mostrar trabajo fotográfico con integración completa de Cloudinary y sistema avanzado de galerías.

## 🌟 Características Implementadas

- **Diseño Responsive**: Adaptación perfecta a todos los dispositivos
- **Integración Cloudinary Completa**: 74 imágenes organizadas en 9 categorías
- **Sistema de Galerías Avanzado**: 
  - Navegación por categorías con tarjetas interactivas
  - Modal de visualización con navegación entre imágenes
  - Sistema de precarga inteligente para optimización de velocidad
  - Loading spinners y transiciones suaves
- **Generación Automatizada**: Script Python para generar datos de galería
- **Formulario de Contacto**: Integrado con FormSubmit
- **Optimización de Performance**: 
  - Precarga de imágenes adyacentes
  - Cache inteligente con Map-based system
  - Lazy loading y optimización de memoria
- **SEO Optimizado**: Meta tags completos y estructura semántica
- **Animaciones Suaves**: Transiciones CSS3 y efectos visuales

## 📸 Contenido Actual

### Categorías de Imágenes (74 fotos total):
- **Arquitectura**: 10 imágenes
- **Paisajes**: 24 imágenes  
- **Naturaleza**: 17 imágenes
- **Astrofotografía**: 2 imágenes
- **Animales**: 7 imágenes
- **Eventos**: 3 imágenes
- **Macro**: 3 imágenes
- **Retratos**: 2 imágenes
- **Urbano**: 6 imágenes

### Configuración Cloudinary:
- **Cloud Name**: `dunjl9u7y`
- **Upload Preset**: `daerbon-portfolio`
- **Estructura de paths**: `portfolio/{categoria}/`

## 🚀 Estructura del Proyecto

### Archivos Principales
```
portfolio-fotografico/
├── index.html                    # Página principal con hero personalizado
├── css/
│   └── styles.css               # Estilos completos con optimizaciones
├── js/
│   └── script.js                # Sistema completo de galerías y precarga
├── images/
│   └── me.jpg                   # Imagen personal del fotógrafo
├── ROADMAP.md                   # Plan maestro de tareas pendientes
├── MARKETING-GUIDE.md           # Estrategia comercial y marketing
├── .github/
│   └── copilot-instructions.md
└── README.md
```

### Archivos Generados Automáticamente:
- Arrays JavaScript integrados en `js/script.js`
- Respaldos JSON para recuperación de datos
- Logs de generación con estadísticas por categoría

## 🛠️ Uso del Sistema

### 1. Generar Datos de Galería
```bash
python generate_gallery_data.py
```

Este script:
- Escanea la estructura de carpetas de imágenes
- Genera URLs de Cloudinary automáticamente
- Crea archivos JavaScript y JSON
- Proporciona estadísticas detalladas

### 2. Sistema de Precarga Inteligente
El JavaScript implementa:
- **Cache con Map**: Almacenamiento optimizado de imágenes
- **Precarga adyacente**: Carga las 2 imágenes siguientes/anteriores
- **Preload de categorías**: Carga imágenes destacadas al navegar
- **Gestión de memoria**: Limpieza automática del cache

### 3. Navegación de Galerías
- **Vista de categorías**: Grid de tarjetas con imagen destacada
- **Modal de imágenes**: Navegación completa con controles
- **Loading indicators**: Spinners solo cuando es necesario
- **Transiciones suaves**: Fade effects y animaciones CSS

## 🌐 Configuración y Despliegue

### GitHub Pages (Implementado)
- **URL**: `https://vALT0r.github.io/portfolio-fotografico`
- **Despliegue**: Automático desde rama `main`
- **Dominio personalizado**: Configurado con CNAME

### Formulario de Contacto (Configurado)
- **Servicio**: FormSubmit integrado
- **Email**: `daerbon@gmail.com`
- **Redirección**: Página de confirmación configurada
- **Tipos de servicio**: 8 categorías específicas

### Analytics (Implementado)
- **Google Analytics**: `G-8XBS134N7Y`
- **Tracking**: Configurado para todas las páginas

## 📱 Características Técnicas Implementadas

### Performance Optimizations:
- **Lazy Loading**: Imágenes se cargan solo cuando son necesarias
- **Image Cache**: Sistema Map-based para evitar recargas
- **Preloading Strategy**: Carga inteligente de imágenes adyacentes
- **Memory Management**: Limpieza automática del cache
- **Loading Spinners**: Indicadores solo cuando hay demora real

### CSS Optimizations:
- **will-change**: Propiedades optimizadas para animaciones
- **backface-visibility**: Optimización de rendering 3D
- **object-fit**: Manejo inteligente de proporciones de imagen
- **Responsive Images**: Adaptación automática por device

### JavaScript Features:
- **Async/Await**: Carga asíncrona optimizada
- **ES6+ Features**: Destructuring, arrow functions, template literals
- **Error Handling**: Manejo robusto de errores de carga
- **Event Delegation**: Optimización de event listeners

## 📊 Estadísticas del Proyecto

### Contenido:
- **74 imágenes** distribuidas en 9 categorías
- **Tamaños optimizados**: 50KB - 500KB por imagen
- **Transformaciones Cloudinary**: Automáticas según device
- **Tiempo de carga promedio**: <2 segundos con precarga
### SEO & Metadata:
- **Meta description**: Optimizada para búsqueda local
- **Structured data**: Schema.org para fotógrafos
- **Social media tags**: Open Graph configurado
- **Local SEO**: Acebal, Santa Fe, Argentina

## 🎨 Personalización Implementada

### Información Personal:
- **Nombre**: David Eric Bonucci
- **Marca**: Daerbon Photography  
- **Ubicación**: Acebal, Santa Fe, Argentina
- **Especialidades**: Arquitectura, paisajes, astrofotografía, naturaleza
- **Contacto**: daerbon@gmail.com, +54 341 357 8224
- **Instagram**: @daerbonph

### Tono y Mensaje:
- **Enfoque humilde**: "Practicando" vs "especializado"
- **Experiencia honesta**: "Desde 2024"
- **Visión artística**: Capturar lo extraordinario, invisible, inalcanzable
- **Legado familiar**: Honrando a René Bonucci

### Colores y Estilo:
```css
:root {
    --primary-color: #2c3e50;      /* Azul oscuro elegante */
    --secondary-color: #3498db;     /* Azul profesional */  
    --accent-color: #e74c3c;        /* Rojo de acento */
    --text-color: #333;             /* Gris oscuro legible */
    --bg-color: #f8f9fa;           /* Fondo claro suave */
}
```

## 🔧 Scripts de Automatización

### generate_gallery_data.py
```python
# Características del script:
- Escaneo automático de carpetas
- Generación de URLs Cloudinary
- Creación de arrays JavaScript
- Backup en formato JSON  
- Estadísticas detalladas
- Logging completo
```

### Uso:
```bash
# Ejecutar desde la carpeta raíz
python generate_gallery_data.py

# Output esperado:
# ✅ Arquitectura: 10 imágenes
# ✅ Paisajes: 24 imágenes  
# ✅ Naturaleza: 17 imágenes
# ... etc
```

## 🤝 Créditos y Reconocimientos

### Desarrollo:
- **Fotógrafo**: David Eric Bonucci (Daerbon)
- **Desarrollo**: Implementado con GitHub Copilot
- **Hosting**: GitHub Pages
- **CDN de Imágenes**: Cloudinary
- **Formularios**: FormSubmit
- **Analytics**: Google Analytics

### Tecnologías Utilizadas:
- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Fuentes**: Google Fonts (Poppins)
- **Iconos**: Font Awesome 6.4.0
- **Backend**: Python (script de automatización)
- **Deployment**: Git + GitHub Pages

## 📄 Licencia y Uso

Este portfolio fue desarrollado específicamente para **Daerbon Photography**. Las imágenes son propiedad de David Eric Bonucci. El código base puede ser utilizado como referencia para otros proyectos fotográficos.

## 📞 Contacto del Fotógrafo

- **Email**: daerbon@gmail.com
- **Teléfono**: +54 341 357 8224  
- **Instagram**: [@daerbonph](https://instagram.com/daerbonph)
- **Ubicación**: Acebal, Santa Fe, Argentina
- **Portfolio en vivo**: [https://vALT0r.github.io/portfolio-fotografico](https://vALT0r.github.io/portfolio-fotografico)

## 🎯 Estado del Proyecto: COMPLETADO ✅

### Características Implementadas:
- ✅ Cloudinary integration (74 imágenes)
- ✅ Sistema de galerías completo
- ✅ Precarga inteligente y optimizaciones
- ✅ Script Python de automatización  
- ✅ Formulario de contacto funcional
- ✅ SEO y analytics configurados
- ✅ Responsive design completo
- ✅ Hero section con imagen personal
- ✅ Deployment en GitHub Pages

### Performance Actual:
- ⚡ Tiempo de carga inicial: ~1-2 segundos
- 🖼️ Navegación entre imágenes: Instantánea (con precarga)
- 📱 Responsive: Optimizado para todos los dispositivos  
- 🔍 SEO Score: Optimizado para búsqueda local

## 📋 Documentación de Proyecto

- **`ROADMAP.md`**: Plan maestro de tareas pendientes organizadas por prioridad
- **`MARKETING-GUIDE.md`**: Estrategia comercial completa, precios, templates y targets

---

**Daerbon Photography** - Capturando lo extraordinario en lo cotidiano desde 2024 📸
