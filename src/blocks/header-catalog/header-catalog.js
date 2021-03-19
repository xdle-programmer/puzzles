function openCatalogDesktop() {
    let $catalogButton = document.querySelector('.catalog-button');
    let catalogButtonActive = 'catalog-button--active';
    let $catalogDesktop = document.querySelector('.header-catalog');
    let catalogDesktopActive = 'header-catalog--active';

    $catalogButton.addEventListener('click', () => {
        $catalogButton.classList.toggle(catalogButtonActive);
        $catalogDesktop.classList.toggle(catalogDesktopActive);
    });
}
openCatalogDesktop();