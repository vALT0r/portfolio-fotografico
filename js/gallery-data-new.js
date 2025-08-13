// Configuración de Cloudinary (reemplaza con tu cloud name)
const CLOUDINARY_CLOUD_NAME = 'dunjl9u7y'; // Cambia esto por tu cloud name real cuando lo tengas
const CLOUDINARY_UPLOAD_PRESET = 'daerbon-portfolio'; // Cambia esto por tu upload preset

// Portfolio David Eric Bonucci - Especialidades fotográficas
const galleryData = [
    // ARQUITECTURA
    {
        id: 1,
        title: "Arquitectura Contemporánea",
        description: "Líneas modernas y estructuras urbanas",
        category: "arquitectura",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/arquitectura/001-DSC_3018.JPG`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/arquitectura/001-DSC_3018.JPG`
    },
    {
        id: 2,
        title: "Detalles Arquitectónicos",
        description: "Texturas y formas en la construcción",
        category: "arquitectura",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/arquitectura/002-DSC_3140.JPG`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/arquitectura/002-DSC_3140.JPG`
    },
    {
        id: 3,
        title: "Perspectivas Urbanas",
        description: "Capturando la ciudad desde nuevos ángulos",
        category: "arquitectura",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/arquitectura/003-2024Oct13_141430.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/arquitectura/003-2024Oct13_141430.jpg`
    },
    {
        id: 4,
        title: "Estructuras Iluminadas",
        description: "Arquitectura realzada por la luz",
        category: "arquitectura",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/arquitectura/004-DSC_0196-Enhanced-NR.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/arquitectura/004-DSC_0196-Enhanced-NR.jpg`
    },
    
    // PAISAJES
    {
        id: 5,
        title: "Horizontes Infinitos",
        description: "La inmensidad de la naturaleza argentina",
        category: "paisajes",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/paisajes/001-DSC_8764.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/paisajes/001-DSC_8764.jpg`
    },
    {
        id: 6,
        title: "Amaneceres Dorados",
        description: "La magia de los primeros rayos de sol",
        category: "paisajes",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/paisajes/002-DSC_9222-Enhanced-NR.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/paisajes/002-DSC_9222-Enhanced-NR.jpg`
    },
    {
        id: 7,
        title: "Montañas Serenas",
        description: "Paisajes que inspiran tranquilidad",
        category: "paisajes",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/paisajes/003-DSC_9214.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/paisajes/003-DSC_9214.jpg`
    },
    {
        id: 8,
        title: "Panorámica Natural",
        description: "Amplitud y perspectiva en cada toma",
        category: "paisajes",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/paisajes/017-DSC_9052-Pano-Enhanced-NR.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/paisajes/017-DSC_9052-Pano-Enhanced-NR.jpg`
    },
    {
        id: 9,
        title: "Reflejos en el Agua",
        description: "Simetría perfecta con la naturaleza",
        category: "paisajes",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/paisajes/021-DSC_8715-Pano-Enhanced-NR.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/paisajes/021-DSC_8715-Pano-Enhanced-NR.jpg`
    },
    
    // ASTROFOTOGRAFÍA - Especialidad técnica única
    {
        id: 10,
        title: "Luna en Detalle",
        description: "Fotografía lunar con Nikon Z5 + 150-600mm Sigma",
        category: "astrofotografia",
        subcategory: "sistema-solar",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/astrofotografia/001-DSC_9465.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/astrofotografia/001-DSC_9465.jpg`
    },
    
    // NATURALEZA
    {
        id: 11,
        title: "Flora Nativa",
        description: "Detalles de la vegetación local argentina",
        category: "naturaleza",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/naturaleza/001-DSC_0059-Enhanced-NR-2.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/naturaleza/001-DSC_0059-Enhanced-NR-2.jpg`
    },
    {
        id: 12,
        title: "Fauna Silvestre",
        description: "Vida animal en su hábitat natural",
        category: "naturaleza",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/naturaleza/002-DSC_8881.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/naturaleza/002-DSC_8881.jpg`
    },
    {
        id: 13,
        title: "Ecosistemas Locales",
        description: "La biodiversidad de Santa Fe",
        category: "naturaleza",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/naturaleza/003-DSC_8856.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/naturaleza/003-DSC_8856.jpg`
    },
    {
        id: 14,
        title: "Texturas Naturales",
        description: "Patrones únicos en la naturaleza",
        category: "naturaleza",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/naturaleza/004-DSC_0466-Enhanced-NR-2.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/naturaleza/004-DSC_0466-Enhanced-NR-2.jpg`
    },
    
    // MACRO
    {
        id: 15,
        title: "Macro Botánica",
        description: "Detalles microscópicos de plantas",
        category: "macro",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/macro/001-DSC_8179.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/macro/001-DSC_8179.jpg`
    },
    {
        id: 16,
        title: "Mundo Microscópico",
        description: "Belleza en los detalles más pequeños",
        category: "macro",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/macro/002-DSC_8213.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/macro/002-DSC_8213.jpg`
    },
    
    // OBJETOS
    {
        id: 17,
        title: "Objetos Cotidianos",
        description: "Belleza en lo simple y cotidiano",
        category: "objetos",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/objetos/001-DSC_1493.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/objetos/001-DSC_1493.jpg`
    },
    {
        id: 18,
        title: "Composición Artística",
        description: "Arreglos creativos y formas estéticas",
        category: "objetos",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/objetos/002-DSC_3816.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/objetos/002-DSC_3816.jpg`
    },
    {
        id: 19,
        title: "Juegos de Luz",
        description: "Iluminación creativa en objetos",
        category: "objetos",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/objetos/003-DSC_1468-Enhanced-NR.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/objetos/003-DSC_1468-Enhanced-NR.jpg`
    },
    
    // RETRATOS / PEOPLE
    {
        id: 20,
        title: "Retrato Natural",
        description: "Expresiones auténticas y espontáneas",
        category: "people",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/people/001-DSC_5684.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/people/001-DSC_5684.jpg`
    },
    {
        id: 21,
        title: "Retrato Creativo",
        description: "Juegos de luz y sombra en retratos",
        category: "people",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/people/002DSC_5670.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/people/002DSC_5670.jpg`
    },
    {
        id: 22,
        title: "Momentos Únicos",
        description: "Capturando la esencia de las personas",
        category: "people",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/people/003-DSC_2540.JPG`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/people/003-DSC_2540.JPG`
    },
    
    // ARTE
    {
        id: 23,
        title: "Fotografía Artística",
        description: "Exploración visual y creativa",
        category: "arte",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/arte/001-DSC_0910-Enhanced-NR.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/arte/001-DSC_0910-Enhanced-NR.jpg`
    },
    {
        id: 24,
        title: "Composición Abstracta",
        description: "Formas y conceptos abstractos",
        category: "arte",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/arte/002-DSC_2203.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/arte/002-DSC_2203.jpg`
    },
    {
        id: 25,
        title: "Expresión Visual",
        description: "Arte a través del lente fotográfico",
        category: "arte",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/arte/003-DSC_3878.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/arte/003-DSC_3878.jpg`
    },
    
    // EVENTOS
    {
        id: 26,
        title: "Momentos Especiales",
        description: "Eventos únicos capturados para la eternidad",
        category: "eventos",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/eventos/001.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/eventos/001.jpg`
    },
    {
        id: 27,
        title: "Celebraciones",
        description: "Alegría y emotividad en cada imagen",
        category: "eventos",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/eventos/002.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/eventos/002.jpg`
    },
    {
        id: 28,
        title: "Eventos Sociales",
        description: "Documentando encuentros significativos",
        category: "eventos",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/eventos/003.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/eventos/003.jpg`
    },
    {
        id: 29,
        title: "Fotografía de Evento",
        description: "Capturando la esencia de cada ocasión",
        category: "eventos",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/eventos/005-DSC_7930.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/eventos/005-DSC_7930.jpg`
    }
];
