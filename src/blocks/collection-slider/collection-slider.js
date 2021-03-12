import { tns } from 'tiny-slider/src/tiny-slider'

const collectionSlider = () => {
    let collectionSliderItem = document.querySelectorAll('.collection-slider__init');
    collectionSliderItem.forEach(index => {
        let collectionSliderNav = index.parentNode.querySelector('.collection-slider__navigation');
        let slider = tns({
            container: index,
            items: 4,
            slideBy: 2,
            gutter: 30,
            nav: false,
            mouseDrag: false,
            speed: 800,
            controls: true,
            navPosition: "bottom",
            controlsContainer: collectionSliderNav,
            responsive: {
                1200: {
                    items: 4,
                    slideBy: 2,
                },
                768: {
                    items: 3,
                    slideBy: 1
                },
                540: {
                    items: 2
                },
                0: {
                    items: 1,
                    slideBy: 1,
                }
            }
        });
    });
}

collectionSlider();