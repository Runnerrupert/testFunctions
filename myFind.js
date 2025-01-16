const greaterThanOne = function (input) {
    if (input > 1) {
        return true;
    }
    return false;
}

const myFind = function (array, userFunction) {
    for (let i = 0; i < array.length; i++) {
        if (userFunction(array[i])) {
            return array[i];
        }
    }
    return undefined;
}

const myArray = [0, 1, 2, 3, 4, 5];
const answer = myFind(myArray, greaterThanOne);
console.log(answer);

const anotherAnswer = myFind(myArray, num => num > 3);
console.log(anotherAnswer);