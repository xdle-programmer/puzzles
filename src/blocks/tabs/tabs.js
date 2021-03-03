const tabs = (tabList, tabListItems, tabContentItems, activeClassItem) => {
    const   tabListContainer = document.querySelector(tabList),
            tabItems = document.querySelectorAll(tabListItems),
            tabContents = document.querySelectorAll(tabContentItems);

    function hideTabContent() {
        tabContents.forEach(item => {
            item.style.display = "none";
        });

        tabItems.forEach(item => {
            item.classList.remove(activeClassItem);
        });
    }

    function showTabContent(index = 0) {
        tabContents[index].style.display = "block";
        tabItems[index].classList.add(activeClassItem);
        let opacity = 0.01;
        let timer = setInterval(function() {
            if(opacity >= 1) {
                clearInterval(timer);
            }
            tabContents[index].style.opacity = opacity;
            opacity += opacity * 0.1;
        }, 5);
    }

    hideTabContent();
    showTabContent();

    tabListContainer.addEventListener('click', e => {
        const target = e.target;
        let removeDot = tabListItems.replace(/\./, "");
        if (target && target.classList.contains(removeDot) || target.parentNode.classList.contains(removeDot)) {
            tabItems.forEach((item, i) => {
                if(target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

}

tabs('.tabs__list', '.tabs__list-item', '.tabs__main-item', 'tabs__list-item--active');