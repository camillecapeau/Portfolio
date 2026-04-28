document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. FILTRES DES PROJETS ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                // Animation de sortie
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';

                setTimeout(() => {
                    if (filterValue === 'all' || card.classList.contains(filterValue)) {
                        card.style.display = 'flex';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        card.style.display = 'none';
                    }
                }, 300);
            });
        });
    });

    // --- 2. LIGHTBOX ---
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxIframe = document.getElementById('lightbox-iframe');
    const closeBtn = document.querySelector('.close-btn');
    const triggers = document.querySelectorAll('.lightbox-trigger');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const url = trigger.getAttribute('href');
            
            // Réinitialisation
            lightboxImage.style.display = 'none';
            lightboxIframe.style.display = 'none';
            lightboxIframe.src = "";

            if (url.toLowerCase().endsWith('.pdf')) {
                lightboxIframe.src = url;
                lightboxIframe.style.display = 'block';
            } else {
                lightboxImage.src = url;
                lightboxImage.style.display = 'block';
            }
            
            lightboxOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Empêche le scroll
        });
    });

    const closeLightbox = () => { 
        lightboxOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
        setTimeout(() => {
            lightboxIframe.src = "";
            lightboxImage.src = "";
        }, 300);
    };

    if(closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if(lightboxOverlay) {
        lightboxOverlay.addEventListener('click', (e) => {
            if (e.target === lightboxOverlay) closeLightbox();
        });
    }

    // --- 3. MODAL LOGO SPES ---
    const modalLogo = document.getElementById('modal-logo');
    const btnTrigger = document.getElementById('trigger-logo-spes');
    const spanClose = document.querySelector(".close-custom-modal");

    if(btnTrigger) {
        btnTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            modalLogo.style.display = "flex";
        });
    }

    if(spanClose) {
        spanClose.addEventListener('click', () => {
            modalLogo.style.display = "none";
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modalLogo) {
            modalLogo.style.display = "none";
        }
    });

    // --- 4. SCROLL FLUIDE ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});