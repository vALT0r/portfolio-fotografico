// Función para rastrear clics en Google Analytics
function trackClick(category, action, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }
}

// Event listeners para rastrear clics
document.addEventListener('DOMContentLoaded', function() {
    // Rastrear clic en portfolio
    const portfolioCard = document.querySelector('.portfolio-card');
    if (portfolioCard) {
        portfolioCard.addEventListener('click', function() {
            trackClick('Landing Zone', 'click', 'Portfolio');
        });
    }

    // Rastrear clic en Instagram
    const instagramCard = document.querySelector('.instagram-card');
    if (instagramCard) {
        instagramCard.addEventListener('click', function() {
            trackClick('Landing Zone', 'click', 'Instagram');
        });
    }

    // Añadir efecto de hover mejorado
    const cards = document.querySelectorAll('.option-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Precargar el favicon del portfolio
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = '../favicon.svg';
    document.head.appendChild(link);
});

// Función para mejorar la accesibilidad
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('option-card')) {
            e.preventDefault();
            focusedElement.click();
        }
    }
});

// Añadir soporte para gestos táctiles en móviles
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', function(e) {
    touchEndY = e.changedTouches[0].screenY;
    // Aquí podrías añadir lógica para gestos si lo necesitas
});
