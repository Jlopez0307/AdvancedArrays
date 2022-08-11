// doubleValues
// Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

function double(num){
    return num * 2;
}

function doubleValues(arr){
    let newArr = [];

    const doubleVal = arr.forEach(function(value){
        return newArr.push(value * 2);
    });

    return newArr;
}

function onlyEvenValues(arr){
    let newArr = [];

    const evenVals = arr.forEach(function(value){
        if(value % 2 === 0){
            newArr.push(value);
        }
    })

    return newArr;
};
