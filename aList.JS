// My attempts 

function arrayToList([value1, value2, value3 = null]) {
    // produce a list from an array
    let list = {
        value: value1,
        rest: {
            value: value2,
            rest: value3
            }
        }
    } 
    return list;   
}

function listToArray(list) {
    // produce an array from a list
    array = [];
    for (i = 0; i < list.length; i ++)
        // remove/get head value and set as variable
        listArray.push(list[i]) // or whatever a list index spot is
}

function prepend() {
    // add element to front of list
}

// Their solution

function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }
    return list;
}

function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function prepend(value, list) {
    return {value, rest: list};
}

function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n -1);
}

// I manually/hard-coded my list for the specific array values. Duh. . . Clearly I was afraid to use code ahead of seeing it explicitly in the text (specifically nodes). 