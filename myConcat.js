const myConcat = function (array1, array2) {
    const newArray = [];
    for (i = 0; i < array1.length; i++) {
        newArray.push(array1[i]);
    }
    for (i = 0; i < array2.length; i++) {
        newArray.push(array2[i]);
    }
    return newArray;
}

const myArrayOne = [1, 2, 3];
const myArrayTwo = [4, 5, 6];

const answer = myConcat(myArrayOne, myArrayTwo);
console.log(answer);

// Simplified version

const myConcat2 = function (array1, array2) {
    return [...array1, ...array2];
}

const myArrayOne1 = [1, 2, 3];
const myArrayTwo2 = [4, 5, 6];

const answer2 = myConcat2(myArrayOne1, myArrayTwo2);
console.log(answer2);
