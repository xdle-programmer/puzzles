function mobileMenu() {

    let $burgerButton = document.querySelector('.burger-menu');
    let burgerButtonActive = 'burger-menu--active';
    let $wrapperMenu = document.querySelector('.mobile-menu');
    let wrapperMenuActive = 'mobile-menu--active';

    $burgerButton.addEventListener('click', () => {
        $burgerButton.classList.toggle(burgerButtonActive);
        $wrapperMenu.classList.toggle(wrapperMenuActive)
    });
}
mobileMenu();