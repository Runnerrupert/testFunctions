import myFilter from './myFilter.js';

// Possible Sorting Methods: 
// Merge Sort
// Quick Sort
// Dictionary Sort
// Bubble Sort


// Bubble Sort Method: 

const myComparison = function (a, b) {
    return a - b;
}

const myBubbleSort = function (array, comparisonFunction) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            let temp = undefined;
            if (comparisonFunction(array[j], array[j + 1]) > 0) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

const merge = function (left, right, comparisonFunction) {
    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (comparisonFunction(left[i], right[j]) <= 0) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}

const myMergeSort = function (array, comparisonFunction) {
    if (array.length <= 1) {
        return array;
    }

    const mid = Math.floor(array.length / 2);
    const left = myMergeSort(array.slice(0, mid), comparisonFunction);
    const right = myMergeSort(array.slice(mid), comparisonFunction);

    return merge(left, right, comparisonFunction);
}

const myQuickSort = function (array) {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[array.length - 1];
    const left = array.filter((el) => el < pivot);
    const middle = array.filter((el) => el === pivot);
    const right = array.filter((el) => el > pivot)

    return [...myQuickSort(left), ...middle, ...myQuickSort(right)];
}


let myArray = [3, 1, 2, 5, 4, 6, 10, 2, 4, 1];

// const bubbleSortAnswer = myBubbleSort(myArray, (a, b) => a - b);
// const mergeSortAnswer = myMergeSort(myArray, (a, b) => a - b);
const quickSortAnswer = myQuickSort(myArray);

// console.time('Bubble Sort');
// console.log(bubbleSortAnswer);
// console.timeEnd('Bubble Sort');

// console.time('Merge Sort');
// console.log(mergeSortAnswer);
// console.timeEnd('Merge Sort');

console.time('Quick Sort');
console.log(quickSortAnswer);
console.timeEnd('Quick Sort');


// Possible Sorting Methods: 
// Merge Sort
// Quick Sort
// Dictionary Sort

