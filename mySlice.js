const mySlice = function (array, start = 0, end = array.length) {
    let newArray = [];
    
    if (array.length < 1) return array;

    if (start < 0) start = array.length + start;
    if (end < 0) end = array.length + end;

    start = Math.max(start, 0);
    end = Math.min(end, array.length);

    if (start >= end) return newArray;

    for (let i = start; i < end; i++) {
        newArray.push(array[i])
    }

    return newArray;
}

const myArray = [1, 2, 3, 4, 5];

console.log(mySlice(myArray, 1, 4)); // [2, 3, 4]
console.log(mySlice(myArray)); // [1, 2, 3, 4, 5]
console.log(mySlice(myArray, -3, -1)); // [3, 4]
console.log(mySlice(myArray, -2, -2)); // []
console.log(mySlice(myArray, 2)); // [3, 4, 5]
console.log(mySlice(myArray, 2, -1)); // [3, 4]
console.log(mySlice(myArray, 6, 8));
console.log(myArray); // [1, 2, 3, 4, 5] (original array should remain unchanged)