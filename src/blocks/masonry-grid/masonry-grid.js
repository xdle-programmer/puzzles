// Эмулятор
function emulationLoad() {
    let $items = document.querySelectorAll('.content-box');

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    }

    for (let $item of $items) {
        setTimeout(() => {
            let modifier = 'content-box--el' + getRandomInt(1, 5);
            $item.classList.add(modifier);

            window.masonryMainPage.changeItem($item.closest('.masonry-grid__item'));
        }, getRandomInt(0, 20) * 200);
    }
}

emulationLoad();

function masonryGrid(options) {

    /* Example options
        {
            wrapperClass: 'class', // 'className'
            wrapper: document.querySelector(".class") // node,
            itemClass: 'class', // 'className'
            items: document.querySelectorAll('.class'), // HTMLCollections
            columnsCount: number // Number - 4 Columns
            rowGap: 'number', // Offset Row 30
            columnGap: 'number' // Offset Column 30
            responsive: [{
                maxWidth: 1000,
                columnsCount: 3,
            }]
            }
    */

    let wrapperClass = options && options.wrapperClass ? options.wrapperClass : 'masonry-grid';
    let $wrapper = options && options.wrapper ? options.wrapper : document.getElementsByClassName(wrapperClass)[0];
    let itemClass = options && options.itemClass ? options.itemClass : 'masonry-grid__item';
    let $items = options && options.items ? options.items : $wrapper.getElementsByClassName(itemClass);
    let columnsCount = getItemOptions().currentColumnCount;
    let rowGap = getItemOptions().currentRowGap;
    let columnGap = getItemOptions().currentColumnGap;

    this.changeItem = function (item) {
        setColumnItemsPosition(item);
    };

    function getItemOptions() {
        let currentColumnCount;
        let currentRowGap;
        let currentColumnGap;

        currentColumnCount = options && options.columnsCount ? options.columnsCount : 4;
        currentRowGap = options && options.rowGap ? options.rowGap : 0;
        currentColumnGap = options && options.columnGap ? options.columnGap : 0;

        if (options && options.responsive) {
            let responsive = options.responsive;

            responsive.sort(function (a, b) {
                if (a.maxWidth < b.maxWidth) {
                    return 1;
                }
                if (a.maxWidth > b.maxWidth) {
                    return -1;
                }

                return 0;
            });

            for (let responsiveItem of responsive) {
                let maxWidth = responsiveItem.maxWidth;

                if (viewportWidth <= maxWidth) {
                    currentColumnCount = responsiveItem.columnsCount;
                    currentRowGap = responsiveItem.rowGap;
                    currentColumnGap = responsiveItem.columnGap;
                }
            }
        }

        return {
            currentColumnCount: currentColumnCount,
            currentRowGap: currentRowGap,
            currentColumnGap: currentColumnGap
        };
    }

    function setAllItemsPosition(onlyVertical) {
        let setLeft = true;
        let wrapperWidth = $wrapper.offsetWidth;
        let rowGapSum = rowGap * (columnsCount - 1);
        let itemWidth = (wrapperWidth - rowGapSum) / columnsCount;
        let leftPositions = [0];
        let columnsHeight = [0];

        if (onlyVertical && onlyVertical === true) {
            setLeft = false;
        }

        for (let i = 1; i < columnsCount; i++) {
            let left = (itemWidth + rowGap) * i;
            leftPositions.push(left);
            columnsHeight.push(0);
        }

        let currentColumn = 0;
        let currentRow = 0;

        for (let i = 0; i < $items.length; i++) {
            if (currentColumn === columnsCount) {
                currentColumn = 0;
                currentRow++;
            }

            $items[i].style.transform = 'translateY(' + columnsHeight[currentColumn] + 'px)';

            if (setLeft) {
                $items[i].style.left = leftPositions[currentColumn] + 'px';
                $items[i].style.width = itemWidth + 'px';
            }

            let itemTop = $items[i].offsetHeight + columnGap;
            columnsHeight[currentColumn] += itemTop;
            currentColumn++;
        }

        let wrapperHeight = Math.max(null, ...columnsHeight) + "px";

        if ($items.length > columnsCount) {
            wrapperHeight = (Math.max(null, ...columnsHeight) - columnGap) + "px";
        }

        $wrapper.style.height = wrapperHeight;
    }

    setAllItemsPosition();

    function setColumnItemsPosition(item) {
        // console.log(item);

        let promise = new Promise(function(resolve, reject) {
            setTimeout(() => {
                resolve(item);
            }, 1000);
        });

        promise
        .then(
            (data) => {
                // console.log(data)
                return data;
            },
            (error) => {console.log("Error: " + error.message)},
        )
        .then((dataInfo) => {
            // for(let key in dataInfo) {
            //     console.log(key)
            // }
            console.log(dataInfo)
            setAllItemsPosition();
        })
    }

    // 4. Пишем метод для пересчета колонки при изменении (прописываем блокер для пересчета)



    // 5. Вешаем событие на ресайз для пересчета


}

window.masonryMainPage = new masonryGrid({
    responsive: [
        {
            maxWidth: 1400,
            columnsCount: 3,
            rowGap: 30,
            columnGap: 40
        }, {
            maxWidth: 1000,
            columnsCount: 2,
            rowGap: 20,
            columnGap: 10
        }]
});