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

// countChar is spot on! I forgot to rewrite countBs to use countChar. I also still feel confused about the order of a script: top-down, or bottom-up?