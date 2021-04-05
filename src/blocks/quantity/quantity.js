quantity();

function quantity() {
    let quantityWrapper = document.querySelector(".quantity");

    if (quantityWrapper) {
        quantityListener();
    }

    function quantityListener() {
        document.addEventListener("click", (e) => {
            let target = e.target;
            let targetParent = target.closest(".quantity")

            if (target === targetParent || targetParent !== null) {
                let currentValue = parseInt(targetParent.querySelector(".quantity__input").value);


                if (target === targetParent.querySelector(".quantity__plus")) {
                    currentValue += 1;
                    targetParent.querySelector(".quantity__input").value = currentValue;
                } else if (target === targetParent.querySelector(".quantity__minus")) {
                    if (currentValue) {
                        currentValue -= 1;
                        targetParent.querySelector(".quantity__input").value = currentValue;
                    }
                }
            }

        })
    }

}