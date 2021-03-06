/* Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions:

For numbers divisible by 3, print "Fizz"
For numbers divisible by 5, print "Buzz"
For numbers divisible by both 3 and 5, print "FizzBuzz"
*/

// My solution

for (counter = 1; counter < 101; counter ++) {
    if (counter % 3 == 0 && counter % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (counter % 3 == 0) {
        console.log("Fizz");
    }
    else if (counter % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(counter);
    }
}

// Their solution

for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  }

/* They used if statements that concatenate on after another, and an “or” operator in the console.log instead of additional else if and else statements. They initialized an empty string and added to it if the modulus operator conditions were true, or defaulted to “n” when they weren’t. */