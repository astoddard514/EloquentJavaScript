/* A list is a nested set of objects with the first object holding a reference to the second, the second to the third, and so on. 

Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. 

Write a function listToArray that produces an array from a list. 

Add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list or undefined when there is no such element. 

If you don't already, write a recursive version of nth.*/

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