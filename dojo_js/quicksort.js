//create recursive quicksort
//GOAL : in-place sorting

const swap = (arr, left, right) => {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    return arr;
};

function quicksort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) {
        return;
    }

    let pivot = partitionH(arr, left, right);

    //right side
    if (left < pivot) {
        quicksort(arr, left, pivot - 1);
    }
    //left side
    if (right > pivot) {
        quicksort(arr, pivot, right);
    }

    return arr;

}

const partitionH = (arr, left, right) => {

    //assign the pivot
    let pivot = Math.floor(left + (right - left) / 2);

    while (left <= right) {
        while (arr[left] < arr[pivot]) {
            left++;
        }
        while (arr[right] > arr[pivot]) {
            right--;
        }
∑
        if (left <= right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }
    console.log(`returning left: `,left);
    return left;
};


let arr1 = [0, 2, 6, 4, 6, 8, 3, 0];
console.log(`PRE SORT`, arr1.join(' '));
quicksort(arr1);
console.log(`POST SORT`, arr1.join(' '));