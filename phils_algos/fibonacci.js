const rfib = (n) => {
    let sum = 0;
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    else {
        sum = sum + (rfib(n - 1) + rfib(n - 2));
    }
    return sum;
};

console.log(`Rfib 2: `, rfib(6));


// modify fibonacci to add the previous 3

//tribonacci
// write function rTrib(num) to mimic Fibonacci, adding previous THREE vlaues instead of TWO.
// First three Tribonacci numbers are 0,0,1, so rTrib(3) = 1 (0+0+1)
// rTrib(4) = 2 (0+1+1)
// rTrib(5) = 4 (1+1+2)
// rTrib(6) = 7 (1 + 2 + 4)

//Handle negatives and non-integers appropriately and inexpensively