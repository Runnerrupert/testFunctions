const removeSpaces = function (string) {
    let newString = "";
    for (i = 0; i < string.length; i++) {
        if (string[i] !== " ") {
            newString += string[i];
        }
    }
    return newString;
}
let myString = removeSpaces("My Name Is Cameron");

const removeCapitals = function (string) {
    const upperLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const lowerLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        if (upperLetters.includes(string[i])) {
            const index = upperLetters.indexOf(string[i]);
            newString += lowerLetters[index];
        } else {
            newString += string[i];
        }
    }
    return newString;
}

removeCapitals(myString);


const myIndexOf = function (array, input) {
    for (let i = 0; i < array.length; i++) {
        if (input === array[i]) {
            return i;
        }
    }
    return -1;
}

const myArray = ['A', 'B', 'C', 'D', 'E'];
const myNewString = "E";

console.log(myIndexOf(myArray, myNewString));


const myIncludes = function (array, input) {
    
    if (input !== input) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] !== input) {
                return true;
            }
        }
        return false;
    }

    for (let i = 0; i < array.length; i++) {
        if (input === array[i]) {
            return true;
        }
    }
    return false;
}

const myNewArray = ["apple", "banana", "orange", NaN];
const myNewestString = NaN;

console.log(myIncludes(myNewArray, myNewestString));

