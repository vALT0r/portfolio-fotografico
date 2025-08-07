# Guía Completa: Configurar Cloudinary para Daerbon Photography

## 🌟 ¿Por qué Cloudinary?
- **25GB gratuitos** de almacenamiento
- **Optimización automática** de imágenes
- **Redimensionamiento al vuelo**
- **CDN global** para carga rápida
- **Perfecto para portfolios** de fotografía

## 📋 PASO A PASO:

### **1. Crear cuenta (5 minutos)**
1. Ve a: https://cloudinary.com/users/register_free
2. **Sign Up** con tu email: daerbon@gmail.com
3. **Plan Free** (25GB es suficiente para empezar)
4. **Cloud Name:** `daerbon-photography` (o similar)

### **2. Configurar Upload Preset (3 minutos)**
1. **Dashboard** → **Settings** → **Upload**
2. **Scroll down** hasta "Upload presets"
3. **Add upload preset:**
   - **Name:** `daerbon-portfolio`
   - **Signing Mode:** Unsigned
   - **Folder:** `portfolio` (opcional)
4. **Save**

### **3. Subir tus primeras fotos (10 minutos)**
**Categorías sugeridas:**
- `arquitectura/` (5-10 fotos)
- `paisajes/` (5-10 fotos)  
- `deportes/` (3-5 fotos)
- `eventos/` (3-5 fotos)
- `naturaleza/` (5-10 fotos)

### **4. Obtener URLs de imágenes OPTIMIZADAS**
Cada foto tendrá una URL como:
```
// Imagen optimizada para web (400x300 para thumbnails)
https://res.cloudinary.com/daerbon-photography/image/upload/c_fill,w_400,h_300,q_auto,f_auto/portfolio/arquitectura/foto1.jpg

// Imagen full size para modal (800x600)  
https://res.cloudinary.com/daerbon-photography/image/upload/c_fill,w_800,h_600,q_auto,f_auto/portfolio/arquitectura/foto1.jpg
```

**IMPORTANTE:** Usar siempre `q_auto,f_auto` para:
- `q_auto`: Calidad automática (mejor performance)
- `f_auto`: Formato automático (WebP cuando sea posible)

### **5. Actualizar tu portfolio**

**Editar `js/script.js`:**
```javascript
// Cambiar estas líneas:
const CLOUDINARY_CLOUD_NAME = 'daerbon-photography'; // Tu cloud name real
const CLOUDINARY_UPLOAD_PRESET = 'daerbon-portfolio'; // Tu preset real

// Actualizar galleryData con tus fotos reales:
const galleryData = [
    {
        id: 1,
        title: "Casa Colonial Acebal",
        description: "Arquitectura histórica de mi ciudad",
        category: "arquitectura",
        image: "https://res.cloudinary.com/daerbon-photography/image/upload/c_fill,w_400,h_600/portfolio/arquitectura/casa-colonial-1",
        fullImage: "https://res.cloudinary.com/daerbon-photography/image/upload/c_fill,w_800,h_1200/portfolio/arquitectura/casa-colonial-1"
    },
    // ... más fotos
];
```

## 🎯 Tips para mejores resultados:

### **Nombres de archivos:**
- **Descriptivos:** `casa-colonial-acebal-1.jpg`
- **Sin espacios:** Usa guiones (-)
- **Consistentes:** Mantén un patrón

### **Calidad de upload:**
- **Máxima calidad** para portfolio
- Cloudinary optimizará automáticamente
- **Formatos:** JPG para fotos, PNG para logos

### **Organización por carpetas:**
```
portfolio/
├── arquitectura/
│   ├── casa-colonial-1.jpg
│   ├── edificio-moderno-sf-1.jpg
│   └── detalle-balcon-1.jpg
├── paisajes/
│   ├── atardecer-campo-1.jpg
│   ├── cielo-estrellado-1.jpg
│   └── rio-parana-1.jpg
├── deportes/
│   ├── futbol-local-1.jpg
│   ├── automovilismo-sf-1.jpg
│   └── carrera-regional-1.jpg
└── eventos/
    ├── cumpleanos-familiar-1.jpg
    ├── bautismo-1.jpg
    └── aniversario-1.jpg
```

## 🚀 ¡Cuando lo tengas listo!

1. **Crea una nueva branch:**
   ```bash
   git checkout -b feature/fotos-reales-cloudinary
   ```

2. **Actualiza** `js/script.js` con tus URLs reales

3. **Commit y Push:**
   ```bash
   git add .
   git commit -m "📸 Añadir fotos reales desde Cloudinary"
   git push origin feature/fotos-reales-cloudinary
   ```

4. **Crea Pull Request** y mergea

¡**Tu portfolio tendrá fotos reales en minutos!** 🎉
