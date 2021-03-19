import noUiSlider from 'nouislider';

let sliderRangeName = 'range-slider';
let $sliderRange = document.querySelectorAll("." + sliderRangeName);

if($sliderRange) {
    initSliderRange();
}

function initSliderRange() {

    for(let i = 0; i < $sliderRange.length; i++) {
        let $sliderRangeValues = [
            $sliderRange[i].previousElementSibling.querySelector('.range-slider__quantity--min'),
            $sliderRange[i].previousElementSibling.querySelector('.range-slider__quantity--max')
        ];

        noUiSlider.create($sliderRange[i], {
            start: [30, 1200],
            connect: true,
            range: {
                'min': [30],
                'max': [1200]
            },
        });

        $sliderRange[i].noUiSlider.on('update', function (values, handle) {
            let valueParseInt = parseInt(values[handle]);
            $sliderRangeValues[handle].innerHTML = valueParseInt;
        });
    }
}