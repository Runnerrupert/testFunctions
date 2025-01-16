// const mergeArrays = function(firstArray, secondArray) {
//     newArray = [];
//     for (i = 0; i < firstArray.length; i++) {
//         newArray[i] = firstArray[i];
//     }
//     for (i = 0; i < secondArray.length; i++) {
//         newArray[i + firstArray.length] = secondArray[i];
//     }
//     return newArray;
// }

// const evenNewerArray = mergeArrays([1, 2, 3], [4, 5, 6]);
// console.log(evenNewerArray);

const addOne = function (number) {
    return number + 1;
}


const myMap = function (array, userFunction) {
    newArray = [];
    for (i = 0; i < array.length; i++) {
        newArray[i] = userFunction(array[i]);
    }
    return newArray;
}

const myArray = [1, 2, 3, 4, 5];

const output = myMap(myArray, addOne);
console.log(output);