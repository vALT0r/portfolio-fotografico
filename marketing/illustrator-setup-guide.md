# 🎨 CONFIGURACIÓN STEP-BY-STEP PARA ILLUSTRATOR

## 📄 **PASO 1: CREAR NUEVO DOCUMENTO**

### En Illustrator:
1. **File > New** (Ctrl+N)
2. **Profile:** Print
3. **Size:** Custom
   - **Width:** 96 mm
   - **Height:** 56 mm
4. **Orientation:** Horizontal
5. **Artboards:** 2 (Frontal y Reverso)
6. **Spacing:** 10 mm
7. **Bleed:** 3 mm (todos los lados)
8. **Color Mode:** CMYK
9. **Raster Effects:** 300 PPI
10. **Preview Mode:** Default
11. **Create**

## 🎯 **PASO 2: CONFIGURAR COLORES PANTONE**

### Cargar biblioteca Pantone:
1. **Window > Swatches**
2. **Swatch Library Menu > Color Books > Pantone+ Solid Coated**
3. **Buscar y arrastrar al panel Swatches:**
   - `PANTONE 151 C` (#FF8000)
   - `PANTONE 2985 C` (#47C7FC)
   - `PANTONE Neutral Black C` (#000000)
   - `PANTONE 7485 C` (#F2F3E2)

### Crear muestras personalizadas:
- **Nombre:** Daerbon Naranja → PANTONE 151 C
- **Nombre:** Daerbon Azul → PANTONE 2985 C  
- **Nombre:** Daerbon Negro → PANTONE Neutral Black C
- **Nombre:** Daerbon Crema → PANTONE 7485 C

## 📐 **PASO 3: CONFIGURAR GUÍAS**

### Guías para área segura:
1. **View > Rulers > Show Rulers** (Ctrl+R)
2. **Cambiar unidades:** Right-click en ruler > Millimeters
3. **Crear guías arrastrando desde rulers:**

#### Artboard 1 (Frontal) - Guías en mm:
- **Verticales:** 8, 88 (márgenes seguros izq/der)
- **Horizontales:** 8, 48 (márgenes seguros sup/inf)
- **Centro vertical:** 48
- **Centro horizontal:** 28

#### Artboard 2 (Reverso) - Mismas guías:
- **QR área central:** 39-57mm (18x18mm)

### Lock guías:
- **View > Guides > Lock Guides** (Ctrl+Alt+;)

## 🔤 **PASO 4: CONFIGURAR TIPOGRAFÍAS**

### Instalar Poppins si no lo tienes:
1. **Descargar:** https://fonts.google.com/specimen/Poppins
2. **Instalar:** Poppins Light, Regular, Bold
3. **Reiniciar Illustrator**

### Character Styles recomendados:
- **Daerbon Title:** Poppins Bold, 20pt, PANTONE 151 C
- **Subtitle:** Poppins Regular, 9pt, PANTONE 2985 C  
- **Body:** Poppins Regular, 8pt, PANTONE Neutral Black C
- **Contact:** Poppins Regular, 7pt, PANTONE Neutral Black C
- **Services:** Poppins Light, 7pt, PANTONE 2985 C
- **Reverso Text:** Poppins Regular, 7pt, White
- **Quote:** Poppins Italic, 6pt, White

## 📋 **PASO 5: CREAR LAYERS**

### Estructura de capas:
1. **Marcas y Sangrado** (Top layer)
2. **Reverso - Contenido**
3. **Frontal - Contenido**  
4. **Guías y Referencias** (Bottom layer)

#### En cada layer:
- **Frontal:** Sublayers por elemento (Logo, Contacto, Servicios)
- **Reverso:** Sublayers (Fondo, QR, Textos)

## 🎨 **PASO 6: CONTENIDO BASE**

### ARTBOARD 1 - FRONTAL:
```
Coordenadas desde esquina inferior izquierda:

DAERBON
- Position: X:48mm Y:35mm (centrado horizontal)
- Font: Poppins Bold 20pt
- Color: PANTONE 151 C
- Align: Center

Fotografía Profesional
- Position: X:48mm Y:30mm  
- Font: Poppins Regular 9pt
- Color: PANTONE 2985 C
- Align: Center

David Eric Bonucci
- Position: X:48mm Y:26mm
- Font: Poppins Regular 8pt  
- Color: PANTONE Neutral Black C
- Align: Center

📧 daerbon@gmail.com
📱 +54 341 357 8224  
📍 Acebal, Santa Fe
- Position: X:48mm Y:20mm (bloque)
- Font: Poppins Regular 7pt
- Color: PANTONE Neutral Black C
- Align: Center
- Line spacing: 1.2

Arquitectura • Naturaleza • Paisajes
Deportes • Eventos • Astrofotografía
- Position: X:48mm Y:12mm (bloque)
- Font: Poppins Light 7pt
- Color: PANTONE 2985 C  
- Align: Center
- Line spacing: 1.1
```

### ARTBOARD 2 - REVERSO:
```
Fondo completo:
- Rectangle: 0,0 to 96,56mm (con sangrado)
- Fill: PANTONE 2985 C

QR Code placeholder:
- Position: X:39mm Y:30mm (centrado)
- Size: 18x18mm
- Stroke: 2pt White
- Fill: None
- Text: "QR CODE" centrado

Visita mi portfolio:
- Position: X:48mm Y:20mm
- Font: Poppins Regular 7pt White
- Align: Center

daerbon.com.ar  
- Position: X:48mm Y:17mm
- Font: Poppins Bold 8pt White
- Align: Center

Sígueme en Instagram:
- Position: X:48mm Y:12mm  
- Font: Poppins Regular 7pt White
- Align: Center

@daerbonph
- Position: X:48mm Y:9mm
- Font: Poppins Bold 8pt White  
- Align: Center

"Capturando la belleza de lo cotidiano"
- Position: X:48mm Y:4mm
- Font: Poppins Italic 6pt White
- Align: Center
```

## 💾 **PASO 7: GUARDAR TEMPLATE**

1. **File > Save As**
2. **Nombre:** `Daerbon-BusinessCard-Template.ai`
3. **Version:** Illustrator CC (Legacy)
4. **Options:** 
   - ✅ Create PDF Compatible File
   - ✅ Include Linked Files
   - ✅ Embed ICC Profiles
   - ✅ Use Compression

## 🖨️ **PASO 8: PREPARAR PARA IMPRESIÓN**

### Cuando termines el diseño:
1. **Type > Create Outlines** (Shift+Ctrl+O)
2. **Object > Flatten Transparency** (si usas efectos)
3. **File > Export > Export As**
4. **Format:** Adobe PDF (Print)
5. **Preset:** [PDF/X-1a:2001]
6. **Include:** Crop Marks, Bleed Marks
7. **Color:** CMYK + Spot Colors

---

## 🎯 **TIPS IMPORTANTES:**

- **Siempre trabaja en mm**, no en puntos
- **Mantén textos dentro del área segura** (5mm del borde)
- **QR Code mínimo 15mm** para legibilidad
- **No conviertas Pantone a CMYK** hasta el export final
- **Guarda copias frecuentes** durante el diseño

---

**¡Listo para diseñar profesionalmente! 🚀**
