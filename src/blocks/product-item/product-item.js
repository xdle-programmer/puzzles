import {tns} from 'tiny-slider/src/tiny-slider';

const sliderProduct = () => {
    let $productItem = document.querySelectorAll('.product-item__slider');

    let eventInit = new Event('itemHeightChange');

    $productItem.forEach(index => {
        let $productItemNav = index.parentNode.querySelector('.product-item__slider-navigate');

        let slider = tns({
            container: index,
            items: 1,
            slideBy: 'page',
            nav: true,
            mouseDrag: true,
            speed: 400,
            controls: true,
            navPosition: "bottom",
            onInit: (event) => {
                if (event.container.closest('.masonry-grid')) {
                    let $masonry = event.container.closest('.masonry-grid');
                    eventInit.item = event.container.closest('.masonry-grid__item');
                    $masonry.dispatchEvent(eventInit);
                }
            },
            // mode: 'gallery',
            // animateIn: "fadeIn",
            // animateOut: "fadeOut",
            // animateNormal: "tns-fadeOut",
            controlsContainer: $productItemNav
        });
    });
};

sliderProduct();