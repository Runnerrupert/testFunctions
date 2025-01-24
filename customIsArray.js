const customIsArray = function (value) {
    return Array.prototype.isPrototypeOf(value)
}

console.log(customIsArray({ value: 16 }));  // false
console.log(customIsArray([1, 2, 3]));      // true
console.log(customIsArray(3));              // false
console.log(customIsArray("String"));       // false