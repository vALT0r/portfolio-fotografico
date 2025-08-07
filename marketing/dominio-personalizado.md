# 🌐 Configuración Dominio daerbon.com.ar - GitHub Pages

## 🎯 **OBJETIVO DE LA TAREA**
Configurar el dominio personalizado daerbon.com.ar para reemplazar el GitHub Pages gratuito y tener una URL profesional.

---

## 📋 **REQUISITOS PREVIOS**

✅ **Ya tienes:**
- Dominio registrado: `daerbon.com.ar`
- Portfolio funcionando en: `https://vALT0r.github.io/portfolio-fotografico`
- Repositorio configurado en GitHub

❓ **Necesitas:**
- Acceso al panel de control del registrador de dominio
- Configurar DNS (te ayudo paso a paso)

---

## 🔧 **PASO 1: CONFIGURAR GITHUB PAGES**

### **1.1 Configurar Custom Domain en GitHub**

1. **Ir al repositorio:** https://github.com/vALT0r/portfolio-fotografico
2. **Click en Settings** (pestaña)
3. **Scroll hasta "Pages"** (menú izquierdo)
4. **En "Custom domain"** escribir: `daerbon.com.ar`
5. **Click en "Save"**
6. **Esperar que aparezca el checkmark verde** ✅

### **1.2 Archivo CNAME (se crea automáticamente)**
GitHub creará un archivo `CNAME` en tu repositorio con:
```
daerbon.com.ar
```

---

## 🌐 **PASO 2: CONFIGURAR DNS**

### **2.1 Identificar tu Registrador**

Los registradores más comunes en Argentina:
- **NIC Argentina** (nic.ar)
- **Donweb**
- **Hostinger Argentina**  
- **GoDaddy**
- **Namecheap**

### **2.2 Acceder al Panel DNS**

**Buscar en tu registrador:**
- "DNS Management"
- "Gestión DNS"
- "Zone Management"
- "DNS Records"

### **2.3 Configurar Registros DNS**

#### **OPCIÓN A: Con Subdomain (www)**

**Agregar estos registros:**

| Tipo | Nombre/Host | Valor/Destino | TTL |
|------|-------------|---------------|-----|
| A    | @           | 185.199.108.153 | 3600 |
| A    | @           | 185.199.109.153 | 3600 |
| A    | @           | 185.199.110.153 | 3600 |
| A    | @           | 185.199.111.153 | 3600 |
| CNAME| www         | vALT0r.github.io | 3600 |

#### **OPCIÓN B: Solo Apex Domain (sin www)**

**Agregar estos registros:**

| Tipo | Nombre/Host | Valor/Destino | TTL |
|------|-------------|---------------|-----|
| A    | @           | 185.199.108.153 | 3600 |
| A    | @           | 185.199.109.153 | 3600 |
| A    | @           | 185.199.110.153 | 3600 |
| A    | @           | 185.199.111.153 | 3600 |

---

## 🏗️ **PASO 3: VERIFICACIÓN Y TROUBLESHOOTING**

### **3.1 Herramientas de Verificación**

**Verificar propagación DNS:**
- https://www.whatsmydns.net/
- Buscar: `daerbon.com.ar`
- Verificar que apunte a las IPs de GitHub

**Verificar configuración:**
```bash
# En terminal (Windows/Mac/Linux):
nslookup daerbon.com.ar

# Debe mostrar:
# Address: 185.199.108.153
# Address: 185.199.109.153
# etc...
```

### **3.2 Tiempos de Propagación**

- **Mínimo:** 15-30 minutos
- **Típico:** 2-4 horas  
- **Máximo:** 24-48 horas

### **3.3 SSL/HTTPS Automático**

Una vez configurado:
1. **GitHub genera certificado SSL** automáticamente
2. **Esperar 15-20 minutos** después de DNS propagado
3. **Verificar checkbox** "Enforce HTTPS" en GitHub Settings > Pages

---

## 🔍 **CONFIGURACIONES ESPECÍFICAS POR REGISTRADOR**

### **NIC Argentina (.com.ar)**

**Panel:** https://nic.ar/
1. Login con tus credenciales
2. "Mis dominios" → `daerbon.com.ar`
3. "DNS" o "Servidores DNS"
4. Cambiar a "Usar DNS de NIC"
5. Agregar registros A y CNAME como arriba

### **Donweb**

**Panel:** Cliente Donweb
1. "Panel de Control"
2. "Administración de DNS"
3. Seleccionar dominio
4. "Editar Zona DNS"
5. Agregar registros

### **Hostinger**

**Panel:** hPanel
1. "Dominios"
2. "DNS / Nameservers"
3. "Gestionar registros DNS"
4. Agregar registros A y CNAME

---

## 🛡️ **CONFIGURACIÓN AVANZADA (OPCIONAL)**

### **4.1 Redirect www → no-www**

Si quieres que `www.daerbon.com.ar` redirija a `daerbon.com.ar`:

**En GitHub Settings > Pages:**
- Custom domain: `daerbon.com.ar` (sin www)
- Configurar DNS solo con registros A

### **4.2 Subdominios Adicionales**

Para futuras expansiones:

| Subdominio | CNAME | Uso |
|------------|-------|-----|
| blog.daerbon.com.ar | vALT0r.github.io | Blog futuro |
| portfolio.daerbon.com.ar | vALT0r.github.io | Portfolio alternativo |
| admin.daerbon.com.ar | different-repo.github.io | Panel admin |

---

## 📧 **CONFIGURAR EMAIL CON DOMINIO PROPIO**

### **Opciones Gratuitas:**
1. **Gmail personalizado** (G Suite gratis por 1 año para nuevos negocios)
2. **Zoho Mail** (hasta 5 usuarios gratis)
3. **ProtonMail** (1GB gratis)

### **Configuración recomendada:**

**Crear:** `contacto@daerbon.com.ar`
**Redirigir a:** `daerbon@gmail.com` (tu actual)

**Registros MX necesarios:**
```
MX 10 mail.daerbon.com.ar
CNAME mail tu-proveedor-email.com
```

---

## ⚠️ **PROBLEMAS COMUNES Y SOLUCIONES**

### **❌ "DNS_PROBE_FINISHED_NXDOMAIN"**
**Causa:** DNS no propagado o mal configurado
**Solución:** 
- Verificar registros A en whatsmydns.net
- Esperar 24hs más
- Contactar registrador

### **❌ "Este sitio no es seguro"**
**Causa:** SSL no generado aún
**Solución:**
- Esperar 30 minutos más
- Verificar "Enforce HTTPS" en GitHub
- Limpiar cache del browser (Ctrl+Shift+R)

### **❌ Error 404 con dominio nuevo**
**Causa:** GitHub Pages no reconoce el dominio
**Solución:**
- Verificar archivo CNAME en repositorio
- Re-save en GitHub Settings > Pages
- Verificar Custom Domain field

---

## 📱 **ACTUALIZAR MATERIALES DE MARKETING**

### **Una vez funcionando:**

**Actualizar en:**
- ✅ Tarjetas de presentación: `daerbon.com.ar`
- ✅ Instagram bio: `daerbon.com.ar`
- ✅ Gmail signature: `🌐 daerbon.com.ar`
- ✅ Formularios de contacto: redirect URL
- ✅ Google My Business: website URL

**Crear redirects en GitHub (opcional):**
```javascript
// En script.js - para analytics
const CUSTOM_DOMAIN = 'daerbon.com.ar';
const OLD_URL = 'vALT0r.github.io/portfolio-fotografico';

if (window.location.href.includes(OLD_URL)) {
    // Redirect a dominio personalizado
    window.location.replace('https://' + CUSTOM_DOMAIN);
}
```

---

## 🧪 **CHECKLIST DE TESTING**

### **Verificar funcionamiento:**
- [ ] `daerbon.com.ar` → Carga el portfolio
- [ ] `www.daerbon.com.ar` → Carga o redirige correctamente  
- [ ] Certificado SSL válido (candado verde)
- [ ] Formulario de contacto funciona
- [ ] Velocidad de carga similar
- [ ] Mobile responsive OK
- [ ] Analytics funcionando

---

## 📊 **BENEFICIOS DEL DOMINIO PROPIO**

✅ **Profesionalismo:** `daerbon.com.ar` vs `vALT0r.github.io`
✅ **Branding:** Consistencia con nombre comercial
✅ **SEO:** Mejor ranking en Google Argentina
✅ **Confianza:** Clientes confían más en dominios propios
✅ **Email:** Posibilidad de `contacto@daerbon.com.ar`
✅ **Flexibilidad:** Cambiar hosting sin perder URL

---

## ⏱️ **TIMELINE ESTIMADO**

**DÍA 1:**
- Configurar GitHub Pages (5 min)
- Configurar DNS (15 min)
- Iniciar propagación

**DÍA 2:**
- Verificar propagación (5 min)
- Habilitar HTTPS (automático)
- Testing completo (15 min)

**DÍA 3:**
- Actualizar materiales marketing
- Comunicar nuevo dominio

**TOTAL: 30-45 minutos de trabajo real**

---

## 🎯 **PRÓXIMOS PASOS INMEDIATOS**

1. **Acceder al panel** de tu registrador (15 min)
2. **Configurar registros DNS** según las tablas (15 min)
3. **Esperar propagación** (2-24 horas)
4. **Testing y verificación** (10 min)
5. **Actualizar bio de Instagram** (5 min)

---

**🌐 ¡Con daerbon.com.ar tendrás una presencia online 100% profesional!**
