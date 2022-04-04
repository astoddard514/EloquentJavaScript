/* Write a function *min* that takes two arguments and returns their minimum */

// My solution

function min(a, b) {
    if (a >= b) {
        return b;
    }
    else if (a < b) {
        return a;
    }
}

// Their solution

function min(a, b) {
    if (a < b) return a;
    else return b;
}

// They used a single line if statement and made the else argument more concise. 