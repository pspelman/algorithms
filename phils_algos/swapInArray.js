const swap = (arr, left, right) => {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    return arr;
};

let arr = [1, 2, 3];
console.log(`PRE SWAP`,arr.join(' '));
swap(arr, 0, 2);
console.log(`POST SWAP`,arr.join(' '));
