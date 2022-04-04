/* Write a  function *countBs* that takes a string as its only argumentand returns a number that indicates how many uppercase "B" characters there are in a string. 

Next, write a function called *countChar* that behaves like *countBs*, except it takes a second argument that indicates the character that is to be counted (rather than only uppercase "B" characters.) Rewrite *countBs* to make use of this new funciton. */

// My solution, used https://buzzcoder.gitbooks.io/codecraft-javascript/content/string/loop-through-a-string.html for reference on looping through a string.

function countBs(string) {
    count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == "B") count++;
    }
    return count;
}

function countChar(string, character) {
    count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == character) count++;
    }
    return count;
}

// Their solution

function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == ch) {
            counted += 1;
        }
    }
    return counted;
}

function countBs(string) {
    return countChar(string, "B");
}

/* My countChar is spot on! I forgot to rewrite countBs to use countChar. I also still feel confused about the order of a script: top-down, or bottom-up? */