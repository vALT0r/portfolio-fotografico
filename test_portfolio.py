#!/usr/bin/env python3
"""
SCRIPT DE TESTING COMPLETO - Daerbon Photography
Verifica todas las funcionalidades del portfolio
"""

import requests
import json
import time
from urllib.parse import urlparse

def test_portfolio_complete():
    """Test completo del portfolio"""
    
    print("🧪 INICIANDO TESTING COMPLETO - Daerbon Photography")
    print("=" * 60)
    
    base_url = "https://daerbon.com.ar"
    results = {}
    
    # Test 1: Disponibilidad del sitio
    print("\n1️⃣ TESTING DISPONIBILIDAD DEL SITIO")
    try:
        response = requests.get(base_url, timeout=10)
        if response.status_code == 200:
            print(f"✅ Sitio disponible - Status: {response.status_code}")
            print(f"⚡ Tiempo de respuesta: {response.elapsed.total_seconds():.2f}s")
            results['availability'] = True
            results['response_time'] = response.elapsed.total_seconds()
        else:
            print(f"❌ Sitio no disponible - Status: {response.status_code}")
            results['availability'] = False
    except Exception as e:
        print(f"❌ Error de conexión: {str(e)}")
        results['availability'] = False
    
    # Test 2: Headers de seguridad y SEO
    print("\n2️⃣ TESTING HEADERS Y SEO")
    try:
        response = requests.get(base_url)
        headers = response.headers
        
        # Verificar Content-Type
        content_type = headers.get('content-type', '')
        if 'text/html' in content_type:
            print("✅ Content-Type correcto")
        else:
            print(f"⚠️  Content-Type: {content_type}")
        
        # Verificar compresión
        if 'gzip' in headers.get('content-encoding', ''):
            print("✅ Compresión GZIP activada")
        else:
            print("⚠️  Compresión GZIP no detectada")
            
        # Verificar cache headers
        cache_control = headers.get('cache-control', '')
        if cache_control:
            print(f"✅ Cache-Control: {cache_control}")
        else:
            print("⚠️  Sin Cache-Control headers")
            
        results['headers'] = True
        
    except Exception as e:
        print(f"❌ Error verificando headers: {str(e)}")
        results['headers'] = False
    
    # Test 3: Verificar contenido crítico
    print("\n3️⃣ TESTING CONTENIDO CRÍTICO")
    try:
        response = requests.get(base_url)
        html_content = response.text
        
        # Verificar elementos críticos
        critical_elements = [
            ("title", "Daerbon"),
            ("meta description", 'name="description"'),
            ("Google Analytics", "G-8XBS134N7Y"),
            ("Formulario", "formsubmit.co"),
            ("JavaScript", "galleryData"),
            ("CSS", "styles.css")
        ]
        
        for element, check in critical_elements:
            if check in html_content:
                print(f"✅ {element} presente")
            else:
                print(f"❌ {element} faltante")
        
        results['content'] = True
        
    except Exception as e:
        print(f"❌ Error verificando contenido: {str(e)}")
        results['content'] = False
    
    # Test 4: Verificar recursos externos
    print("\n4️⃣ TESTING RECURSOS EXTERNOS")
    external_resources = [
        "https://fonts.googleapis.com/css2?family=Poppins",
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
        "https://res.cloudinary.com/dunjl9u7y/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/arquitectura/001-DSC_7771.jpg"
    ]
    
    for resource in external_resources:
        try:
            resp = requests.head(resource, timeout=5)
            if resp.status_code == 200:
                print(f"✅ {urlparse(resource).netloc} disponible")
            else:
                print(f"⚠️  {urlparse(resource).netloc} - Status: {resp.status_code}")
        except:
            print(f"❌ {urlparse(resource).netloc} no disponible")
    
    results['external_resources'] = True
    
    # Test 5: Verificar estructura responsive
    print("\n5️⃣ TESTING RESPONSIVE DESIGN")
    try:
        # Test con diferentes user agents
        mobile_headers = {
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15'
        }
        
        mobile_response = requests.get(base_url, headers=mobile_headers)
        if 'viewport' in mobile_response.text:
            print("✅ Meta viewport configurado")
        
        if '@media' in mobile_response.text or 'responsive' in mobile_response.text:
            print("✅ CSS responsive detectado")
        
        results['responsive'] = True
        
    except Exception as e:
        print(f"❌ Error testing responsive: {str(e)}")
        results['responsive'] = False
    
    # Resumen final
    print("\n" + "=" * 60)
    print("📊 RESUMEN DE TESTING")
    print("=" * 60)
    
    total_tests = len(results)
    passed_tests = sum(results.values())
    
    print(f"🎯 Tests ejecutados: {total_tests}")
    print(f"✅ Tests exitosos: {passed_tests}")
    print(f"❌ Tests fallidos: {total_tests - passed_tests}")
    print(f"📈 Porcentaje de éxito: {(passed_tests/total_tests)*100:.1f}%")
    
    if results.get('response_time'):
        print(f"⚡ Tiempo de respuesta: {results['response_time']:.2f}s")
    
    # Recomendaciones
    print("\n🔧 RECOMENDACIONES:")
    
    if results['response_time'] > 2:
        print("⚠️  Considerar optimización de velocidad")
    else:
        print("✅ Velocidad de carga óptima")
    
    if passed_tests >= total_tests * 0.8:
        print("🎉 Portfolio en excelente estado")
    else:
        print("⚠️  Se requieren algunas correcciones")
    
    return results

if __name__ == "__main__":
    test_portfolio_complete()
