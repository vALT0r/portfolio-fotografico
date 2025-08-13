// ConfiguraciÃ³n de Cloudinary (reemplaza con tu cloud name)
const CLOUDINARY_CLOUD_NAME = 'dunjl9u7y'; // Cambia esto por tu cloud name real cuando lo tengas
const CLOUDINARY_UPLOAD_PRESET = 'daerbon-portfolio'; // Cambia esto por tu upload preset

// Portfolio David Eric Bonucci - Especialidades fotogrÃ¡ficas
const galleryData = [
    // ARQUITECTURA
    {
        id: 1,
        title: "Arquitectura ContemporÃ¡nea",
        description: "LÃ­neas modernas y estructuras urbanas",
        category: "arquitectura",
        image: "images/Arquitectura/arq-001-thumb.jpg",
        fullImage: "images/Arquitectura/arq-001.jpg"
    },
    {
        id: 2,
        title: "Detalles ArquitectÃ³nicos",
        description: "Texturas y formas en la construcciÃ³n",
        category: "arquitectura",
        image: "images/Arquitectura/arq-002-thumb.jpg",
        fullImage: "images/Arquitectura/arq-002.jpg"
    },
    
    // PAISAJES
    {
        id: 3,
        title: "Paisajes Naturales",
        description: "La belleza de la naturaleza argentina",
        category: "paisajes",
        image: "images/Paisajes/paisaje-001-thumb.jpg",
        fullImage: "images/Paisajes/paisaje-001.jpg"
    },
    {
        id: 4,
        title: "Horizontes",
        description: "Amplitud y perspectiva natural",
        category: "paisajes",
        image: "images/Paisajes/paisaje-002-thumb.jpg",
        fullImage: "images/Paisajes/paisaje-002.jpg"
    },
    
    // ASTROFOTOGRAFÃA - Especialidad tÃ©cnica Ãºnica
    {
        id: 5,
        title: "Luna en Detalle",
        description: "Fotografía lunar con Nikon Z5 + 150-600mm",
        category: "astrofotografia",
        subcategory: "sistema-solar",
        image: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_800,c_limit,q_85,f_auto/astrofotografia/luna-001`,
        fullImage: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_1200,c_limit,q_90,f_auto/astrofotografia/luna-001`
    },
    {
        id: 6,
        title: "Nebulosa de OriÃ³n",
        description: "RegiÃ³n de formaciÃ³n estelar",
        category: "astrofotografia",
        subcategory: "espacio-profundo",
        image: "images/Astrofotografia/orion-nebula-thumb.jpg",
        fullImage: "images/Astrofotografia/orion-nebula.jpg"
    },
    {
        id: 7,
        title: "Eclipse Lunar",
        description: "FenÃ³meno astronÃ³mico capturado",
        category: "astrofotografia",
        subcategory: "fenomenos",
        image: "images/Astrofotografia/eclipse-lunar-thumb.jpg",
        fullImage: "images/Astrofotografia/eclipse-lunar.jpg"
    },
    {
        id: 8,
        title: "Nebulosa Carina",
        description: "Región de formación estelar del hemisferio sur (en proceso)",
        category: "astrofotografia",
        image: "https://via.placeholder.com/800x600/1a1a2e/ffffff?text=Nebulosa+Carina+%28Próximamente%29",
        fullImage: "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=Nebulosa+Carina+%28En+Proceso%29"
    },
    
    // NATURALEZA
    {
        id: 10,
        title: "Flora Nativa",
        description: "Detalles de la vegetaciÃ³n local",
        category: "naturaleza",
        image: "images/Naturaleza/naturaleza-001-thumb.jpg",
        fullImage: "images/Naturaleza/naturaleza-001.jpg"
    },
    {
        id: 11,
        title: "Fauna Silvestre",
        description: "Vida animal en su hÃ¡bitat",
        category: "naturaleza",
        image: "images/Naturaleza/naturaleza-002-thumb.jpg",
        fullImage: "images/Naturaleza/naturaleza-002.jpg"
    },
    
    // MACRO
    {
        id: 12,
        title: "Macro BotÃ¡nica",
        description: "Detalles microscÃ³picos de plantas",
        category: "macro",
        image: "images/Macro/macro-001-thumb.jpg",
        fullImage: "images/Macro/macro-001.jpg"
    },
    {
        id: 13,
        title: "Texturas Naturales",
        description: "Patrones y formas en detalle",
        category: "macro",
        image: "images/Macro/macro-002-thumb.jpg",
        fullImage: "images/Macro/macro-002.jpg"
    },
    
    // OBJETOS
    {
        id: 14,
        title: "Objetos Cotidianos",
        description: "Belleza en lo simple",
        category: "objetos",
        image: "images/Objetos/objeto-001-thumb.jpg",
        fullImage: "images/Objetos/objeto-001.jpg"
    },
    {
        id: 15,
        title: "ComposiciÃ³n ArtÃ­stica",
        description: "Arreglos y formas creativas",
        category: "objetos",
        image: "images/Objetos/objeto-002-thumb.jpg",
        fullImage: "images/Objetos/objeto-002.jpg"
    },
    
    // RETRATOS
    {
        id: 16,
        title: "Retrato Natural",
        description: "Expresiones autÃ©nticas",
        category: "people",
        image: "images/People/people-001-thumb.jpg",
        fullImage: "images/People/people-001.jpg"
    },
    {
        id: 17,
        title: "Retrato Creativo",
        description: "Juegos de luz y sombra",
        category: "people",
        image: "images/People/people-002-thumb.jpg",
        fullImage: "images/People/people-002.jpg"
    },
    
    // ARTE
    {
        id: 18,
        title: "FotografÃ­a ArtÃ­stica",
        description: "ExploraciÃ³n visual creativa",
        category: "arte",
        image: "images/Arte/arte-001-thumb.jpg",
        fullImage: "images/Arte/arte-001.jpg"
    },
    {
        id: 19,
        title: "ComposiciÃ³n Abstracta",
        description: "Formas y conceptos abstractos",
        category: "arte",
        image: "images/Arte/arte-002-thumb.jpg",
        fullImage: "images/Arte/arte-002.jpg"
    },
    
    // EVENTOS
    {
        id: 20,
        title: "Eventos Especiales",
        description: "Momentos Ãºnicos capturados",
        category: "eventos",
        image: "images/Eventos/evento-001-thumb.jpg",
        fullImage: "images/Eventos/evento-001.jpg"
    },
    {
        id: 21,
        title: "Celebraciones",
        description: "AlegrÃ­a y emotividad",
        category: "eventos",
        image: "images/Eventos/evento-002-thumb.jpg",
        fullImage: "images/Eventos/evento-002.jpg"
    }
];

// Variables globales
let currentImages = [...galleryData];
let isLoading = false;

// InicializaciÃ³n cuando la pÃ¡gina carga
document.addEventListener('DOMContentLoaded', function() {
    // Ocultar loading screen despuÃ©s de un momento
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

// NavegaciÃ³n mÃ³vil
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar menÃº al hacer click en un link
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

// Inicializar galería de categorías
function initializeGallery() {
    const categoryGrid = document.getElementById('category-grid');

    // Agrupar imágenes por categoría
    const categorizedImages = {};
    galleryData.forEach(image => {
        if (!categorizedImages[image.category]) {
            categorizedImages[image.category] = [];
        }
        categorizedImages[image.category].push(image);
    });

    // Crear tarjetas de categorías
    const categoryCards = Object.keys(categorizedImages).map(category => {
        const images = categorizedImages[category];
        const config = categoryConfig[category];
        const firstImage = images[0];
        
        return `
            <div class="category-card" onclick="openCategoryModal('${category}')" data-category="${category}">
                <img class="category-card-image" src="${firstImage.image}" alt="${config.name}" loading="lazy">
                <div class="category-overlay">
                    <h3 class="category-title">${config.name}</h3>
                    <p class="category-count">${images.length} ${images.length === 1 ? 'imagen' : 'imágenes'}</p>
                </div>
            </div>
        `;
    }).join('');

    categoryGrid.innerHTML = categoryCards;

    // Animación de entrada
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

// Inicializar modal de categoría
function initializeCategoryModal() {
    const modal = document.getElementById('category-modal');
    const closeBtn = document.getElementById('modal-close');
    const prevBtn = document.getElementById('modal-prev');
    const nextBtn = document.getElementById('modal-next');
    const background = document.querySelector('.modal-background');

    // Cerrar modal
    [closeBtn, background].forEach(element => {
        element.addEventListener('click', closeCategoryModal);
    });

    // Navegación
    prevBtn.addEventListener('click', () => navigateModal(-1));
    nextBtn.addEventListener('click', () => navigateModal(1));

    // Cerrar con ESC
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

// Abrir modal de categoría
function openCategoryModal(category) {
    const modal = document.getElementById('category-modal');
    const modalTitle = document.getElementById('modal-title');
    
    currentCategory = category;
    currentCategoryImages = galleryData.filter(img => img.category === category);
    currentImageIndex = 0;
    
    modalTitle.textContent = categoryConfig[category].name;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    updateModalImage();
}

// Cerrar modal de categoría
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
    const modalCounter = document.getElementById('modal-counter');
    
    const currentImage = currentCategoryImages[currentImageIndex];
    
    modalImage.src = currentImage.fullImage;
    modalImage.alt = currentImage.title;
    modalImageTitle.textContent = currentImage.title;
    modalImageDescription.textContent = currentImage.description;
    modalCounter.textContent = `${currentImageIndex + 1} / ${currentCategoryImages.length}`;
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

// Función openModal original (comentada - ahora usamos openCategoryModal)
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
    
    // Configurar la acciÃ³n del formulario para FormSubmit
    form.action = 'https://formsubmit.co/daerbon@gmail.com';
    
    form.addEventListener('submit', (e) => {
        // Cambiar estado del botÃ³n mientras se envÃ­a
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        
        // Mostrar notificaciÃ³n de que se estÃ¡ enviando
        showNotification('Enviando mensaje...', 'info');
        
        // Permitir que el formulario se envÃ­e normalmente a FormSubmit
        // FormSubmit se encargarÃ¡ del redirect automÃ¡ticamente
    });
    
    // Verificar si venimos de un envÃ­o exitoso
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('mensaje') === 'enviado') {
        showNotification('Â¡Mensaje enviado correctamente! Te contactarÃ© pronto.', 'success');
        // Limpiar la URL
        window.history.replaceState({}, document.title, window.location.pathname);
    }
}

// FunciÃ³n para mostrar notificaciones
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
    
    // Estilos para la notificaciÃ³n
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

    // AnimaciÃ³n de entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remover despuÃ©s de 5 segundos
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

// Lazy loading para imÃ¡genes
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

// FunciÃ³n para configurar Cloudinary (llamar cuando tengas tu cuenta)
function configureCloudinary(cloudName, uploadPreset) {
    // Actualizar variables
    window.CLOUDINARY_CLOUD_NAME = cloudName;
    window.CLOUDINARY_UPLOAD_PRESET = uploadPreset;
    
    console.log('Cloudinary configurado:', { cloudName, uploadPreset });
    
    // AquÃ­ podrÃ­as cargar imÃ¡genes dinÃ¡micamente desde Cloudinary
    loadImagesFromCloudinary();
}

// Cargar imÃ¡genes desde Cloudinary (cuando estÃ© configurado)
function loadImagesFromCloudinary() {
    // Ejemplo de cÃ³mo cargar imÃ¡genes desde Cloudinary
    // Esto requiere configurar tu cuenta y subir las imÃ¡genes primero
    
    if (CLOUDINARY_CLOUD_NAME === 'tu-cloud-name') {
        console.log('Configura tu cuenta de Cloudinary para cargar las imÃ¡genes');
        return;
    }
    
    // AquÃ­ implementarÃ­as la lÃ³gica para cargar tus imÃ¡genes reales
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

// Inicializar animaciones cuando el DOM estÃ© listo
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initializeScrollAnimations();
        lazyLoadImages();
    }, 500);
});

// OptimizaciÃ³n del scroll
window.addEventListener('scroll', utils.throttle(() => {
    // AquÃ­ puedes aÃ±adir efectos de parallax o animaciones basadas en scroll
}, 16)); // ~60fps
