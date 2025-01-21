const myFlatten = function (array, arrayTwo) {
    console.log(array.concat(arrayTwo));
}

myFlatten([1, 2, 3], [4, 5, 6]);


const myConcat = function (array, arrayTwo) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i]);
    }
    for (let i = 0; i < arrayTwo.length; i++) {
        newArray.push(arrayTwo[i]);
    }
    console.log(newArray);
}

myConcat([1, 2, 3], [4, 5, 6]);