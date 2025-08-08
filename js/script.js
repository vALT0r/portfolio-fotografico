// Configuración de Cloudinary (reemplaza con tu cloud name)
const CLOUDINARY_CLOUD_NAME = 'daerbon-photography'; // Cambia esto por tu cloud name real cuando lo tengas
const CLOUDINARY_UPLOAD_PRESET = 'daerbon-portfolio'; // Cambia esto por tu upload preset

// Portfolio David Eric Bonucci - Especialidades por orden de experiencia
const galleryData = [
    // ARQUITECTURA - Tu especialidad principal (10 meses experiencia)
    {
        id: 1,
        title: "Arquitectura Colonial Acebal",
        description: "Detalles históricos de mi ciudad natal",
        category: "arquitectura",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=600&fit=crop",
        fullImage: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=1200&fit=crop"
    },
    {
        id: 7,
        title: "Arquitectura Moderna Regional",
        description: "Líneas contemporáneas en Santa Fe",
        category: "arquitectura",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=600&fit=crop",
        fullImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=1200&fit=crop"
    },
    
    // PAISAJES - Especialidad natural para ti
    {
        id: 2,
        title: "Paisajes Pampeanos",
        description: "La belleza cotidiana de los campos santafesinos",
        category: "paisajes",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=600&fit=crop",
        fullImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=1200&fit=crop"
    },
    
    // ASTROFOTOGRAFIA - Tu diferenciador único
    {
        id: 6,
        title: "Cielos Estrellados Rurales",
        description: "Astrofotografía desde el campo santafesino",
        category: "astrofotografia",
        image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=600&fit=crop",
        fullImage: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=1200&fit=crop"
    },
    
    // NATURALEZA - Extensión de paisajes
    {
        id: 4,
        title: "Flora Nativa Pampeana",
        description: "Detalles de la naturaleza regional",
        category: "naturaleza",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop",
        fullImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=1200&fit=crop"
    },
    
    // DEPORTES - Potencial para credenciales
    {
        id: 3,
        title: "Fútbol Regional",
        description: "Acción deportiva en ligas santafesinas",
        category: "deportes",
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=600&fit=crop",
        fullImage: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=1200&fit=crop"
    },
    {
        id: 8,
        title: "Automovilismo Regional",
        description: "Carreras en pistas de Santa Fe",
        category: "deportes",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=600&fit=crop",
        fullImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=1200&fit=crop"
    },
    
    // EVENTOS - Oportunidad comercial
    {
        id: 5,
        title: "Eventos Rurales",
        description: "Celebraciones tradicionales de Acebal",
        category: "eventos",
        image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=600&fit=crop",
        fullImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=1200&fit=crop"
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
    initializeModal();
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

// Inicializar galería
function initializeGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Función para renderizar imágenes
    function renderGallery(images) {
        // Limpiar placeholder si existe
        const placeholder = document.querySelector('.gallery-placeholder');
        if (placeholder) {
            placeholder.remove();
        }

        galleryGrid.innerHTML = images.map(item => `
            <div class="gallery-item" data-category="${item.category}" onclick="openModal(${item.id})">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
                <div class="gallery-overlay">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            </div>
        `).join('');

        // Animación de entrada
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            setTimeout(() => {
                item.style.transition = 'all 0.5s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    // Filtros de galería
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Actualizar botones activos
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');
            
            // Filtrar imágenes
            if (filter === 'all') {
                currentImages = [...galleryData];
            } else {
                currentImages = galleryData.filter(item => item.category === filter);
            }

            renderGallery(currentImages);
        });
    });

    // Renderizar galería inicial (solo si hay datos)
    if (galleryData.length > 0 && CLOUDINARY_CLOUD_NAME !== 'tu-cloud-name') {
        renderGallery(currentImages);
    }
}

// Modal para vista ampliada de imágenes
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

// Abrir modal (función global)
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
