// Configuración de Cloudinary
const CLOUDINARY_CLOUD_NAME = 'dunjl9u7y';
const CLOUDINARY_UPLOAD_PRESET = 'daerbon-portfolio';

// Portfolio David Eric Bonucci - Array generado automáticamente
const galleryData = [
    // ARQUITECTURA - 10 imágenes
    {
        id: 1,
        title: "Momento Arquitectura",
        description: "Diseño arquitectónico en perfecta armonía",
        category: "arquitectura",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/arquitectura/001-DSC_7771.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/arquitectura/001-DSC_7771.jpg`
    },
    {
        id: 2,
        title: "Captura Fotográfica Arquitectura",
        description: "Espacios que inspiran y transforman",
        category: "arquitectura",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/arquitectura/002-DSC_3140.JPG`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/arquitectura/002-DSC_3140.JPG`
    },
    {
        id: 3,
        title: "Fotografía Arquitectura",
        description: "Perspectivas únicas de espacios urbanos",
        category: "arquitectura",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/arquitectura/003-2024Oct13_141430.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/arquitectura/003-2024Oct13_141430.jpg`
    },
    {
        id: 4,
        title: "Momento Arquitectura",
        description: "Elementos constructivos con carácter propio",
        category: "arquitectura",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/arquitectura/004-DSC_0196-Enhanced-NR.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/arquitectura/004-DSC_0196-Enhanced-NR.jpg`
    },
    {
        id: 5,
        title: "Imagen Arquitectura",
        description: "Juego de luces y sombras en estructuras",
        category: "arquitectura",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/arquitectura/005-DSC_5493-Enhanced-NR.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/arquitectura/005-DSC_5493-Enhanced-NR.jpg`
    },
    {
        id: 6,
        title: "Momento Arquitectura",
        description: "Líneas modernas y estructuras contemporáneas",
        category: "arquitectura",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/arquitectura/006-DSC_5434-Enhanced-NR.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/arquitectura/006-DSC_5434-Enhanced-NR.jpg`
    },
    {
        id: 7,
        title: "Imagen Arquitectura",
        description: "Diseño arquitectónico en perfecta armonía",
        category: "arquitectura",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/arquitectura/007-DSC_5462-Enhanced-NR.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/arquitectura/007-DSC_5462-Enhanced-NR.jpg`
    },
    {
        id: 8,
        title: "Captura Fotográfica Arquitectura",
        description: "Espacios que inspiran y transforman",
        category: "arquitectura",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/arquitectura/008-DSC_3018.JPG`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/arquitectura/008-DSC_3018.JPG`
    },
    {
        id: 9,
        title: "Momento Arquitectura",
        description: "Geometrías que definen la arquitectura moderna",
        category: "arquitectura",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/arquitectura/009-DSC_3885.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/arquitectura/009-DSC_3885.jpg`
    },
    {
        id: 10,
        title: "Imagen Arquitectura",
        description: "Juego de luces y sombras en estructuras",
        category: "arquitectura",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/arquitectura/010-DSC_5004.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/arquitectura/010-DSC_5004.jpg`
    },


    // ARTE - 3 imágenes
    {
        id: 11,
        title: "Momento Arte",
        description: "Expresión artística a través del lente",
        category: "arte",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/arte/001-DSC_0910-Enhanced-NR.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/arte/001-DSC_0910-Enhanced-NR.jpg`
    },
    {
        id: 12,
        title: "Captura Fotográfica Arte",
        description: "Expresión artística a través del lente",
        category: "arte",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/arte/002-DSC_2203.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/arte/002-DSC_2203.jpg`
    },
    {
        id: 13,
        title: "Imagen Arte",
        description: "Creatividad visual sin límites",
        category: "arte",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/arte/003-DSC_3878.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/arte/003-DSC_3878.jpg`
    },


    // ASTROFOTOGRAFÍA - 1 imágenes
    {
        id: 14,
        title: "Imagen Astrofotografia",
        description: "Momentos celestiales únicos",
        category: "astrofotografia",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/astrofotografia/001-DSC_9465.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/astrofotografia/001-DSC_9465.jpg`
    },


    // EVENTOS - 6 imágenes
    {
        id: 15,
        title: "Captura Fotográfica Eventos",
        description: "Emociones compartidas en grupo",
        category: "eventos",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/eventos/001-DSC_7930.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/eventos/001-DSC_7930.jpg`
    },
    {
        id: 16,
        title: "Fotografía Eventos",
        description: "Historias humanas en imágenes",
        category: "eventos",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/eventos/002.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/eventos/002.jpg`
    },
    {
        id: 17,
        title: "Captura Fotográfica Eventos",
        description: "Conexiones y encuentros memorables",
        category: "eventos",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/eventos/003-DSC_1199.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/eventos/003-DSC_1199.jpg`
    },
    {
        id: 18,
        title: "Escena Eventos",
        description: "Conexiones y encuentros memorables",
        category: "eventos",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/eventos/004.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/eventos/004.jpg`
    },
    {
        id: 19,
        title: "Fotografía Eventos",
        description: "Momentos especiales documentados",
        category: "eventos",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/eventos/005.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/eventos/005.jpg`
    },
    {
        id: 20,
        title: "Escena Eventos",
        description: "Celebraciones llenas de vida",
        category: "eventos",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/eventos/006.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/eventos/006.jpg`
    },


    // MACRO - 2 imágenes
    {
        id: 21,
        title: "Imagen Macro",
        description: "Belleza en los elementos más pequeños",
        category: "macro",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/macro/001-DSC_8179.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/macro/001-DSC_8179.jpg`
    },
    {
        id: 22,
        title: "Imagen Macro",
        description: "Mundos ocultos revelados",
        category: "macro",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/macro/002-DSC_8213.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/macro/002-DSC_8213.jpg`
    },


    // NATURALEZA - 17 imágenes
    {
        id: 23,
        title: "Momento Naturaleza",
        description: "Ecosistemas locales únicos",
        category: "naturaleza",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/naturaleza/001-DSC_0059-Enhanced-NR-2.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/naturaleza/001-DSC_0059-Enhanced-NR-2.jpg`
    },
    {
        id: 24,
        title: "Momento Naturaleza",
        description: "La riqueza de la fauna local",
        category: "naturaleza",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/naturaleza/002-DSC_8881.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/naturaleza/002-DSC_8881.jpg`
    },
    {
        id: 25,
        title: "Momento Naturaleza",
        description: "La riqueza de la fauna local",
        category: "naturaleza",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/naturaleza/003-DSC_8856.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/naturaleza/003-DSC_8856.jpg`
    },
    {
        id: 26,
        title: "Captura Fotográfica Naturaleza",
        description: "La riqueza de la fauna local",
        category: "naturaleza",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/naturaleza/004-DSC_0466-Enhanced-NR-2.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/naturaleza/004-DSC_0466-Enhanced-NR-2.jpg`
    },
    {
        id: 27,
        title: "Momento Naturaleza",
        description: "Encuentros especiales con la fauna",
        category: "naturaleza",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/naturaleza/005-DSC_0628.JPG`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/naturaleza/005-DSC_0628.JPG`
    },
    {
        id: 28,
        title: "Momento Naturaleza",
        description: "Momentos únicos con la naturaleza",
        category: "naturaleza",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/naturaleza/006-DSC_0013.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/naturaleza/006-DSC_0013.jpg`
    },
    {
        id: 29,
        title: "Escena Naturaleza",
        description: "Vida silvestre en su hábitat natural",
        category: "naturaleza",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/naturaleza/007-2024Oct13_132750.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/naturaleza/007-2024Oct13_132750.jpg`
    },
    {
        id: 30,
        title: "Escena Naturaleza",
        description: "Encuentros especiales con la fauna",
        category: "naturaleza",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/naturaleza/008-2024Oct11_150354.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/naturaleza/008-2024Oct11_150354.jpg`
    },
    {
        id: 31,
        title: "Imagen Naturaleza",
        description: "La belleza de la vida silvestre",
        category: "naturaleza",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/naturaleza/009-DSC_0058.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/naturaleza/009-DSC_0058.jpg`
    },
    {
        id: 32,
        title: "Momento Naturaleza",
        description: "Vida silvestre en su hábitat natural",
        category: "naturaleza",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/naturaleza/010-DSC_4555.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/naturaleza/010-DSC_4555.jpg`
    },
    {
        id: 33,
        title: "Imagen Naturaleza",
        description: "Ecosistemas locales únicos",
        category: "naturaleza",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/naturaleza/011-DSC_4646-Enhanced-NR.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/naturaleza/011-DSC_4646-Enhanced-NR.jpg`
    },
    {
        id: 34,
        title: "Captura Fotográfica Naturaleza",
        description: "Comportamiento natural captado",
        category: "naturaleza",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/naturaleza/012-DSC_1420.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/naturaleza/012-DSC_1420.jpg`
    },
    {
        id: 35,
        title: "Momento Naturaleza",
        description: "La belleza de la vida silvestre",
        category: "naturaleza",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/naturaleza/013-DSC_0078-Enhanced-NR.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/naturaleza/013-DSC_0078-Enhanced-NR.jpg`
    },
    {
        id: 36,
        title: "Captura Fotográfica Naturaleza",
        description: "Vida silvestre en su hábitat natural",
        category: "naturaleza",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/naturaleza/014-DSC_8667-Enhanced-NR.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/naturaleza/014-DSC_8667-Enhanced-NR.jpg`
    },
    {
        id: 37,
        title: "Captura Fotográfica Naturaleza",
        description: "Momentos únicos con la naturaleza",
        category: "naturaleza",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/naturaleza/016-DSC_0271.JPG`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/naturaleza/016-DSC_0271.JPG`
    },
    {
        id: 38,
        title: "Momento Naturaleza",
        description: "Ecosistemas locales únicos",
        category: "naturaleza",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/naturaleza/017-DSC_5512-Enhanced-NR.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/naturaleza/017-DSC_5512-Enhanced-NR.jpg`
    },
    {
        id: 39,
        title: "Momento Naturaleza",
        description: "Momentos únicos con la naturaleza",
        category: "naturaleza",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/naturaleza/018-DSC_8863-Enhanced-NR.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/naturaleza/018-DSC_8863-Enhanced-NR.jpg`
    },


    // OBJETOS - 5 imágenes
    {
        id: 40,
        title: "Momento Objetos",
        description: "Juegos de luz en objetos cotidianos",
        category: "objetos",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/objetos/001-DSC_5777.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/objetos/001-DSC_5777.jpg`
    },
    {
        id: 41,
        title: "Imagen Objetos",
        description: "La belleza oculta en lo simple",
        category: "objetos",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/objetos/002-DSC_3816.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/objetos/002-DSC_3816.jpg`
    },
    {
        id: 42,
        title: "Captura Fotográfica Objetos",
        description: "Arreglos creativos y únicos",
        category: "objetos",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/objetos/003-DSC_1493.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/objetos/003-DSC_1493.jpg`
    },
    {
        id: 43,
        title: "Momento Objetos",
        description: "La belleza oculta en lo simple",
        category: "objetos",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/objetos/004-DSC_1468-Enhanced-NR.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/objetos/004-DSC_1468-Enhanced-NR.jpg`
    },
    {
        id: 44,
        title: "Imagen Objetos",
        description: "Detalles que cobran vida propia",
        category: "objetos",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/objetos/005-DSC_5781.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/objetos/005-DSC_5781.jpg`
    },


    // PAISAJES - 24 imágenes
    {
        id: 45,
        title: "Imagen Paisajes",
        description: "La grandeza de los espacios abiertos",
        category: "paisajes",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/paisajes/001-DSC_8764.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/paisajes/001-DSC_8764.jpg`
    },
    {
        id: 46,
        title: "Imagen Paisajes",
        description: "Composiciones naturales extraordinarias",
        category: "paisajes",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/paisajes/002-DSC_9222-Enhanced-NR.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/paisajes/002-DSC_9222-Enhanced-NR.jpg`
    },
    {
        id: 47,
        title: "Captura Fotográfica Paisajes",
        description: "Composiciones naturales extraordinarias",
        category: "paisajes",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/paisajes/003-DSC_9214.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/paisajes/003-DSC_9214.jpg`
    },
    {
        id: 48,
        title: "Captura Fotográfica Paisajes",
        description: "Momentos únicos en la naturaleza",
        category: "paisajes",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/paisajes/004-DSC_8923-Enhanced-NR.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/paisajes/004-DSC_8923-Enhanced-NR.jpg`
    },
    {
        id: 49,
        title: "Fotografía Paisajes",
        description: "Vistas panorámicas de belleza incomparable",
        category: "paisajes",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/paisajes/005-2024Oct11_224444.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/paisajes/005-2024Oct11_224444.jpg`
    },
    {
        id: 50,
        title: "Imagen Paisajes",
        description: "Paisajes que tocan el alma",
        category: "paisajes",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/paisajes/006-DSC_8873-Enhanced-NR.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/paisajes/006-DSC_8873-Enhanced-NR.jpg`
    },
    {
        id: 51,
        title: "Momento Paisajes",
        description: "La grandeza de los espacios abiertos",
        category: "paisajes",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/paisajes/007-DSC_9273-Enhanced-NR.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/paisajes/007-DSC_9273-Enhanced-NR.jpg`
    },
    {
        id: 52,
        title: "Momento Paisajes",
        description: "La magia de los colores naturales",
        category: "paisajes",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/paisajes/008-DSC_9326-Enhanced-NR.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/paisajes/008-DSC_9326-Enhanced-NR.jpg`
    },
    {
        id: 53,
        title: "Momento Paisajes",
        description: "Paisajes que tocan el alma",
        category: "paisajes",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/paisajes/009-DSC_0401-Enhanced-NR.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/paisajes/009-DSC_0401-Enhanced-NR.jpg`
    },
    {
        id: 54,
        title: "Fotografía Paisajes",
        description: "Vistas panorámicas de belleza incomparable",
        category: "paisajes",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/paisajes/010-2024Oct13_162447.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/paisajes/010-2024Oct13_162447.jpg`
    },
    {
        id: 55,
        title: "Fotografía Paisajes",
        description: "La grandeza de los espacios abiertos",
        category: "paisajes",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/paisajes/011-2024Oct13_162425.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/paisajes/011-2024Oct13_162425.jpg`
    },
    {
        id: 56,
        title: "Captura Fotográfica Paisajes",
        description: "La grandeza de los espacios abiertos",
        category: "paisajes",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/paisajes/012-DSC_8761-Enhanced-NR.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/paisajes/012-DSC_8761-Enhanced-NR.jpg`
    },
    {
        id: 57,
        title: "Momento Paisajes",
        description: "Composiciones naturales extraordinarias",
        category: "paisajes",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/paisajes/013-DSC_8686-Enhanced-NR.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/paisajes/013-DSC_8686-Enhanced-NR.jpg`
    },
    {
        id: 58,
        title: "Momento Paisajes",
        description: "Paisajes que tocan el alma",
        category: "paisajes",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/paisajes/014-DSC_8684-Enhanced-NR.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/paisajes/014-DSC_8684-Enhanced-NR.jpg`
    },
    {
        id: 59,
        title: "Imagen Paisajes",
        description: "Paisajes que tocan el alma",
        category: "paisajes",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/paisajes/015-DSC_8593.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/paisajes/015-DSC_8593.jpg`
    },
    {
        id: 60,
        title: "Momento Paisajes",
        description: "Momentos únicos en la naturaleza",
        category: "paisajes",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/paisajes/016-DSC_4175-Enhanced-NR.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/paisajes/016-DSC_4175-Enhanced-NR.jpg`
    },
    {
        id: 61,
        title: "Imagen Paisajes",
        description: "Composiciones naturales extraordinarias",
        category: "paisajes",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/paisajes/017-DSC_9052-Pano-Enhanced-NR.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/paisajes/017-DSC_9052-Pano-Enhanced-NR.jpg`
    },
    {
        id: 62,
        title: "Momento Paisajes",
        description: "Paisajes que capturan la esencia del lugar",
        category: "paisajes",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/paisajes/018-DSC_4751.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/paisajes/018-DSC_4751.jpg`
    },
    {
        id: 63,
        title: "Captura Fotográfica Paisajes",
        description: "La magia de los colores naturales",
        category: "paisajes",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/paisajes/019-DSC_4680.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/paisajes/019-DSC_4680.jpg`
    },
    {
        id: 64,
        title: "Momento Paisajes",
        description: "La magia de los colores naturales",
        category: "paisajes",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/paisajes/020-DSC_4589.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/paisajes/020-DSC_4589.jpg`
    },
    {
        id: 65,
        title: "Captura Fotográfica Paisajes",
        description: "Vistas panorámicas de belleza incomparable",
        category: "paisajes",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/paisajes/021-DSC_8715-Pano-Enhanced-NR.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/paisajes/021-DSC_8715-Pano-Enhanced-NR.jpg`
    },
    {
        id: 66,
        title: "Momento Paisajes",
        description: "Horizontes que inspiran y conmueven",
        category: "paisajes",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/paisajes/022-DSC_9354-Enhanced-NR.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/paisajes/022-DSC_9354-Enhanced-NR.jpg`
    },
    {
        id: 67,
        title: "Momento Paisajes",
        description: "La magia de los colores naturales",
        category: "paisajes",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/paisajes/023-DSC_9121-Enhanced-NR.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/paisajes/023-DSC_9121-Enhanced-NR.jpg`
    },
    {
        id: 68,
        title: "Momento Paisajes",
        description: "La inmensidad de la naturaleza argentina",
        category: "paisajes",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/paisajes/024-DSC_9268.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/paisajes/024-DSC_9268.jpg`
    },


    // RETRATOS - 6 imágenes
    {
        id: 69,
        title: "Imagen People",
        description: "La belleza de la expresión humana",
        category: "people",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/people/001-DSC_2444.JPG`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/people/001-DSC_2444.JPG`
    },
    {
        id: 70,
        title: "Momento People",
        description: "La esencia humana en cada imagen",
        category: "people",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/people/002-Tigre-DSC_5684.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/people/002-Tigre-DSC_5684.jpg`
    },
    {
        id: 71,
        title: "Captura Fotográfica People",
        description: "Expresiones que cuentan historias",
        category: "people",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/people/003-Tigre-DSC_5670.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/people/003-Tigre-DSC_5670.jpg`
    },
    {
        id: 72,
        title: "Momento People",
        description: "La belleza de la expresión humana",
        category: "people",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/people/004-DSC_2540.JPG`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/people/004-DSC_2540.JPG`
    },
    {
        id: 73,
        title: "Imagen People",
        description: "Momentos íntimos y personales",
        category: "people",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/people/005-DSC_5975.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/people/005-DSC_5975.jpg`
    },
    {
        id: 74,
        title: "Fotografía People",
        description: "La belleza de la expresión humana",
        category: "people",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400,h_280,c_fill,q_85,f_auto/portfolio/people/006-2024Oct11_125747.jpg`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/portfolio/people/006-2024Oct11_125747.jpg`
    }
];