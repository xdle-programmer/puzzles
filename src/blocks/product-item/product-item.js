import { tns } from 'tiny-slider/src/tiny-slider'

const sliderProduct = () => {
    let productItem = document.querySelectorAll('.product-item__slider');
    productItem.forEach(index => {
        let productItemNav = index.parentNode.querySelector('.product-item__slider-navigate');
        let slider = tns({
            container: index,
            items: 1,
            slideBy: 'page',
            nav: true,
            mouseDrag: true,
            speed: 400,
            controls: true,
            navPosition: "bottom",
            // mode: 'gallery',
            // animateIn: "fadeIn",
            // animateOut: "fadeOut",
            // animateNormal: "tns-fadeOut",
            controlsContainer: productItemNav
        });
    });
}

sliderProduct();