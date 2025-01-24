// flattens an array with any number of nested arrays
const customFlatten = function (array) {
    let flattenedArray = [];
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            flattenedArray = flattenedArray.concat(customFlatten(array[i]));
        } else {
            flattenedArray.push(array[i]);
        }
    }
    return flattenedArray;
}

const customJoin = function (array, separator = ",", limit) {

    // return empty string if array is empty
    if (array.length === 0) {
        return "";
    }
    // Flatten the Array before creating the string
    const flattenedArray = customFlatten(array);

    if (flattenedArray.length === 0) {
        return "";
    }

    if (flattenedArray.length === 1) {
        let newString = flattenedArray[0].toString();
        return newString;
    }

    // set limit based on input
    limit = limit ?? flattenedArray.length;

    // if limit provided is bigger than the provided array's length, make limit equal to the array's length
    if (limit > flattenedArray.length) {
        limit = flattenedArray.length;
    }

    // Join the array elements with the separator in between each element
    let joinedString = "";

    for (let i = 0; i < limit; i++) {
        joinedString += flattenedArray[i];
        if (i !== limit - 1) {
            joinedString += separator;
        } else {
            return joinedString;
        }
    }
} 

console.log(customJoin([[], [[[]]]], ",")); // Output: "" (handles deeply nested empty arrays)
console.log(customJoin([1], ",", 5)); // Output: "1" (handles single element with a limit)
console.log(customJoin([[1, 2], 3], "-", 10)); // Output: "1-2-3" (handles limit greater than array length)
console.log(customJoin([1, [2, [3, [4]]]], " ")); // Output: "1 2 3 4"