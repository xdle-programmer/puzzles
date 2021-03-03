const tabs = (tabList, tabListItems, tabContentItems, activeClassItem, activeTabClassItem) => {
    const tabListContainer = document.querySelector(tabList),
        tabItems = document.querySelectorAll(tabListItems),
        tabContents = document.querySelectorAll(tabContentItems);

    function hideTabContent() {
        tabContents.forEach(item => {
            // item.style.display = "none";
            item.classList.remove(activeTabClassItem);
            item.querySelector('.tabs__main-item-wrapper').classList.remove('tabs__main-item-wrapper--active');
        });

        tabItems.forEach(item => {
            item.classList.remove(activeClassItem);
        });
    }

    function showTabContent(index = 0) {
        // tabContents[index].style.display = "block";
        tabItems[index].classList.add(activeClassItem);
        tabContents[index].classList.add(activeTabClassItem);

        setTimeout(() => {
            tabContents[index].querySelector('.tabs__main-item-wrapper').classList.add('tabs__main-item-wrapper--active');
        })


        // let opacity = 0.01;
        // let timer = setInterval(function () {
        //     if (opacity >= 1) {
        //         clearInterval(timer);
        //     }
        //     tabContents[index].style.opacity = opacity;
        //     opacity += opacity * 0.1;
        // }, 5);
    }

    hideTabContent();
    showTabContent();

    tabListContainer.addEventListener('click', e => {
        const target = e.target;

        let removeDot = tabListItems.replace(/\./, "");

        let $wrapper = false;

        if (target.classList.contains(removeDot)) {
            $wrapper = target;
        } else if (target.closest(tabListItems) !== null) {
            $wrapper = target.closest(tabListItems);
        }

        if ($wrapper && !$wrapper.classList.contains(activeClassItem)) {
            tabItems.forEach((item, i) => {
                if ($wrapper == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

};

tabs('.tabs__list', '.tabs__list-item', '.tabs__main-item', 'tabs__list-item--active', 'tabs__main-item--active');