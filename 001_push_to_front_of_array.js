function pushToFront(newFront, arr) {
    for (let i = arr.length; i > 0; i--) {
        arr[i] = arr[i-1];
    }
    arr[0] = newFront;
    return arr;
}

console.log(pushToFront(3, [1,1,1,1,3,4,5]));