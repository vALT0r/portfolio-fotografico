# 📋 PLAN MAESTRO - Portfolio Daerbon Photography
*Consolidado de marketing + setup técnico*

---

## ✅ **COMPLETADO - TÉCNICO**
- [x] **Cloud Name**: `dunjl9u7y` configurado
- [x] **Imagen Luna**: Subida y conectada a Cloudinary
- [x] **Categorías**: Actualizadas según tus carpetas reales
- [x] **Dominio**: daerbon.com.ar funcionando
- [x] **Analytics**: Google Analytics configurado
- [x] **Formulario**: ContactForm operativo
- [x] **Design**: Paleta de colores y tipografía Poppins
- [x] **Business Cards**: Diseñadas en Illustrator
- [x] **Email Signature**: Instalada en Gmail

---

## 🔥 **PRIORIDADES INMEDIATAS**

### **1. CARGAR PORTFOLIO CON TUS MEJORES FOTOS (HOY)**
- **Status:** 🎯 CRÍTICO
- **Meta:** 6-8 fotos por categoría (30 fotos total)
- **Categorías prioritarias:**
  - Arquitectura (tu fuerte con 10 meses experiencia)
  - Paisajes 
  - Eventos (tienes experiencia)
  - Astrofotografía (tu diferenciador único)

### **2. CONFIGURAR UPLOAD PRESET CLOUDINARY (15 min)**
- Ir a: https://cloudinary.com/console
- Settings → Upload → Upload presets
- **Name**: `daerbon-portfolio`
- **Mode**: `Unsigned`

### **3. SUBIR IMÁGENES SISTEMÁTICAMENTE**
- **Estructura sugerida:**
  - `arquitectura/arq-001`, `arq-002`, etc.
  - `paisajes/paisaje-001`, `paisaje-002`, etc.
  - `eventos/evento-001`, `evento-002`, etc.
  - `naturaleza/naturaleza-001`, etc.

---

## 💰 **ESTRATEGIA COMERCIAL (PRÓXIMOS 30 DÍAS)**

### **🎯 OBJETIVO PRIMER MES:**
3-5 trabajos = $150.000-250.000 ARS

### **🏠 TARGET PRINCIPAL: INMOBILIARIAS**
- **Precio básico**: $15.000-25.000 ARS (5-10 fotos)
- **Precio premium**: $35.000-45.000 ARS (15-20 fotos)
- **Acción**: Visitar 5 inmobiliarias en Acebal/Rosario
- **Ofrecer**: Primera sesión con 20% descuento

### **🎉 TARGET SECUNDARIO: EVENTOS FAMILIARES**
- **Mini sesión**: $15.000-30.000 ARS (1 hora)
- **Cumpleaños/Bautismos**: $40.000-60.000 ARS (2-3 horas)
- **Red**: Aprovechar contactos familiares y sociales

### **⚽ TARGET DIFERENCIADOR: DEPORTES LOCALES**
- **Partido fútbol**: $30.000-50.000 ARS
- **Beneficio**: Credenciales y visibilidad
- **Contactar**: Clubes locales de Acebal

---

## 📱 **MARKETING DIGITAL (DESPUÉS DE CARGAR FOTOS)**

### **INSTAGRAM STRATEGY**
- **Handle**: @daerbonph
- **Contenido**: 1 post cada 2 días con tus trabajos
- **Stories**: Behind-the-scenes de sesiones
- **Template de lanzamiento listo** en `marketing/instagram-strategy.md`

### **GOOGLE MY BUSINESS**
- Crear perfil "Daerbon Photography - Acebal"
- Portfolio completo
- Solicitar reviews

---

## 🔄 **WORKFLOW OPTIMIZADO**

### **PARA CADA NUEVA IMAGEN:**
1. **Editar** en Lightroom/Photoshop
2. **Exportar** en máxima calidad (4000px lado largo)
3. **Subir** a Cloudinary con nombre descriptivo
4. **Actualizar** `js/script.js` con la nueva ruta:
   ```javascript
   image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_800,c_limit,q_85,f_auto/categoria/imagen-nombre`,
   fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/categoria/imagen-nombre`
   ```

---

## 📊 **MÉTRICAS DE ÉXITO - PRÓXIMOS 30 DÍAS**

### **TÉCNICAS:**
- [ ] 30 fotos cargadas y categorizadas
- [ ] PageSpeed score 85+ mobile, 90+ desktop
- [ ] 5+ categorías completas

### **COMERCIALES:**
- [ ] 3 contactos inmobiliarias establecidos
- [ ] 1 trabajo confirmado
- [ ] 100+ visitantes únicos al portfolio

### **MARKETING:**
- [ ] Instagram con 20+ posts
- [ ] Google My Business configurado
- [ ] 3 testimoniales de trabajos previos

---

## 🗂️ **ARCHIVOS DE REFERENCIA**

### **PRECIOS DETALLADOS:** `marketing/estrategia-comercial.md`
### **TEMPLATES INSTAGRAM:** `marketing/instagram-strategy.md`
### **TAREAS HISTÓRICAS:** `marketing/tareas-pendientes.md`

---

## ⚡ **ACCIÓN INMEDIATA (PRÓXIMAS 2 HORAS)**

1. **Configurar Upload Preset** en Cloudinary (15 min)
2. **Seleccionar 30 mejores fotos** de tus carpetas (45 min)
3. **Subir primera tanda** (5 fotos arquitectura) (30 min)
4. **Actualizar código** con nuevas rutas (15 min)
5. **Probar portfolio** con fotos reales (15 min)

---

**🎯 Una vez completado esto, tendrás un portfolio profesional funcionando con tus fotos reales y estarás listo para conseguir los primeros clientes.**
