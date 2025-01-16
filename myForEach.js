const logInput = function (input) {
    console.log(input);
}

const myForEach = function (array, userFunction) {
    for (let i = 0; i < array.length; i++) {
        userFunction(array[i]);
    }
}

myArray = [1, 2, 3, 4, 5];
myForEach(myArray, logInput);

// Practical Example of Use:

// const userNames = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve'];

// const displayUser = function (user) {
//     const userDiv = document.createElement('div');
//     userDiv.className = 'user-item';
//     userDiv.textContent = `User: ${user}`;

//     document.getElementById('userList').appendChild(userDiv);
// }

// myForEach(userNames, displayUser);