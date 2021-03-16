import { tns } from 'tiny-slider/src/tiny-slider'

let slider = tns({
    container: '.slider-main',
    items: 1,
    slideBy: 'page',
    nav: true,
    mouseDrag: true,
    autoplay: true,
    autoplayButtonOutput: false,
    speed: 500,
    controls: false,
    navPosition: "bottom",
    navContainer: ".slider-main__controls-wrapper"
});