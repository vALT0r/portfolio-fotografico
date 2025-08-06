# Portfolio Fotográfico

Un portfolio web moderno y responsive para fotógrafos profesionales, diseñado para mostrar tu trabajo de manera elegante y profesional.

## 🌟 Características

- **Diseño Responsive**: Se adapta perfectamente a todos los dispositivos
- **Galería Interactiva**: Sistema de filtros por categorías
- **Modal de Vista Ampliada**: Visualización detallada de imágenes
- **Formulario de Contacto**: Sistema de contacto integrado
- **Optimización de Imágenes**: Soporte para Cloudinary
- **Animaciones Suaves**: Transiciones y efectos visuales
- **SEO Optimizado**: Meta tags y estructura semántica

## 🚀 Configuración Rápida

### 1. Clonar el Repositorio
```bash
git clone https://github.com/tu-usuario/portfolio-fotografico.git
cd portfolio-fotografico
```

### 2. Personalizar Contenido
Edita los siguientes archivos con tu información:

#### `index.html`
- Cambia el título y descripción
- Actualiza la información de contacto
- Modifica los textos de "Sobre Mí"

#### `js/script.js`
- Configura tu cuenta de Cloudinary:
```javascript
const CLOUDINARY_CLOUD_NAME = 'tu-cloud-name-real';
const CLOUDINARY_UPLOAD_PRESET = 'tu-upload-preset';
```

### 3. Configurar Cloudinary (Recomendado)

1. Crea una cuenta gratuita en [Cloudinary](https://cloudinary.com/)
2. Obtén tu Cloud Name del dashboard
3. Crea un Upload Preset (Settings → Upload → Upload presets)
4. Sube tus fotos a Cloudinary
5. Actualiza el archivo `js/script.js` con tus datos

### 4. Configurar Formulario de Contacto

El portfolio incluye integración con servicios de formularios gratuitos:

#### Opción 1: FormSubmit (Recomendado)
```javascript
// En la función submitForm() de js/script.js
const response = await fetch('https://formsubmit.co/tu-email@ejemplo.com', {
    method: 'POST',
    body: formData
});
```

#### Opción 2: Formspree
```javascript
const response = await fetch('https://formspree.io/f/tu-form-id', {
    method: 'POST',
    body: formData,
    headers: {
        'Accept': 'application/json'
    }
});
```

## 🌐 Despliegue

### GitHub Pages (Gratis)
1. Haz push de tu código a GitHub
2. Ve a Settings → Pages
3. Selecciona la rama `main` como source
4. Tu sitio estará disponible en `https://tu-usuario.github.io/portfolio-fotografico`

### Netlify (Gratis)
1. Conecta tu repositorio de GitHub con Netlify
2. El despliegue será automático
3. Obtienes un dominio gratuito `.netlify.app`

### Vercel (Gratis)
1. Importa tu proyecto desde GitHub en Vercel
2. Despliegue automático con cada push
3. Dominio gratuito `.vercel.app`

## 📁 Estructura del Proyecto

```
portfolio-fotografico/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos principales
├── js/
│   └── script.js           # Funcionalidad JavaScript
├── images/                 # Imágenes del sitio (opcional)
├── .github/
│   └── copilot-instructions.md
└── README.md
```

## 🎨 Personalización

### Colores
Modifica las variables CSS en `css/styles.css`:
```css
:root {
    --primary-color: #2c3e50;    /* Color principal */
    --secondary-color: #3498db;   /* Color secundario */
    --accent-color: #e74c3c;      /* Color de acento */
    /* ... más variables */
}
```

### Fuentes
Cambia las fuentes en el `<head>` de `index.html` y actualiza:
```css
body {
    font-family: 'Tu-Fuente', sans-serif;
}
```

### Imágenes de Ejemplo
El portfolio incluye imágenes de Unsplash como placeholder. Reemplázalas con tus propias fotos.

## 🔧 Desarrollo Local

Para desarrollo local, simplemente abre `index.html` en tu navegador o usa un servidor local:

```bash
# Con Python
python -m http.server 8000

# Con Node.js (npx)
npx serve .

# Con PHP
php -S localhost:8000
```

## 📱 Características Técnicas

- **HTML5 Semántico**: Estructura accesible y SEO-friendly
- **CSS3 Moderno**: Flexbox, Grid, Variables CSS, Animaciones
- **JavaScript ES6+**: Async/await, Arrow functions, Modules
- **Progressive Enhancement**: Funciona sin JavaScript
- **Lazy Loading**: Carga optimizada de imágenes
- **Responsive Images**: Diferentes tamaños según dispositivo

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -am 'Añadir nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 📞 Soporte

Si necesitas ayuda con la configuración:

1. Revisa la [documentación de GitHub Pages](https://pages.github.com/)
2. Consulta la [guía de Cloudinary](https://cloudinary.com/documentation)
3. Ve los [tutoriales de FormSubmit](https://formsubmit.co/documentation)

## 🎯 Roadmap

- [ ] Sistema de blog integrado
- [ ] Galería con categorías dinámicas
- [ ] Panel de administración
- [ ] Integración con redes sociales
- [ ] Modo oscuro/claro
- [ ] Múltiples idiomas

---

Hecho con ❤️ para fotógrafos que quieren mostrar su trabajo al mundo.
