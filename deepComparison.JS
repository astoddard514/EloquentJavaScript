/* Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties. Compare the value of the properties using a recursive call of deepEqual.

Use ===, typeof, and Object.keys */

// My solution

function deepEqual(item1, item2) {
    if (item1 === item2) {
        return true;
    }
    else if (typeof item1 === "object") {
        let newItem = Object.keys(item1)
        deepEqual(newItem, item2)  
    }
    else if (typeof item2 === "object") {
        let newItem = Object.keys(item2)
        deepEqual(item1, newItem)
    }
    else return false
}

// I'm getting a RangeError: Maximum call stack size exceeded - because of infinite recursion and a base case not being met. Not sure how to incorporate Object.keys 

// Their solution

function deepEqual(a, b) {
    if (a === b) return true;
    
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false; // why a null condition here?
  
    let keysA = Object.keys(a), keysB = Object.keys(b);
  
    if (keysA.length != keysB.length) return false;
  
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
  
    return true;
  }

