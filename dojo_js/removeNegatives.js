

const removeNegatives = (arr) => {
    let count = 0;
    for (let i = 0; i< arr.length; i++){
        // console.log(`arr[`,i,']: ',arr[i]);
        if (arr[i] < 0) {
            console.log(`negative detected at position `, i);
            for (let j = i; j < arr.length - 1; j++) {
                console.log(`PRE shift`,arr.join(' '));
                arr[j] = arr[j + 1];
                console.log(`POST shift`,arr.join(' '));
            }
            arr.pop();
            i--;
        }
        console.log(` arr[`, i ,']',arr[i]);
    }
    while (arr.length >0 && arr[arr.length - 1] < 0) {
        arr.pop();
    }
    console.log(`FINAL: `,arr.join(' '));
    return arr.join(' ');
};




∑removeNegatives([-1, -3, -2, -5, -8, 9]);