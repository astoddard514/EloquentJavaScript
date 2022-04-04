/* Write  aloop that makes seven calls to console.log to ouput a 7 row, left aligned triangle made of hashes. */

// My solution

for (let hashes = "#"; hashes.length < 8; hashes += "#") {
    console.log(hashes);
}

// Their solution

for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

/* Came back to review and add notations to each exercise, don't recall how much of this I worked through on my own. I think I was initially surprised that you could set the counter variable as a character/string like that as opposed to an integer to be incremented. Surprised that the increment line concatenates additional characters onto each string. */