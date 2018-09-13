// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.
//
// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?
//
//     The parameter of the function findNb (find_nb, find-nb, findNb) will be an integer m and
//  you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.
//
//     Examples:
// findNb(1071225) --> 45
// findNb(91716553919377) --> -1
// EXAMPLE: findNb(1071225) --> 45

// (n-0)^3 + (n-1)^3 + (n-2)^3 ... + (n-(n-1))^3
function findNb(m) {
    //the limit has to be less than the cubed root of that number

    var limitNumber = 47;
    let sum = 0;
    //if the final sum == the input, then that is the n I want!
    var finalNumber;
    do {
        finalNumber = 0;
        //begin counting up from n
        for (let n = 0; n < limitNumber; n++) {
            // sum = Math.pow(n,3);
            for (let i = 0; i < n; i++) {
                sum += Math.pow(n - i, 3);
                console.log("Sum: " + sum);
                if(sum == m) {
                    finalNumber = n;
                    console.log("Final n: " + finalNumber);
                    break;
                }
            }
        }
    } while (finalNumber != m);



    // console.log("n^3 + 1 = ", Math.pow(n,3)+1);

}

// findNb(3);
// EXAMPLE: findNb(1071225) --> 45

let sum = 0;
let n = 45;
for(let i = 0; i <= n ; i++) {
    sum += Math.pow(n-i, 3);
    console.log("Sum: " + sum);
}
