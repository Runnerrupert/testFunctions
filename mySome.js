const isZero = function (input) {
    return input === 0;
}

const mySome = function (array, userFunction) {
    for (let i = 0; i < array.length; i++) {
        if (userFunction(array[i])) {
            return true;
        }
    }
    return false;
}

const myArray = [1, 2, 3, 4, 5, 6, 7];

const answer = mySome(myArray, isZero);
console.log(answer);