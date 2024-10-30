(function() {
    const sliders = Array.from(document.querySelectorAll('.testimony__body'));
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let currentIndex = 0;

    if (buttonNext && buttonBefore && sliders.length) {
        const updateSlider = () => {
            sliders.forEach((slider, index) => {
                slider.classList.toggle('testimony__body--show', index === currentIndex);
            });
        };

        buttonNext.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % sliders.length;
            updateSlider();
        });

        buttonBefore.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + sliders.length) % sliders.length;
            updateSlider();
        });

        updateSlider();  // Inicializa el slider para mostrar el primer slide
    } else {
        console.error('Elementos no encontrados en el DOM para el carrusel de testimonios.');
    }
})();
