const myJoin = function (array, separator = ",") {
    newString = "";
    if (array.length === 0) {
        return "";
    } 
    
    if (array.length === 1) {
        newString += array[0];
    } else {
        for (let i = 0; i < array.length; i++) {
            newString += array[i];
            newString += separator;
        }
    }
    return newString;
}

console.log(myJoin(["My", "name", "is", "John"], " "));