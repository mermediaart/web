//trabajos recomendados
document.addEventListener('DOMContentLoaded', function () {
    fetch('index.html')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const portfolioItems = doc.querySelectorAll('#portfolio .portfolio-item');

            const swiperWrapper = document.querySelector('.swiper-wrapper');

            portfolioItems.forEach(item => {
                const clone = item.cloneNode(true);
                clone.classList.add('swiper-slide'); // Clase Swiper para los slides
                swiperWrapper.appendChild(clone);
            });

            // Initialize Swiper
            const swiper = new Swiper('.swiper-container', {
                slidesPerView: 3,
                spaceBetween: 20,
                loop: true,
                autoplay: {
                    delay: 5000,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });

            // Reinitialize Lightbox after adding content
            const lightbox = GLightbox(); // Reinitialize Lightbox
        })
        .catch(error => console.error('Error loading portfolio items:', error));
});
