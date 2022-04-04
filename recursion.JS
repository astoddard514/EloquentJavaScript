// My solution

function isEven(a) {
    if (a === 0) {
        isEven = true; // should just be "return true"
    }
    else if (a === 1) {
        isEven = false; // should just be "return false"
    }
    else if (a > 1) {
        while (a > 1) {
            a - 2;
            return a;
        }
        isEven(a);
    }
}

// first two runs come back as the integers not booleans true and false. a = -1 comes back undefined, or when switched to else, "RangeError Maximum call stack size exceeded (line 4 of function)"

// Their solution

function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n)
    else return isEven(n - 2)
}

/* They used one-line if statements with the same content for me for the first two. Then they added an else if for converting a negative value to a positive value to run through the function as it stands. The final else statement must work through similar to my while loop without explicitly including it in its own condiiton to loop through. */