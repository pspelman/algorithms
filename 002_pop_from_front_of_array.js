// pop off the front of an array


function popArrayFrontNewArr(arr) { //with new array object
    var newArr = [];
    for ( let i = 1; i < arr.length; i++) {
        newArr[i-1] = arr[i];
    }
    return newArr;
}

function popArrayFrontOneArr(arr) { //with same array object
    for (let i = 0; i< arr.length; i++) {
        arr[i] = arr[i+1];
    }
    arr.pop();
    return arr;
}


console.log(popArrayFrontNewArr([0,1,2,3,4]));
console.log(popArrayFrontOneArr([0,1,2,3,4]));
