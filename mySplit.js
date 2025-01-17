const mySplit = function (string, delimiter = "") {
    const newArray = [];

    // Test for edge cases
    if (string === "") {
        return [];
    }
    let toAdd = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] === delimiter) {
            newArray.push(toAdd);
            toAdd = "";
        } else if (delimiter === "") {
            newArray.push(string[i]);
        } else {
            toAdd += string[i];
            if (i === string.length - 1) {
                newArray.push(toAdd);
            }
        }
    }
    return newArray;
}

console.log(mySplit("monkey,cowboy,donkey", ","));



// const testSplitFunction = function (string) {
//     const myString = string.split("");
//     return myString;
// }

// console.log(testSplitFunction("This is just a test"));