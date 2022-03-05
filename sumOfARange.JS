// My solution

let rangeArray = [];

function range(start, end) {
    for (i = start; i <= end; i++)
        rangeArray.push(i)
    return rangeArray
}

function sum(rangeArray) {
    let sum = 0;
    for(let i = 0; i < rangeArray.length; i++)
        sum += rangeArray[i]
    return sum
}

// Incorrect sum of 113 so far, and haven't coded a decrement block yet.

// Their solution

function range(start, end, step = start < end ? 1 : -1) {
    let array = []

if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
} 
else {
    for (let i = start; i >= end; i += step) array.push(i);
}
return array;
}

function sum(array) {
    let total = 0;
    for (let value of array) {
        total += value;
    }
    return total;
}

// need to learn more about the conditional(?) statement in the 3rd argument of their range array function. They used an "of" for loop, which I had fiddled with as well. I don't understand why I keep getting  a sum of 110-113, but it may have to do with the range array function rather than the sum function. My range array function works for ascending ranges but not descending. 