(function() {
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    if (openButton && menu && closeMenu) {
        openButton.addEventListener('click', () => {
            menu.classList.add('nav__link--show');
        });

        closeMenu.addEventListener('click', () => {
            menu.classList.remove('nav__link--show');
        });
    } else {
        console.error('Elementos no encontrados en el DOM para el menú.');
    }
})();
