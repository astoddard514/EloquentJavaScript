// Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties. Compare the value of the properties using a recursive call of deepEqual.

// Use ===, typeof, and Object.keys 

// My solution

function deepEqual(item1, item2) {
    if (item1 === item2) {
        return true;
    }
    else if (typeof item1 === "object") {
        let property1 = Object.keys(item1);
        deepEqual(property1, item2)
    }
    else if (typeof item2 === "object") {
        let property2 = Object.keys(item2);
        deepEqual(item1, property2)
    }
    else false
}

// I'm getting a RangeError: Maximum call stack size exceeded - likely because of infinite recursion and a base case not being met. 