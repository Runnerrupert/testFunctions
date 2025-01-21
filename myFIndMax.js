const myFindMax = function (array) {
    if (array.length === 0) {
        return undefined;
    }
    let largestNum = array[0];
    for (let i = 1; i < array.length; i++) {
        if (largestNum < array[i]) {
            largestNum = array[i];
        }
    }
    return largestNum;
}

console.log(myFindMax([1]));