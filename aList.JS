function arrayToList([value1, value2, value3 = null]) {
    // produce a list from an array
    let list = {
        value: value1,
        rest: {
            value: value2,
            rest: { // might need an if statement here to pass to null if no 3rd argument (or review optional third argument content)
                value: value3, // or quit after this value if null to avoid redundant rest null
                rest: null
            }
        }
    } 
    return list;   
}

function listToArray(list) {
    // produce an array from a list
    listArray = [];
    for (i = 0; i < list.length; i ++)
        // get/push each element from list to array 
        listArray.push(list[i]) // or whatever a list index spot is
}

function prepend() {
    // add element to front of list
}