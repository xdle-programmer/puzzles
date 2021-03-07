function gridAutoPosition(options) {

    /* ======================== /
    /* = Example ============== /
    {
        gridLayoutClass: 'class', // 'className'
        $gridLayoutWrapper: document.querySelector(".class") // node,
        gridElementsClass: 'class', // 'className'
        $gridElementsWrapper: document.querySelectorAll('.class'), // HTMLCollections
        columns: number // Number - 4 Columns
        rowGap: 'number', // Offset Row 30
        columnGap: 'number' // Offset Column 30

        responsive: [{
            columns: 3,
        }]

    }
    / =======================*/

    let gridLayoutClass = options && options.gridLayoutClass ? options.gridLayoutClass : 'grids';
    let $gridLayoutWrapper = options && options.$gridLayoutWrapper ? options.$gridLayoutWrapper : document.getElementsByClassName(gridLayoutClass)[0];
    let gridElementsClass = options && options.gridElementsClass ? options.gridElementsClass : 'grids__item';
    let $gridElementsWrapper = options && options.$gridElementsWrapper ? options.$gridElementsWrapper : $gridLayoutWrapper.getElementsByClassName(gridElementsClass);

    let columns = options && options.columns ? options.columns : 4;

    let responsive = options && options.responsive;
    // console.log(options.responsive[0])

    let renderPositionTop;
    let renderPositionLeft;

    // console.log(gridLayoutClass)
    // console.log($gridLayoutWrapper)
    // console.log(gridElementsClass)
    // console.log($gridElementsWrapper)
    // console.log("-------------------")

    let gridHeight = [];
    let gridHeightCount = 0;

    for(let k = 0; k < columns; k++) {
        for(let l = k; l < $gridElementsWrapper.length; l+=columns) {
            gridHeightCount += $gridElementsWrapper[l].offsetHeight;
        }
        gridHeight.push(gridHeightCount)
        gridHeightCount = 0;
        $gridLayoutWrapper.style.height = Math.max(null, ...gridHeight) + "px";

    }

    for (let row = 0; row < $gridElementsWrapper.length; row++) {
        $gridElementsWrapper[row].style.width = $gridLayoutWrapper.offsetWidth / columns + "px";
    }

    for (let i = 1; i < $gridElementsWrapper.length; i++) {
        // $gridElementsWrapper[i].style.width = (100 / columns) + '%';
        // $gridElementsWrapper[i].style.width = $gridLayoutWrapper.offsetWidth / columns + "px";
        if (i % columns === 0) {
            renderPositionTop = ($gridElementsWrapper[i - columns].offsetTop + $gridElementsWrapper[i - columns].offsetHeight);
            $gridElementsWrapper[i].style.top = renderPositionTop + 'px';
        } else {
            if ($gridElementsWrapper[i - columns]) {
                renderPositionTop = ($gridElementsWrapper[i - columns].offsetTop + $gridElementsWrapper[i - columns].offsetHeight);
                $gridElementsWrapper[i].style.top = renderPositionTop + 'px';
            }
            renderPositionLeft = ($gridElementsWrapper[i - 1].offsetLeft + $gridElementsWrapper[i - 1].offsetWidth);
            $gridElementsWrapper[i].style.left = renderPositionLeft + 'px';
        }
    }

    window.addEventListener('resize', gridAutoPosition);

}


// gridAutoPosition();
// gridAutoPosition({
//     gridLayoutClass: "grids-567567",
//     gridElementsClass: "grids__dfgdfb",
// });

// window.addEventListener('DOMContentLoaded', gridAutoPosition({
//     columns: 6,
//     responsive: [
//         {
//             breakpoint: 768,
//             columns: 3,
//         }
//     ]
// }));
window.addEventListener('DOMContentLoaded', gridAutoPosition);
// window.addEventListener('resize', gridAutoPosition);