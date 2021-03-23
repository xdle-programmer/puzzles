import { tns } from 'tiny-slider/src/tiny-slider'

let sliderProduct = document.querySelector('.product-slider');
if(sliderProduct){
    initSliderProduct();
    console.log(159)
}
function initSliderProduct() {
    let slider = tns({
        container: sliderProduct,
        items: 1,
        controlsContainer: ".product-slider__thumbnails-arrow",
        navContainer: ".product-slider__thumbnails",
        navAsThumbnails: true,
        // autoplayButton: "#customize-toggle",
        // swipeAngle: false,
        speed: 400
        // slideBy: 'page',
        // nav: true,
        // mouseDrag: true,
        // // autoplay: true,
        // autoplayButtonOutput: false,
        // speed: 500,
        // controls: false,
        // navPosition: "bottom",
        // navContainer: ".product-slider__thumbnails",
        // controlsContainer: ".product-slider__thumbnails-arrow",
        // navAsThumbnails: true,
    });

    // let slider2 = tns({
    //     container: ".product-slider__thumbnails",
    //     items: 3,
    //     slideBy: 'page',
    //     nav: true,
    //     mouseDrag: false,
    //     gutter: 10,
    //     // autoplay: true,
    //     autoplayButtonOutput: false,
    //     speed: 500,
    //     controls: false,
    //     // navPosition: "bottom",
    //     navContainer: ".product-slider__thumbnails-arrow"
    // });
}