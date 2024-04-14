/* Write a JS code to print numbers from 1 to 10 */
for (let index = 1; index <= 10; index++) {
    console.log(index);
    
}
// Write a JS code to print Even numbers in given arra
for (let i=1 ;i < 20;i++) {
if(i%2==0)
    console.log(i);
}
//Write a JS code to delete all occurrence of element in given array
const array = [1, 2, 3, 4, 2, 5, 2];
const elementToDelete = 2;
const newArray = array.filter(item => item !== elementToDelete);
console.log(newArray);
//4. Write a JS code to find the power of a number using for loop
function power(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

console.log(power(2, 3)); // Example: 2^3 = 8
//5. Write a JS code to print a pattern using for loop
for (let i = 1; i <= 8; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += j + ' ';
    }
    console.log(row);
}
//6. Write a JS code to find the no of digits in a number
function countDigits(number) {
    return number.toString().length;
}

// Usage
console.log(countDigits(12345)); // Output: 5
// Write a JS code to find the largest number in an array
function findLargestNumber(arr) {
    return Math.max(...arr);
}

// Usage
console.log(findLargestNumber([1, 5, 10, 2, 8])); // Output: 10
//Calculate the sum of digits in a number:
function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}

// Usage
console.log(sumOfDigits(12345)); // Output: 15
//Print the Fibonacci series for a given value of N:
function fibonacciSeries(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

// Usage
console.log(fibonacciSeries(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
//Find duplicate values in a given array:
function findDuplicates(arr) {
    const duplicates = [];
    arr.forEach((item, index) => {
        if (arr.indexOf(item, index + 1) !== -1 && duplicates.indexOf(item) === -1) {
            duplicates.push(item);
        }
    });
    return duplicates;
}

// Usage
console.log(findDuplicates([1, 2, 3, 4, 2, 5, 3])); // Output: [2, 3]
//Binary search algorithm in JavaScript:
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1; // Not found
}

// Usage
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2

