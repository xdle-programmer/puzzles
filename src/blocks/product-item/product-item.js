import { tns } from 'tiny-slider/src/tiny-slider'

let slider = tns({
    container: '.product-item__slider',
    items: 1,
    slideBy: 'page',
    nav: false,
    mouseDrag: true,
    speed: 400,
    controls: true,
    navPosition: "bottom",
    controlsContainer: ".product-item__slider-navigate"
    // navContainer: ".product-item__slider-navigate"
});