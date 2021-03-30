function filterInitBox() {
    let $filterButton = document.querySelector(".filter-button");


    if ($filterButton) {
        let $filter = $filterButton.nextElementSibling;
        let filterActiveClass = "filter--active";

        $filterButton.addEventListener('click', () => {
            if ($filterButton.classList.contains("filter-button--active")) {
                $filterButton.classList.remove("filter-button--active");
                $filter.classList.remove(filterActiveClass);
            } else {
                $filterButton.classList.add("filter-button--active");
                $filter.classList.add(filterActiveClass);
            }
        });
    }
}

filterInitBox();

function toggleBox() {

    document.addEventListener('click', (e) => {
        let target = e.target;

        if (target.classList.contains("filter__toggle-title") || target.closest(".filter__toggle-title") !== null) {

            let $box = target.closest(".filter__toggle-box");

            if ($box.classList.contains("filter__toggle-box--active")) {
                $box.classList.remove("filter__toggle-box--active");
                $box.classList.remove("filter__toggle-box--effect");
            } else {
                $box.classList.add("filter__toggle-box--active");

                let checkDisplay = setInterval(() => {
                    let computedStyle = window.getComputedStyle($box, null);
                    let displayState = computedStyle.getPropertyValue('display') !== 'none';
                    console.log(computedStyle.getPropertyValue('display'))

                    if (displayState) {
                        $box.classList.add("filter__toggle-box--effect");
                        clearInterval(checkDisplay);
                    }
                }, 1);

                // setTimeout(()=>{
                //     $box.classList.add("filter__toggle-content--effect");
                // },1000)
            }
            // - Как сделать анимацию
            // Строка для коммита




        }
    });
}

toggleBox();