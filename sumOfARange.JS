let rangeArray = []

function range(start, end) {
    for (i = 0; i <= end; i++)
        rangeArray.push(i)
    return rangeArray
}



function sum(rangeArray) {
    sumOfArray = 0
    for(let number of rangeArray)
        sumOfArray =+ number;
    return sumOfArray
}
