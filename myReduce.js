const addNumber = function (accumulator, currentElement) {
    return accumulator + currentElement;
}

const myReduce = function (array, userFunction, accumulator) {
    for (i = 0; i < array.length; i++) {
        accumulator = userFunction(accumulator, array[i]);
    }
    return accumulator;
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(myReduce(myArray, addNumber, 0));