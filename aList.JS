function arrayToList([value1, value2, value3]) {
    // produce a list from an array
    let list = {
        value: value1,
        rest: {
            value: value2,
            rest: { // might need an if statement here to pass to null if no 3rd argument (or review optional third argument content)
                value: value3,
                rest: null
            }
        }
    } 
    return list;   
}

function listToArray() {
    // produce an array from a list
}

function prepend() {
    // add element to front of list
}