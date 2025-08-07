# 🎨 Paleta de Colores y Branding - Daerbon Photography

## 🎯 **OBJETIVO DE LA TAREA**
Definir la paleta de colores oficial para el portfolio web y las tarjetas de presentación, considerando impresión en Pantone con overprint.

---

## 📚 **COLORIMETRÍA BÁSICA PARA FOTOGRAFÍA**

### **🔍 Psicología del Color en Fotografía:**

**AZUL** → Confianza, profesionalismo, tecnología
- Ideal para: portfolios técnicos, arquitectura
- Pantone: 286 C (azul corporativo), 3125 C (azul profundo)

**GRIS/NEGRO** → Elegancia, sofisticación, atemporalidad
- Ideal para: galerías, arte, minimalismo
- Pantone: Cool Gray 11 C, Process Black C

**VERDE** → Naturaleza, crecimiento, armonía
- Ideal para: paisajes, sustentabilidad
- Pantone: 347 C (verde natural), 5545 C (verde bosque)

**DORADO/AMARILLO** → Creatividad, energía, calidez
- Ideal para: eventos, retratos
- Pantone: 871 C (dorado metálico), 137 C (amarillo cálido)

---

## 🛠️ **HERRAMIENTAS PARA PALETAS**

### **🎨 Generadores de Paletas:**

1. **Adobe Color** (color.adobe.com)
   - Extrae colores de fotos
   - Reglas de armonía (complementarios, triádicos)
   - Exporta a Illustrator directamente

2. **Coolors.co**
   - Generador automático
   - Locked colors (fijar colores base)
   - Export a diferentes formatos

3. **Paletton.com**
   - Basado en teoría del color
   - Previsualización en web
   - Simulador de daltonismo

4. **Material Design Palette**
   - Paletas predefinidas
   - Accesibilidad garantizada
   - Niveles de contraste

### **📐 Reglas de Armonía Cromática:**

**MONOCROMÁTICA**
- Un color base + variaciones de saturación/brillo
- Ejemplo: Azul oscuro → Azul medio → Azul claro

**COMPLEMENTARIA**
- Colores opuestos en el círculo cromático
- Ejemplo: Azul + Naranja, Verde + Rojo

**TRIÁDICA**
- Tres colores equidistantes
- Ejemplo: Azul + Amarillo + Rojo

**ANÁLOGA**
- Colores vecinos en el círculo
- Ejemplo: Azul + Verde azulado + Verde

---

## 🖨️ **CONSIDERACIONES PARA IMPRESIÓN PANTONE**

### **🎯 Colores Pantone Recomendados:**

**OPCIÓN 1: ELEGANTE Y PROFESIONAL**
```
Primary: Pantone Cool Gray 11 C (#53565A)
Secondary: Pantone 286 C (#0072CE)  
Accent: Pantone 871 C (Gold metallic)
Text: Process Black C
Background: White/Pantone Cool Gray 1 C
```

**OPCIÓN 2: NATURAL Y CÁLIDO**
```
Primary: Pantone 5545 C (#507F70) - Verde bosque
Secondary: Pantone 4695 C (#6B4C7A) - Púrpura
Accent: Pantone 137 C (#FFAA4D) - Amarillo cálido
Text: Pantone Black 6 C
Background: Pantone Warm Gray 1 C
```

**OPCIÓN 3: MODERNO Y TECNOLÓGICO**
```
Primary: Pantone Process Black C
Secondary: Pantone 286 C (#0072CE) - Azul corporativo
Accent: Pantone 368 C (#00A651) - Verde brillante
Text: Pantone Cool Gray 11 C
Background: White
```

### **🖨️ Especificaciones de Overprint:**

```css
/* Para diseño digital (referencia) */
.overprint-black {
    mix-blend-mode: multiply; /* Simula overprint */
    color: #000000;
}

.knockout-white {
    mix-blend-mode: screen; /* Simula knockout */
    color: #ffffff;
}
```

**En Illustrator:**
- Texto negro: Overprint Fill activado
- Logos/iconos: Knockout (overprint desactivado)
- Fondos: Depende del diseño

---

## 🌈 **PROCESO DE SELECCIÓN - PASO A PASO**

### **PASO 1: Análisis de tu Estilo Fotográfico**

**Pregúntate:**
- ¿Qué emociones quieres transmitir? (confianza, creatividad, elegancia)
- ¿Cuál es tu especialidad principal? (arquitectura, paisajes, eventos)
- ¿Qué target apuntas? (corporativo, familiar, artístico)

### **PASO 2: Inspiración y Referencias**

**Buscar en:**
- Portfolios de fotógrafos reconocidos
- Dribbble.com (buscar "photography portfolio")
- Behance.net/search/projects/?field=photography
- Pinterest: "photography branding colors"

### **PASO 3: Testing de Paletas**

1. **Crear 3 opciones** en Adobe Color
2. **Aplicar a un mockup** del portfolio
3. **Testear en diferentes dispositivos**
4. **Verificar contraste** (mínimo 4.5:1 para texto)

### **PASO 4: Validación Técnica**

**Accesibilidad:**
- Usar WebAIM Contrast Checker
- Testear con simulador de daltonismo
- Verificar legibilidad en mobile

**Impresión:**
- Convertir RGB a CMYK
- Verificar disponibilidad de Pantones
- Calcular costos de tintas especiales

---

## 📱 **APLICACIÓN EN TU PORTFOLIO**

### **🖥️ Variables CSS a Actualizar:**

```css
:root {
    /* Colores principales */
    --primary-color: #TU_COLOR_PRIMARIO;
    --secondary-color: #TU_COLOR_SECUNDARIO;
    --accent-color: #TU_COLOR_ACENTO;
    
    /* Grises */
    --text-dark: #TU_GRIS_OSCURO;
    --text-light: #TU_GRIS_CLARO;
    --background-light: #TU_FONDO_CLARO;
    
    /* Estados */
    --hover-color: #TU_COLOR_HOVER;
    --success-color: #TU_VERDE_EXITO;
    --error-color: #TU_ROJO_ERROR;
}
```

### **💳 Elementos para Tarjeta:**

- **Logo**: Color primario + negro
- **Texto principal**: Pantone Black 6 C
- **Detalles**: Color secundario
- **QR Code**: Overprint negro sobre fondo claro
- **Bordes/líneas**: Color acento

---

## ✅ **CHECKLIST DE DECISIÓN**

### **ANTES DE DECIDIR:**
- [ ] Crear 3 paletas diferentes
- [ ] Aplicar mockup en portfolio
- [ ] Testear en mobile y desktop
- [ ] Verificar contraste de accesibilidad
- [ ] Consultar precios de Pantone en imprenta local

### **PARA CONFIRMAR:**
- [ ] Paleta elegida funciona en web y print
- [ ] Colores disponibles en Pantone
- [ ] Presupuesto de impresión aprobado
- [ ] Archivos fuente guardados (AI, CSS)

---

## 🎯 **RECOMENDACIÓN PERSONAL**

**Para DAERBON Photography sugiero:**

**PALETA "TIERRA Y CIELO":**
```
🎨 PRIMARY: Pantone 5545 C (#507F70) - Verde tierra/bosque
🔵 SECONDARY: Pantone 5415 C (#4A6FA5) - Azul cielo pampeano  
⭐ ACCENT: Pantone 871 C - Dorado (para highlights)
⚫ TEXT: Pantone Cool Gray 11 C
⚪ BACKGROUND: White + Pantone Warm Gray 1 C
```

**¿Por qué esta paleta?**
- Verde = Naturaleza pampeana (tu especialidad en paisajes)
- Azul = Profesionalismo y confianza
- Dorado = Premium pero accesible
- Excelente para overprint
- Funciona en web y print
- Conecta con tu ubicación geográfica

---

## 📋 **PRÓXIMOS PASOS**

1. **Revisar paletas sugeridas** (30 min)
2. **Testear en color.adobe.com** (30 min)  
3. **Crear mockups** con las 3 opciones (45 min)
4. **Decidir paleta final** (15 min)
5. **Actualizar variables CSS** (30 min)
6. **Crear specs para tarjetas** (15 min)

**TOTAL ESTIMADO: 2.5 horas**

---

**🎨 ¡Con la paleta correcta, tu marca tendrá una identidad visual potente y profesional!**
