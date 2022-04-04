/* Write a program that creates a string that represents an 8x8 grid, using newline characters to separate lines. At each position of the grid, there is either a space or a # character. The characters should form a chessboard. */

// My solution

let size = 8;

for (let line = 1; line <= size; line ++) {
    if (line % 2 != 0) {
       let spaces = " #"
        console.log(spaces.repeat(size / 2));
    }
    if (line % 2 == 0) {
        let squares = "# ";
        console.log(squares.repeat(size / 2));
    }
}

// Their solution

let size1 = 8;

let board = "";

for (let y = 0; y < size1; y++) {
  for (let x = 0; x < size1; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);

/* They added character by character to the entire board, using the mindset of if it’s line 2 + character 3 (= 5) is not % 2 =  0, then output a # into the board setup. I provided the characters in pairs and used the .repeat function. */