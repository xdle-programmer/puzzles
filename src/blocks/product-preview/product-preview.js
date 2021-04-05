import {tns} from 'tiny-slider/src/tiny-slider'

function slidePreview() {
    let $sliderPreviewWrapper = document.querySelector('.product-preview__thumbnails');
    let $sliderPreviewMainImage = document.getElementById('product-preview__main-image');

    if ($sliderPreviewWrapper) {
        initSliderProduct();
        toggleSlide();
    }

    function initSliderProduct() {
        let prevSlide = document.querySelector('.product-preview__thumbnails-arrow--prev')
        let nextSlide = document.querySelector('.product-preview__thumbnails-arrow--next')
        let slider = tns({
            container: ".product-preview__thumbnails",
            loop: true,
            items: 6,
            slideBy: 1,
            nav: false,
            mouseDrag: true,
            gutter: 10,
            autoplayButtonOutput: false,
            speed: 500,
            controls: false,
            // controlsContainer: ".product-preview__thumbnails-arrows"
            responsive: {
                640: {
                    items: 6
                },
                414: {
                    items: 3
                },
                0: {
                    items: 2,
                    gutter: 0,
                }
            }
        });
        slider.events.on('indexChanged', sliderGetEvents);
        prevSlide.onclick = () => {
            slider.goTo('prev');
        }
        nextSlide.onclick = () => {
            slider.goTo('next');
        }
    }


    function toggleSlide() {
        function setDataAttrImage(url) {
            $sliderPreviewMainImage.setAttribute("src", url);
        }

        function sliderGetEvents(info) {
            let currentImage = $sliderPreviewWrapper.children[info.index].querySelector('.product-preview__thumbnail-image');
            setDataAttrImage(currentImage.getAttribute('data-preview'))
        }

        $sliderPreviewWrapper.addEventListener('click', (e) => {
            let target = e.target;
            if (target.classList.contains('product-preview__thumbnail-image')) {
                setDataAttrImage(target.getAttribute('data-preview'));
            }
        });
    }

}

slidePreview();