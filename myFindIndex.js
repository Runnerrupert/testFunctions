const isZero = function (input) {
    return input === 0;
}

const myFindIndex = function (array, userFunction) {
    for (let i = 0; i < array.length; i++) {
        if (userFunction(array[i])) {
            return i;
        }
    }
    return -1;
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 0];

const answer = myFindIndex(myArray, num => num === 0);
console.log(answer);