function openCatalogDesktop() {
    let $catalogButton = document.querySelector('.catalog-button');
    let catalogButtonActive = 'catalog-button--active';
    let $catalogDesktop = document.querySelector('.catalog-header');
    let catalogDesktopActive = 'catalog-header--active';

    $catalogButton.addEventListener('click', () => {
        $catalogButton.classList.toggle(catalogButtonActive);
        $catalogDesktop.classList.toggle(catalogDesktopActive);
    });
}
openCatalogDesktop();