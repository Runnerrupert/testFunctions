const equalsZero = function(input) {
    if (input === 0) {
        return true;
    }
    return false;
}

const myFilter = function(array, testFunction) {
    const newArray = [];
    let count = 0;
    for (i = 0; i < array.length; i++) {
        if (testFunction(array[i])) {
            newArray[count] = array[i];
            count++;
        }
    }
    return newArray;
}

const myArray = [1, 2, 3, 4, 0, 1, 0, 2, 0]
const filteredArray = myFilter(myArray, equalsZero);
console.log(filteredArray);

export default myFilter;
