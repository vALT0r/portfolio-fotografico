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

// Variables globales
let currentImages = [...galleryData];
let isLoading = false;

// Inicialización cuando la página carga
document.addEventListener('DOMContentLoaded', function() {
    // Ocultar loading screen después de un momento
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1500);

    // Inicializar componentes
    initializeNavigation();
    initializeGallery();
    initializeContactForm();
    // initializeModal(); // Comentado - ahora usamos initializeCategoryModal
    initializeSmoothScroll();
});

// Navegación móvil
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Highlight active section
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Configuración de categorías
const categoryConfig = {
    arquitectura: { name: 'Arquitectura', icon: 'fas fa-building' },
    paisajes: { name: 'Paisajes', icon: 'fas fa-mountain' },
    astrofotografia: { name: 'Astrofotografía', icon: 'fas fa-moon' },
    naturaleza: { name: 'Naturaleza', icon: 'fas fa-leaf' },
    macro: { name: 'Macro', icon: 'fas fa-search-plus' },
    objetos: { name: 'Objetos', icon: 'fas fa-cube' },
    people: { name: 'Retratos', icon: 'fas fa-user' },
    arte: { name: 'Arte', icon: 'fas fa-palette' },
    eventos: { name: 'Eventos', icon: 'fas fa-calendar' }
};

// Variables globales para el modal
let currentCategory = '';
let currentImageIndex = 0;
let currentCategoryImages = [];

// Inicializar galer�a de categor�as
function initializeGallery() {
    const categoryGrid = document.getElementById('category-grid');

    // Agrupar im�genes por categor�a
    const categorizedImages = {};
    galleryData.forEach(image => {
        if (!categorizedImages[image.category]) {
            categorizedImages[image.category] = [];
        }
        categorizedImages[image.category].push(image);
    });

    // Crear tarjetas de categor�as
    const categoryCards = Object.keys(categorizedImages).map(category => {
        const images = categorizedImages[category];
        const config = categoryConfig[category];
        const firstImage = images[0];
        
        return `
            <div class="category-card" onclick="openCategoryModal('${category}')" data-category="${category}">
                <img class="category-card-image" src="${firstImage.image}" alt="${config.name}" loading="lazy">
                <div class="category-overlay">
                    <h3 class="category-title">${config.name}</h3>
                </div>
            </div>
        `;
    }).join('');

    categoryGrid.innerHTML = categoryCards;

    // Animaci�n de entrada
    const categoryElements = document.querySelectorAll('.category-card');
    categoryElements.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150);
    });

    // Inicializar modal
    initializeCategoryModal();
}

// Inicializar modal de categor�a
function initializeCategoryModal() {
    const modal = document.getElementById('category-modal');
    const closeBtn = document.getElementById('modal-close');
    const prevBtn = document.getElementById('modal-prev');
    const nextBtn = document.getElementById('modal-next');
    const background = document.querySelector('.modal-background');
    const modalGallery = document.querySelector('.modal-gallery');

    // Cerrar modal
    [closeBtn, background].forEach(element => {
        element.addEventListener('click', closeCategoryModal);
    });

    // Navegaci�n con botones (solo desktop)
    prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigateModal(-1);
    });
    
    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigateModal(1);
    });

    // Variables para swipe
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    let hasSwipeStarted = false;

    // Touch events para swipe (m�vil/tablet)
    modalGallery.addEventListener('touchstart', (e) => {
        // Solo si no es un bot�n
        if (e.target.closest('.modal-nav-btn')) return;
        
        startX = e.touches[0].clientX;
        isDragging = true;
        hasSwipeStarted = false;
    });

    modalGallery.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentX = e.touches[0].clientX;
        hasSwipeStarted = true;
        e.preventDefault();
    });

    modalGallery.addEventListener('touchend', (e) => {
        if (!isDragging || !hasSwipeStarted) return;
        isDragging = false;
        hasSwipeStarted = false;
        
        const diff = startX - currentX;
        const threshold = 50;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                navigateModal(1); // Swipe left - next image
            } else {
                navigateModal(-1); // Swipe right - previous image
            }
        }
    });

    // Mouse events para swipe (desktop como alternativa)
    modalGallery.addEventListener('mousedown', (e) => {
        // Solo si no es un bot�n y no es click derecho
        if (e.target.closest('.modal-nav-btn') || e.button !== 0) return;
        
        startX = e.clientX;
        isDragging = true;
        hasSwipeStarted = false;
        modalGallery.style.cursor = 'grabbing';
        e.preventDefault();
    });

    modalGallery.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        currentX = e.clientX;
        hasSwipeStarted = true;
    });

    modalGallery.addEventListener('mouseup', (e) => {
        if (!isDragging) return;
        isDragging = false;
        modalGallery.style.cursor = 'grab';
        
        // Solo navegar si realmente hubo un arrastre significativo
        if (hasSwipeStarted) {
            const diff = startX - currentX;
            const threshold = 50;
            
            if (Math.abs(diff) > threshold) {
                if (diff > 0) {
                    navigateModal(1);
                } else {
                    navigateModal(-1);
                }
            }
        }
        
        hasSwipeStarted = false;
    });

    // Prevenir el arrastre de im�genes
    modalGallery.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });

    // Toggle del modal-image-info al tocar imagen o texto
    const modalImage = document.getElementById('modal-image');
    const modalImageInfo = document.querySelector('.modal-image-info');
    
    // Funci�n para toggle del info
    const toggleImageInfo = (e) => {
        e.stopPropagation();
        modalImageInfo.classList.toggle('hidden');
    };
    
    // Event listeners para toggle
    modalImage.addEventListener('click', toggleImageInfo);
    modalImageInfo.addEventListener('click', toggleImageInfo);

    // Cerrar con ESC y navegaci�n con teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeCategoryModal();
        }
        if (modal.classList.contains('active')) {
            if (e.key === 'ArrowLeft') navigateModal(-1);
            if (e.key === 'ArrowRight') navigateModal(1);
        }
    });
}

// Abrir modal de categor�a
function openCategoryModal(category) {
    const modal = document.getElementById('category-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalNav = document.querySelector('.modal-nav');
    const modalGallery = document.querySelector('.modal-gallery');
    
    currentCategory = category;
    currentCategoryImages = galleryData.filter(img => img.category === category);
    currentImageIndex = 0;
    
    modalTitle.textContent = categoryConfig[category].name;
    
    // Detectar si es dispositivo m�vil/tablet
    const isMobile = window.innerWidth <= 768;
    
    if (!isMobile) {
        modalNav.classList.add('desktop');
        modalGallery.style.cursor = 'grab';
    } else {
        modalNav.classList.remove('desktop');
        modalGallery.style.cursor = 'default';
        
        // Mostrar indicador de swipe solo en m�vil y solo la primera vez
        if (currentCategoryImages.length > 1) {
            showSwipeIndicator();
        }
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    updateModalImage();
}

// Mostrar indicador de swipe
function showSwipeIndicator() {
    const modalGallery = document.querySelector('.modal-gallery');
    const indicator = document.createElement('div');
    indicator.className = 'swipe-indicator';
    indicator.innerHTML = '<i class="fas fa-hand-paper"></i><br>Desliza para navegar';
    
    modalGallery.appendChild(indicator);
    
    // Remover despu�s de 3 segundos
    setTimeout(() => {
        if (indicator.parentNode) {
            indicator.remove();
        }
    }, 3000);
}

// Cerrar modal de categor�a
function closeCategoryModal() {
    const modal = document.getElementById('category-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Navegar en el modal
function navigateModal(direction) {
    currentImageIndex += direction;
    
    if (currentImageIndex < 0) {
        currentImageIndex = currentCategoryImages.length - 1;
    } else if (currentImageIndex >= currentCategoryImages.length) {
        currentImageIndex = 0;
    }
    
    updateModalImage();
}

// Actualizar imagen del modal
function updateModalImage() {
    const modalImage = document.getElementById('modal-image');
    const modalImageTitle = document.getElementById('modal-image-title');
    const modalImageDescription = document.getElementById('modal-image-description');
    
    const currentImage = currentCategoryImages[currentImageIndex];
    
    // Precargar imagen para evitar saltos
    const preloadImage = new Image();
    preloadImage.onload = function() {
        modalImage.src = currentImage.fullImage;
        modalImage.alt = currentImage.title;
    };
    preloadImage.src = currentImage.fullImage;
    
    // Actualizar informaci�n
    modalImageTitle.textContent = currentImage.title;
    modalImageDescription.textContent = currentImage.description;
    
    // Mostrar el modal-image-info por defecto
    const modalImageInfo = document.querySelector('.modal-image-info');
    if (modalImageInfo) {
        modalImageInfo.classList.remove('hidden');
    }
    
    // Remover indicador de swipe si existe
    const swipeIndicator = document.querySelector('.swipe-indicator');
    if (swipeIndicator) {
        swipeIndicator.remove();
    }
}

// Modal original (comentado - ahora usamos initializeCategoryModal)
/*
function initializeModal() {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const closeBtn = document.querySelector('.close');

    // Cerrar modal
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Cerrar con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}
*/

// Funci�n openModal original (comentada - ahora usamos openCategoryModal)
/*
function openModal(imageId) {
    const image = galleryData.find(item => item.id === imageId);
    if (!image) return;

    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');

    modalImage.src = image.fullImage;
    modalImage.alt = image.title;
    modalTitle.textContent = image.title;
    modalDescription.textContent = image.description;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}
*/

// Formulario de contacto
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('.submit-btn');
    
    // Configurar la acción del formulario para FormSubmit
    form.action = 'https://formsubmit.co/daerbon@gmail.com';
    
    form.addEventListener('submit', (e) => {
        // Cambiar estado del botón mientras se envía
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        
        // Mostrar notificación de que se está enviando
        showNotification('Enviando mensaje...', 'info');
        
        // Permitir que el formulario se envíe normalmente a FormSubmit
        // FormSubmit se encargará del redirect automáticamente
    });
    
    // Verificar si venimos de un envío exitoso
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('mensaje') === 'enviado') {
        showNotification('¡Mensaje enviado correctamente! Te contactaré pronto.', 'success');
        // Limpiar la URL
        window.history.replaceState({}, document.title, window.location.pathname);
    }
}

// Función para mostrar notificaciones
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    let iconClass = 'info-circle';
    let bgColor = '#3498db';
    
    if (type === 'success') {
        iconClass = 'check-circle';
        bgColor = '#27ae60';
    } else if (type === 'error') {
        iconClass = 'exclamation-triangle';
        bgColor = '#e74c3c';
    }
    
    notification.innerHTML = `
        <i class="fas fa-${iconClass}"></i>
        <span>${message}</span>
    `;
    
    // Estilos para la notificación
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: bgColor,
        color: 'white',
        padding: '15px 20px',
        borderRadius: '8px',
        zIndex: '10000',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease'
    });

    document.body.appendChild(notification);

    // Animación de entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remover después de 5 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Smooth scroll mejorado
function initializeSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            // Fix: Handle logo link to home
            if (targetId === '#' || targetId === '#inicio') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Lazy loading para imágenes
function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// Animaciones al hacer scroll
function initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll('.section-title, .about-stats, .contact-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Función para configurar Cloudinary (llamar cuando tengas tu cuenta)
function configureCloudinary(cloudName, uploadPreset) {
    // Actualizar variables
    window.CLOUDINARY_CLOUD_NAME = cloudName;
    window.CLOUDINARY_UPLOAD_PRESET = uploadPreset;
    
    console.log('Cloudinary configurado:', { cloudName, uploadPreset });
    
    // Aquí podrías cargar imágenes dinámicamente desde Cloudinary
    loadImagesFromCloudinary();
}

// Cargar imágenes desde Cloudinary (cuando esté configurado)
function loadImagesFromCloudinary() {
    // Ejemplo de cómo cargar imágenes desde Cloudinary
    // Esto requiere configurar tu cuenta y subir las imágenes primero
    
    if (CLOUDINARY_CLOUD_NAME === 'tu-cloud-name') {
        console.log('Configura tu cuenta de Cloudinary para cargar las imágenes');
        return;
    }
    
    // Aquí implementarías la lógica para cargar tus imágenes reales
    // desde Cloudinary usando su API
}

// Utilidades
const utils = {
    // Debounce para optimizar eventos
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle para scroll events
    throttle: (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Formatear fecha
    formatDate: (date) => {
        return new Intl.DateTimeFormat('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date);
    }
};

// Inicializar animaciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initializeScrollAnimations();
        lazyLoadImages();
    }, 500);
});

// Optimización del scroll
window.addEventListener('scroll', utils.throttle(() => {
    // Aquí puedes añadir efectos de parallax o animaciones basadas en scroll
}, 16)); // ~60fps
