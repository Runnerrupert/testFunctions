const isZero = function (input) {
    return input === 0;
}

const myEvery = function (array, userFunction) {
    for (i = 0; i < array.length; i++) {
        if (!userFunction(array[i])) {
            return false;
        }
    }
    return true;
}

const myArray = [0, 0, 0, 0, 0, 0, 0];

const answer = myEvery(myArray, isZero);
console.log(answer);