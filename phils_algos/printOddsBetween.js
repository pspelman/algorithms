console.log(`Hello`,);

function printOddsBetween(num1, num2) {

    for( let i = num1; i<=num2; i++){
        // console.log(`I is now: `, i);
        if (i % 2 !== 0) {
            console.log(`Odd i: `,i);
        }

    }
}

printOddsBetween(1, 10);