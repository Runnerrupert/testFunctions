const myReverseString = function (string) {
    // Handle Edge Cases
    if (string === '' || string.length === 1) {
        return string;
    }

    // Initialize new string
    let reversedString = "";
    // Reverse the letters and add them to the new string & return the output
    for (let i = 1; i < string.length + 1; i++) {
        reversedString += string[string.length - i];
    }
    return reversedString;
}

console.log(myReverseString("my string"));