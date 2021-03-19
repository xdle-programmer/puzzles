function filterInitBox() {
    let $filterButton = document.querySelector(".filter-button");


    if($filterButton) {
        let $filter = $filterButton.nextElementSibling;
        let filterActiveClass = "filter--active";

        $filterButton.addEventListener('click', () => {
            if($filterButton.classList.contains("filter-button--active")) {
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

        if(target.classList.contains("filter__toggle-title") || target.closest(".filter__toggle-title") !== null) {

            console.log(target.closest(".filter__toggle-box").classList.contains("filter__toggle-box--active"))

            if(target.closest(".filter__toggle-box").classList.contains("filter__toggle-box--active")) {
                target.closest(".filter__toggle-box").classList.remove("filter__toggle-box--active");
            } else {
                target.closest(".filter__toggle-box").classList.add("filter__toggle-box--active");
            }

            // - Как сделать анимацию
            // Строка для коммита

            // let checkDisplay = setInterval(() => {
            //     let computedStyle = window.getComputedStyle($toggleContent, null);
            //     let displayState = computedStyle.getPropertyValue('display') !== 'none';
            //     console.log(displayState)
            //     if (displayState) {
            //         $toggleContent.classList.add("filter__toggle-content--active");
            //         clearInterval(checkDisplay);
            //     }
            // }, 1);

        }
    })
}
toggleBox();