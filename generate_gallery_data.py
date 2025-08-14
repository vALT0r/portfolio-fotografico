#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generador de array de galería para Portfolio David Eric Bonucci
Este script escanea la carpeta 'images' y sus subcarpetas para generar
automáticamente el array galleryData para JavaScript.
"""

import os
import json
from pathlib import Path

def get_supported_extensions():
    """Retorna las extensiones de archivo soportadas"""
    return {'.jpg', '.jpeg', '.png', '.webp', '.avif', '.JPG', '.JPEG', '.PNG', '.WEBP', '.AVIF'}

def get_category_display_name(category_folder):
    """Convierte el nombre de carpeta a nombre de categoría mostrable"""
    category_names = {
        'arquitectura': 'Arquitectura',
        'paisajes': 'Paisajes', 
        'naturaleza': 'Naturaleza',
        'people': 'Retratos',
        'objetos': 'Objetos',
        'macro': 'Macro',
        'eventos': 'Eventos',
        'arte': 'Arte',
        'astrofotografia': 'Astrofotografía'
    }
    return category_names.get(category_folder.lower(), category_folder.title())

def generate_image_title_description(filename, category):
    """Genera títulos y descripciones basados en el nombre del archivo y categoría"""
    
    # Remover numeración y extensión
    clean_name = filename.split('-', 1)[-1] if '-' in filename else filename
    clean_name = os.path.splitext(clean_name)[0]
    
    # Descripciones por categoría
    descriptions = {
        'arquitectura': [
            "Líneas modernas y estructuras contemporáneas",
            "La belleza de los detalles arquitectónicos", 
            "Perspectivas únicas de espacios urbanos",
            "Geometrías que definen la arquitectura moderna",
            "Juego de luces y sombras en estructuras",
            "Diseño arquitectónico en perfecta armonía",
            "Elementos constructivos con carácter propio",
            "Espacios que inspiran y transforman",
            "La arquitectura como expresión artística",
            "Formas contemporáneas en el paisaje urbano"
        ],
        'paisajes': [
            "La inmensidad de la naturaleza argentina",
            "Horizontes que inspiran y conmueven",
            "Paisajes que capturan la esencia del lugar",
            "La magia de los colores naturales",
            "Vistas panorámicas de belleza incomparable",
            "La serenidad de los espacios naturales",
            "Momentos únicos en la naturaleza",
            "Paisajes que tocan el alma",
            "La grandeza de los espacios abiertos",
            "Composiciones naturales extraordinarias"
        ],
        'naturaleza': [
            "La riqueza de la fauna local",
            "Vida silvestre en su hábitat natural", 
            "Momentos únicos con la naturaleza",
            "La biodiversidad en todo su esplendor",
            "Especies autóctonas de la región",
            "Encuentros especiales con la fauna",
            "La belleza de la vida silvestre",
            "Ecosistemas locales únicos",
            "Comportamiento natural captado",
            "La armonía perfecta de la naturaleza"
        ],
        'people': [
            "Emociones genuinas capturadas",
            "Retratos que revelan personalidades únicas",
            "Momentos auténticos y espontáneos",
            "La esencia humana en cada imagen",
            "Expresiones que cuentan historias",
            "Conexiones humanas especiales",
            "Personalidades captadas con sensibilidad",
            "Retratos llenos de vida y emoción",
            "La belleza de la expresión humana",
            "Momentos íntimos y personales"
        ],
        'objetos': [
            "Estética encontrada en lo cotidiano",
            "Composiciones artísticas con objetos",
            "La belleza oculta en lo simple",
            "Formas y texturas extraordinarias",
            "Juegos de luz en objetos cotidianos", 
            "Arreglos creativos y únicos",
            "Objetos transformados en arte",
            "Detalles que cobran vida propia",
            "La poesía visual de los objetos",
            "Composiciones que despiertan emociones"
        ],
        'macro': [
            "El mundo microscópico revelado",
            "Detalles invisibles al ojo humano",
            "Belleza en los elementos más pequeños",
            "Texturas amplificadas con arte",
            "Universos en miniatura",
            "La magia de lo microscópico",
            "Detalles que cuentan historias grandes",
            "Perspectivas íntimas de la naturaleza",
            "Mundos ocultos revelados",
            "La complejidad en lo diminuto"
        ],
        'eventos': [
            "Momentos especiales documentados",
            "La magia de las celebraciones",
            "Historias humanas en imágenes",
            "Conexiones y encuentros memorables",
            "Emociones compartidas en grupo",
            "La alegría de los momentos únicos",
            "Narrativas visuales de eventos",
            "Celebraciones llenas de vida",
            "Ocasiones que perduran en el tiempo",
            "La energía de los encuentros humanos"
        ],
        'arte': [
            "Exploración visual y creativa",
            "Expresión artística a través del lente",
            "Fotografía como forma de arte",
            "Composiciones abstractas y conceptuales",
            "Creatividad visual sin límites",
            "Arte fotográfico experimental",
            "Visiones únicas del mundo",
            "Expresiones artísticas personales",
            "Fotografía que trasciende lo documental",
            "Creaciones visuales inspiradoras"
        ],
        'astrofotografia': [
            "La inmensidad del cosmos capturada",
            "Fotografía astronómica especializada", 
            "El universo desde nuestra perspectiva",
            "Momentos celestiales únicos",
            "La belleza del cielo nocturno",
            "Explorando los misterios del espacio",
            "Fenómenos astronómicos documentados",
            "El cosmos en alta definición",
            "Maravillas celestes al alcance",
            "La poesía visual del universo"
        ]
    }
    
    # Títulos genéricos basados en el nombre del archivo
    if 'DSC' in clean_name:
        titles = [f"Captura Fotográfica {category.title()}", 
                 f"Momento {category.title()}", 
                 f"Imagen {category.title()}"]
    elif any(x in clean_name.lower() for x in ['enhanced', 'pano']):
        titles = [f"Composición {category.title()}", 
                 f"Vista {category.title()}"]
    else:
        titles = [f"Fotografía {category.title()}", 
                 f"Escena {category.title()}"]
    
    # Seleccionar descripción basada en hash del filename para consistencia
    desc_list = descriptions.get(category.lower(), descriptions['arte'])
    desc_index = hash(filename) % len(desc_list)
    description = desc_list[desc_index]
    
    # Seleccionar título
    title_index = hash(filename) % len(titles)
    title = titles[title_index]
    
    return title, description

def scan_images_folder(images_path):
    """Escanea la carpeta de imágenes y retorna la estructura de datos"""
    images_path = Path(images_path)
    gallery_data = []
    image_id = 1
    supported_exts = get_supported_extensions()
    
    if not images_path.exists():
        print(f"Error: La carpeta {images_path} no existe")
        return []
    
    print(f"Escaneando carpeta: {images_path}")
    
    # Obtener todas las subcarpetas (categorías)
    categories = []
    for item in images_path.iterdir():
        if item.is_dir() and not item.name.startswith('.'):
            categories.append(item.name)
    
    categories.sort()  # Ordenar alfabéticamente
    print(f"Categorías encontradas: {categories}")
    
    for category in categories:
        category_path = images_path / category
        print(f"\nProcesando categoría: {category}")
        
        # Obtener todos los archivos de imagen en la categoría
        image_files = []
        for file_path in category_path.iterdir():
            if file_path.is_file() and file_path.suffix in supported_exts:
                image_files.append(file_path.name)
        
        image_files.sort()  # Ordenar por nombre de archivo
        print(f"  Archivos encontrados: {len(image_files)}")
        
        for filename in image_files:
            title, description = generate_image_title_description(filename, category)
            
            # Crear entrada de imagen
            image_entry = {
                "id": image_id,
                "title": title,
                "description": description,
                "category": category.lower(),
                "filename": filename,
                "image": f"`https://res.cloudinary.com/${{CLOUDINARY_CLOUD_NAME}}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/{category.lower()}/{filename}`",
                "fullImage": f"`https://res.cloudinary.com/${{CLOUDINARY_CLOUD_NAME}}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/{category.lower()}/{filename}`"
            }
            
            gallery_data.append(image_entry)
            image_id += 1
            
    print(f"\nTotal de imágenes procesadas: {len(gallery_data)}")
    return gallery_data

def generate_javascript_array(gallery_data, output_file):
    """Genera el archivo JavaScript con el array de datos"""
    
    js_content = """// Configuración de Cloudinary
const CLOUDINARY_CLOUD_NAME = 'dunjl9u7y';
const CLOUDINARY_UPLOAD_PRESET = 'daerbon-portfolio';

// Portfolio David Eric Bonucci - Array generado automáticamente
const galleryData = ["""

    # Agrupar por categorías para mejor organización
    categories = {}
    for image in gallery_data:
        category = image['category']
        if category not in categories:
            categories[category] = []
        categories[category].append(image)
    
    # Generar el contenido del array
    for category_name in sorted(categories.keys()):
        category_display = get_category_display_name(category_name)
        images = categories[category_name]
        
        display_name = category_display if category_display else category_name.title()
        js_content += f"\n    // {display_name.upper()} - {len(images)} imágenes\n"
        
        for i, image in enumerate(images):
            js_content += "    {\n"
            js_content += f"        id: {image['id']},\n"
            js_content += f"        title: \"{image['title']}\",\n"
            js_content += f"        description: \"{image['description']}\",\n"
            js_content += f"        category: \"{image['category']}\",\n"
            js_content += f"        image: {image['image']},\n"
            js_content += f"        fullImage: {image['fullImage']}\n"
            
            # Agregar coma si no es el último elemento de la categoría o si hay más categorías
            is_last_in_category = (i == len(images) - 1)
            is_last_category = (category_name == sorted(categories.keys())[-1])
            
            if not (is_last_in_category and is_last_category):
                js_content += "    },\n"
            else:
                js_content += "    }\n"
        
        # Agregar línea en blanco entre categorías si no es la última
        if category_name != sorted(categories.keys())[-1]:
            js_content += "\n"
    
    js_content += "];"
    
    # Escribir el archivo
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print(f"Archivo JavaScript generado: {output_file}")

def generate_summary_report(gallery_data):
    """Genera un reporte resumen de las imágenes procesadas"""
    categories = {}
    for image in gallery_data:
        category = image['category']
        if category not in categories:
            categories[category] = 0
        categories[category] += 1
    
    print("\n" + "="*50)
    print("REPORTE RESUMEN")
    print("="*50)
    
    for category in sorted(categories.keys()):
        category_display = get_category_display_name(category)
        print(f"{category_display}: {categories[category]} imágenes")
    
    print(f"\nTOTAL: {len(gallery_data)} imágenes")
    print("="*50)

def main():
    """Función principal"""
    # Configuración de rutas
    script_dir = Path(__file__).parent
    images_folder = script_dir / "images"
    output_js_file = script_dir / "js" / "gallery-data-generated.js"
    output_json_file = script_dir / "gallery-data.json"
    
    print("Generador de Array de Galería - Portfolio David Eric Bonucci")
    print("="*60)
    
    # Escanear las imágenes
    gallery_data = scan_images_folder(images_folder)
    
    if not gallery_data:
        print("No se encontraron imágenes para procesar.")
        return
    
    # Generar archivo JavaScript
    generate_javascript_array(gallery_data, output_js_file)
    
    # Generar archivo JSON de respaldo
    with open(output_json_file, 'w', encoding='utf-8') as f:
        json.dump(gallery_data, f, indent=2, ensure_ascii=False)
    print(f"Archivo JSON de respaldo generado: {output_json_file}")
    
    # Mostrar reporte resumen
    generate_summary_report(gallery_data)
    
    print(f"\n¡Proceso completado! Archivos generados:")
    print(f"  - JavaScript: {output_js_file}")
    print(f"  - JSON: {output_json_file}")

if __name__ == "__main__":
    main()
