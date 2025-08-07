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

## 🌐 **PASO 2: CONFIGURAR DNS EXTERNO (PARA NIC.AR)**

### **2.1 ¿Por qué DNS externo?**
- NIC.ar solo registra dominios, no provee DNS
- Necesitas un proveedor DNS gratuito
- **Cloudflare es la mejor opción** (gratis + rápido + confiable)

### **2.2 Configurar Cloudflare (RECOMENDADO)**

#### **Paso 2.2.1: Crear cuenta en Cloudflare**
1. **Ir a:** https://cloudflare.com/
2. **"Get started"** → **Sign up**
3. **Verificar email**

#### **Paso 2.2.2: Agregar tu dominio**
1. **"Add site"** → escribir `daerbon.com.ar`
2. **Select plan:** **Free** (gratis)
3. **Continue**
4. Cloudflare escaneará DNS existente (probablemente vacío)
5. **Continue**

#### **Paso 2.2.3: Obtener nameservers**
Cloudflare te dará algo como:
```
ada.ns.cloudflare.com
sven.ns.cloudflare.com
```
**⚠️ COPIA ESTOS NAMESERVERS** - los necesitas para NIC.ar

#### **Paso 2.2.4: Configurar nameservers en NIC.ar**
1. **Login:** https://nic.ar/
2. **"Mis dominios"** → `daerbon.com.ar`
3. **"Modificar DNS"** o **"Cambiar DNS"**
4. **Seleccionar "Usar otros DNS"**
5. **Pegar nameservers de Cloudflare**
6. **Guardar cambios**

### **2.3 Configurar Registros DNS en Cloudflare**

**En el dashboard de Cloudflare:**

1. **Ir a "DNS" tab**
2. **Agregar estos registros:**

| Tipo | Nombre | Contenido | TTL |
|------|---------|-----------|-----|
| A    | @       | 185.199.108.153 | Auto |
| A    | @       | 185.199.109.153 | Auto |
| A    | @       | 185.199.110.153 | Auto |
| A    | @       | 185.199.111.153 | Auto |
| CNAME| www     | vALT0r.github.io | Auto |

3. **Proxy status:** OFF (🔄 gris) para todos los registros

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

### **NIC Argentina (.com.ar) - SOLO REGISTRADOR**

⚠️ **IMPORTANTE:** NIC.ar NO provee servicios DNS, solo es registrador.

**Necesitas configurar DNS externo. Opciones recomendadas:**

#### **OPCIÓN 1: Cloudflare (RECOMENDADO - GRATIS)**
1. **Crear cuenta:** https://cloudflare.com/
2. **"Add site"** → `daerbon.com.ar`
3. **Plan Free** (gratis)
4. **Cloudflare te dará nameservers** como:
   ```
   ada.ns.cloudflare.com
   sven.ns.cloudflare.com
   ```
5. **En NIC.ar panel:**
   - Login → "Mis dominios" → `daerbon.com.ar`
   - "Modificar DNS" → "Usar otros DNS"
   - Poner los nameservers de Cloudflare
6. **En Cloudflare Dashboard:**
   - Agregar registros A y CNAME según tablas arriba

#### **OPCIÓN 2: Google Domains DNS (GRATIS)**
1. **Ir a:** https://domains.google.com/registrar/
2. **"Use Google Domains DNS"** con dominio externo
3. **Obtener nameservers Google**
4. **Configurar en NIC.ar** igual que Cloudflare

#### **OPCIÓN 3: FreeDNS (GRATIS)**
1. **Crear cuenta:** https://freedns.afraid.org/
2. **Add domain** → `daerbon.com.ar`
3. **Obtener nameservers**
4. **Configurar en NIC.ar**

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

## ⏱️ **TIMELINE ACTUALIZADO (CON DNS EXTERNO)**

**DÍA 1:**
- Crear cuenta Cloudflare (5 min)
- Agregar dominio y obtener nameservers (5 min)
- Configurar nameservers en NIC.ar (10 min)
- Agregar registros DNS en Cloudflare (5 min)
- Configurar GitHub Pages custom domain (5 min)
- **Esperar propagación:** 2-24 horas

**DÍA 2:**
- Verificar propagación DNS (5 min)
- Verificar portfolio funciona (5 min)
- Habilitar HTTPS en GitHub (automático)
- Testing completo (15 min)

**DÍA 3:**
- Actualizar materiales marketing
- Comunicar nuevo dominio en redes

**TOTAL TRABAJO REAL: 45 minutos**
**TIEMPO DE ESPERA: 24-48 horas (propagación)**

---

## 🎯 **PRÓXIMOS PASOS INMEDIATOS (PARA TI)**

### **HOY (30 minutos de trabajo):**

1. **Crear cuenta Cloudflare** → https://cloudflare.com/ (5 min)
2. **Add site:** `daerbon.com.ar` + plan Free (5 min)
3. **Copiar nameservers** que te dé Cloudflare (1 min)
4. **En NIC.ar:** cambiar a esos nameservers (10 min)
5. **En Cloudflare:** agregar registros A + CNAME (5 min)
6. **En GitHub:** Settings > Pages > Custom domain: `daerbon.com.ar` (5 min)

### **MAÑANA (verificar):**
- Comprobar si `daerbon.com.ar` ya carga
- Si funciona: habilitar HTTPS en GitHub
- Testing completo

### **¿Por qué Cloudflare?**
✅ Gratis para siempre
✅ DNS ultra rápido (1.1.1.1)
✅ Panel simple y claro
✅ SSL automático adicional
✅ Protección DDoS gratis
✅ Analytics básicos incluidos

---

**🌐 ¡Con daerbon.com.ar tendrás una presencia online 100% profesional!**
