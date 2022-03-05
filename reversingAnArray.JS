// My solution

function reverseArray(array) {
    let newArray = [];
    for (i = 1; i <= array.length; i++) {
        nextElement = array[(array.length - i)]
        newArray.push(nextElement);
    }
    return newArray
}

function reverseArrayInPlace(array) {
    for (i = (array.length -1); i >= 0; i--) {
        selectElement = array[(i)];
        array.push(selectElement);
    }
  	for (i = 0; i < (array.length); i++) {
  		array.shift(array[i])
    }
    return array
}

// Their solution

function reverseArray(array) {
    let output = [];
    for (let i = array.length - 1; i >= 0; i--) {
      output.push(array[i]);
    }
    return output;
  }
  
  function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let old = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = old;
    }
    return array;
  }

  // I did try to start with "i" as array.length in the for loop conditions at one point, similar to their solution of reverseArray. Not quite following their solution (old versus array is confusing me). 