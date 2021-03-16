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
    let $items = Array.from(options && options.items ? options.items : $wrapper.getElementsByClassName(itemClass));
    let itemsArray = Array.from($items);
    let columnsCount = getItemOptions().currentColumnCount;
    let rowGap = getItemOptions().currentRowGap;
    let columnGap = getItemOptions().currentColumnGap;
    let changeItemsQueue = [];
    let columnsHeight = [];

    this.changeItem = (item) => {
        changeItemsQueue.push(item);
    };

    this.refresh = () => {
        setAllItemsPosition();
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

    function setAllItemsPosition() {
        setLeftPosition();

        for (let index = 0; index < columnsCount; index++) {
            columnsHeight.push(0);
            setColumnPosition(index);
        }
    }

    function setLeftPosition() {
        let wrapperWidth = $wrapper.offsetWidth;
        let rowGapSum = rowGap * (columnsCount - 1);
        let itemWidth = (wrapperWidth - rowGapSum) / columnsCount;
        let leftPositions = [];

        for (let i = 0; i < columnsCount; i++) {
            let left = (itemWidth + rowGap) * i;
            leftPositions.push(left);
        }

        let currentColumn = 0;
        let currentRow = 0;

        for (let i = 0; i < $items.length; i++) {
            if (currentColumn === columnsCount) {
                currentColumn = 0;
                currentRow++;
            }

            $items[i].style.left = leftPositions[currentColumn] + 'px';
            $items[i].style.width = itemWidth + 'px';

            currentColumn++;
        }
    }

    function setColumnPosition(numberColumn) {
        let currentColumn = 0;
        columnsHeight[numberColumn] = 0;

        for (let i = numberColumn; i < $items.length; i += columnsCount) {
            $items[i].style.transform = 'translateY(' + columnsHeight[numberColumn] + 'px)';
            let itemTop = $items[i].offsetHeight + columnGap;
            columnsHeight[numberColumn] += itemTop;
            currentColumn++;
        }

        setWrapperHeight();
    }

    function setWrapperHeight() {
        let wrapperHeight = Math.max(null, ...columnsHeight) + "px";

        if ($items.length > columnsCount) {
            wrapperHeight = (Math.max(null, ...columnsHeight) - columnGap) + "px";
        }

        $wrapper.style.height = wrapperHeight;
    }

    function setQueueItemsPositions() {
        if (changeItemsQueue.length > 0) {
            let item = changeItemsQueue[0];
            let itemIndex = itemsArray.indexOf(item);
            changeItemsQueue.shift();

            let currentColumn = (itemIndex + 1) % columnsCount - 1;

            if (currentColumn === -1) {
                currentColumn = columnsCount - 1;
            }

            setColumnPosition(currentColumn);

            setQueueItemsPositions();
        } else {
            setTimeout(() => {
                setQueueItemsPositions();
            }, 100);
        }
    }

    setAllItemsPosition();

    setQueueItemsPositions();

    window.addEventListener('resize', () => {
        columnsCount = getItemOptions().currentColumnCount;
        rowGap = getItemOptions().currentRowGap;
        columnGap = getItemOptions().currentColumnGap;

        setAllItemsPosition();
    });

    $wrapper.addEventListener('itemHeightChange', (event) => {
        changeItemsQueue.push(event.item);
    });
    $wrapper.addEventListener('itemStateChange', (event) => {
        columnsCount = getItemOptions().currentColumnCount;
        rowGap = getItemOptions().currentRowGap;
        columnGap = getItemOptions().currentColumnGap;

        setAllItemsPosition();
    });

}

window.masonryFunctionsArray = new Map();

const masonryWrappersArray = Array.from(document.querySelectorAll('.masonry-grid'));

for (const $masonryWrapper of masonryWrappersArray) {

    let options = {
        columnsCount: 4,
        wrapper: $masonryWrapper,
        rowGap: 40,
        columnGap: 50,
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
    };

    if ($masonryWrapper.id !== '') {
        window.masonryFunctionsArray.set($masonryWrapper.id, new masonryGrid(options));
    } else {
        window.masonryFunctionsArray.set(masonryWrappersArray.indexOf($masonryWrapper), new masonryGrid(options));
    }
}
