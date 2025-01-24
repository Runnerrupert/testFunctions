const customFlatten = function (array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            newArray = newArray.concat(customFlatten(array[i]));
        } else {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(customFlatten([1, 2, 3, [4, 5, 6, [7, 8, 9]]]))