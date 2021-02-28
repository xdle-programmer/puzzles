function subMenu() {
    let $subMenuItems = document.querySelectorAll('.mobile-menu__sub-link');
    let subMenuActive = 'mobile-menu__sub-menu--active';
    let $subMenuBack = document.querySelectorAll('.mobile-menu__sub-back');


    for(let subLinksBack of $subMenuBack) {
        subLinksBack.addEventListener('click', (event) => {
            let target = event.target;
            let subMenu = target.parentElement;
            subMenu.classList.remove(subMenuActive);
        });
    }

    for(let subLinks of $subMenuItems) {
        subLinks.addEventListener('click', (event) => {
            let target = event.target;
            let subMenu = target.nextElementSibling;
            subMenu.classList.add(subMenuActive);
        });

    }

}
subMenu();