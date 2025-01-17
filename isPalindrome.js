const isPalindrome = function (string) {
    let newString = "";
    string = string.toLowerCase();
    for (let i = 1; i < string.length + 1; i++) {
        newString += string[string.length - i];
    }
    if (newString === string) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("dog"));