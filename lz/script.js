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
    const portfolioBtn = document.querySelector('.portfolio-btn');
    if (portfolioBtn) {
        portfolioBtn.addEventListener('click', function() {
            trackClick('Landing Zone', 'click', 'Portfolio');
        });
    }

    // Rastrear clic en Instagram
    const instagramBtn = document.querySelector('.instagram-btn');
    if (instagramBtn) {
        instagramBtn.addEventListener('click', function() {
            trackClick('Landing Zone', 'click', 'Instagram');
        });
    }
});

// Función para mejorar la accesibilidad
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('btn')) {
            e.preventDefault();
            focusedElement.click();
        }
    }
});
