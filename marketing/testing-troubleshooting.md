# 🔧 Guía de Testing y Troubleshooting - Portfolio Daerbon

## ✅ **CHECKLIST DE TESTING COMPLETO**

### **1. TEST DEL FORMULARIO DE CONTACTO**

#### **✉️ Pasos para Testear:**

1. **Ir al portfolio:** https://vALT0r.github.io/portfolio-fotografico
2. **Navegar a la sección "Contacto"**
3. **Completar el formulario con:**
   ```
   Nombre: Test David
   Email: tu-email-personal@gmail.com
   Teléfono: +54 341 123 4567
   Servicio: Fotografía de Eventos
   Mensaje: Hola David, esto es una prueba del formulario. 
   Si recibes este mensaje, ¡el portfolio funciona perfecto!
   ```

4. **Hacer clic en "Enviar Mensaje"**
5. **Verificar redirect** a página de confirmación
6. **Revisar email** en daerbon@gmail.com en 2-5 minutos

#### **📧 Email Esperado:**
```
From: Test David <noreply@formsubmit.co>
Reply-To: tu-email-personal@gmail.com
To: daerbon@gmail.com
Subject: Nuevo mensaje desde Portfolio - Test David

Nombre: Test David
Email: tu-email-personal@gmail.com
Teléfono: +54 341 123 4567
Servicio: Fotografía de Eventos
Mensaje: Hola David, esto es una prueba del formulario...

---
Mensaje enviado desde: https://vALT0r.github.io/portfolio-fotografico
```

---

### **2. TEST DE RESPONSIVE DESIGN**

#### **📱 Dispositivos a Verificar:**

**Mobile (320px-768px):**
- [ ] Menú hamburger funciona
- [ ] Textos legibles sin zoom
- [ ] Botones clickeables
- [ ] Formulario usable
- [ ] Imágenes se cargan
- [ ] Gallery funciona

**Tablet (768px-1024px):**
- [ ] Layout se adapta
- [ ] Navigation horizontal
- [ ] Gallery grid 2-3 columnas
- [ ] Form bien espaciado

**Desktop (1024px+):**
- [ ] Menú horizontal fijo
- [ ] Gallery 4 columnas
- [ ] Hover effects funcionan
- [ ] Animations suaves

#### **🔧 Herramientas de Testing:**
- **Chrome DevTools:** F12 → Device Toolbar
- **Firefox Responsive:** Ctrl+Shift+M
- **Real devices:** Usar celular/tablet personal

---

### **3. TEST DE PERFORMANCE**

#### **⚡ Métricas a Verificar:**

**Google PageSpeed Insights:**
1. Ir a: https://pagespeed.web.dev/
2. Ingresar: https://vALT0r.github.io/portfolio-fotografico
3. **Esperado:**
   - Mobile Score: 85-95
   - Desktop Score: 90-98
   - LCP: < 2.5s
   - FID: < 100ms

**GTmetrix (opcional):**
1. Ir a: https://gtmetrix.com/
2. Test URL del portfolio
3. **Esperado:**
   - Grade: A-B
   - Load Time: < 3s
   - Size: < 2MB

---

### **4. TEST DE FUNCIONALIDAD**

#### **🎯 Elementos Interactivos:**

**Navigation:**
- [ ] Logo lleva al inicio
- [ ] Links smooth scroll
- [ ] Mobile menu abre/cierra
- [ ] Active states funcionan

**Gallery:**
- [ ] Filtros funcionan
- [ ] Modal abre/cierra
- [ ] Navigation en modal
- [ ] Lazy loading activo

**Forms:**
- [ ] Validación de campos
- [ ] Estados de error
- [ ] Submit exitoso
- [ ] Thank you redirect

**General:**
- [ ] Scroll suave
- [ ] Animations timing OK
- [ ] No errores en console

---

## 🚨 **TROUBLESHOOTING COMÚN**

### **❌ Problema: Formulario no envía**

**Síntomas:**
- Botón submit no hace nada
- No hay redirect
- Error en console

**Soluciones:**
1. **Verificar FormSubmit:**
   ```javascript
   // En js/script.js, verificar:
   form.action = "https://formsubmit.co/daerbon@gmail.com"
   ```

2. **Check email typo:**
   ```html
   <!-- En index.html, verificar: -->
   <form action="https://formsubmit.co/daerbon@gmail.com" method="POST">
   ```

3. **JavaScript errors:**
   - F12 → Console
   - Buscar errores rojos
   - Verificar que script.js carga

**Fix rápido:**
```bash
# Verificar archivos
ls -la js/
ls -la css/
# Debe mostrar script.js y styles.css
```

---

### **❌ Problema: Imágenes no cargan**

**Síntomas:**
- Placeholders en lugar de fotos
- Broken image icons
- Layout roto

**Soluciones:**
1. **Verificar URLs:**
   ```javascript
   // Verificar en script.js:
   src: 'https://images.unsplash.com/...'
   // URLs deben ser accesibles
   ```

2. **CORS Issues:**
   - Usar HTTPS en lugar de HTTP
   - Verificar que imágenes son públicas
   - Test en incognito mode

3. **Cloudinary Integration:**
   ```javascript
   // Para cuando subas fotos reales:
   src: 'https://res.cloudinary.com/tu-cloud/image/upload/c_fill,w_400,h_300/tu-foto.jpg'
   ```

---

### **❌ Problema: Site no actualiza**

**Síntomas:**
- Cambios no aparecen online
- Cache antiguo
- GitHub Actions failing

**Soluciones:**
1. **Cache Browser:**
   - Ctrl+F5 (hard refresh)
   - Incognito mode
   - Different browser

2. **GitHub Pages:**
   ```bash
   # Verificar último deploy
   git log --oneline -5
   # Ver GitHub Actions status
   ```

3. **DNS Issues:**
   - Esperar 5-10 minutos
   - Usar https:// no http://
   - Verificar URL exacta

---

### **❌ Problema: Mobile layout roto**

**Síntomas:**
- Textos muy pequeños
- Elementos superpuestos
- Scroll horizontal

**Soluciones:**
1. **Viewport meta:**
   ```html
   <!-- Verificar en <head>: -->
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

2. **CSS Media Queries:**
   ```css
   /* Verificar breakpoints en styles.css: */
   @media (max-width: 768px) { ... }
   ```

3. **Box-sizing:**
   ```css
   /* Debe estar en styles.css: */
   * { box-sizing: border-box; }
   ```

---

## 🔍 **HERRAMIENTAS DE DEBUGGING**

### **Browser DevTools:**
```
F12 → Console: JavaScript errors
F12 → Network: Loading issues  
F12 → Elements: HTML/CSS inspection
F12 → Application: Storage/Cache
```

### **Online Tools:**
- **HTML Validator:** https://validator.w3.org/
- **CSS Validator:** https://jigsaw.w3.org/css-validator/
- **Mobile Test:** https://search.google.com/test/mobile-friendly
- **PageSpeed:** https://pagespeed.web.dev/

### **Local Testing:**
```bash
# Servir portfolio localmente:
cd /mnt/e/Proyectos/Portfolio
python -m http.server 8000
# Abrir: http://localhost:8000
```

---

## 📞 **SOPORTE DE EMERGENCIA**

### **Si nada funciona:**

1. **Verificar URL correcta:**
   - https://vALT0r.github.io/portfolio-fotografico
   - Sin typos en el dominio

2. **GitHub Status:**
   - Verificar https://www.githubstatus.com/
   - Pages service operational

3. **Rollback Option:**
   ```bash
   # En caso extremo, volver a commit anterior
   git revert HEAD
   git push origin main
   ```

4. **Contact Info:**
   - GitHub Support (si es issue de Pages)
   - FormSubmit Support (si es issue del form)

---

**🎯 Con esta guía puedes diagnosticar y solucionar el 99% de problemas que puedan surgir.**
