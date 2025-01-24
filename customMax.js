const customMax = function (...num) {
    // return -Infinity when no arguments are passed
    if (num.length === 0) return -Infinity;

    // Initialize maxNum as -Infinity
    let maxNum = -Infinity; 
    
    // compare maxNum with the each argument, setting maxNum to the number that is larger
    for (let i = 0; i < num.length; i++) {
        // if Infinity is found within the arguments at any point, return Infinity
        if (num[i] === Infinity) {
            return Infinity;
        }

        // convert the current element into a number, unless it is null
        if (num[i] === null) {
            continue;
        } else {
            num[i] = Number(num[i]);
        }
        
        // if the current argument in the loop is NaN, undefined or null, skip the next steps
        if (isNaN(num[i]) || num[i] === undefined) {
            continue;
        }
        // sets maxNum equal to the highest number it encounters
        if (num[i] > maxNum) {
            maxNum = num[i];
        }
    }
    return maxNum;
}

const objWithValue = {
    valueOf() {
      return -42;
    }
};
const obj = { value: 10 };

console.log(customMax("abc", null, undefined, "xyz"));
console.log(customMax(-5, -10, -3));
console.log(customMax(100, Infinity, -Infinity));
console.log(customMax("10", 15, "20"));
console.log(customMax(NaN, NaN, NaN));
console.log(customMax(1000000000, 999999999, 1000000001));
console.log(customMax());
console.log(customMax(0, 5, -3));
console.log(customMax(true, false, -2, -4));
console.log(customMax(obj));
console.log(customMax(objWithValue, "-20", null, "-100"));
console.log(customMax(0, -0, 1, -1));
