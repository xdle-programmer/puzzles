export function FunctionFromSelectorInit (selector, functionTarget) {
    let map = new Map()

    let functionArray = Array.from(document.querySelectorAll(selector));

    for (const functionItem of functionArray) {
        if (functionItem.id !== '') {
            map.set(functionItem.id, new functionTarget(functionItem));
        } else {
            map.set(functionArray.indexOf(functionItem), new functionTarget(functionItem));
        }
    }

    return map;
}


