const customMin = function (...num) {
    // returns infinity automatically if no arguments are passed
    if (num.length === 0) {
        return Infinity;
    }

    // finds the smallest number out of all the arguments provided
    let minNum = num[0];
    for (let i = 1; i < num.length; i++) {
        if (minNum > num[i]) {
            minNum = num[i];
        }
    }
    return minNum;
}

console.log(customMin(-1, 0, 1, 2, -5, 4, 3, -2, -3, -4));