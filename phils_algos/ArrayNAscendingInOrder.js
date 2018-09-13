const ascendingInOrder = (roll, nInARow=4) => {
    console.log(`Checking `, roll, "for a series of ", nInARow, " in a row");
    console.log(`roll.length - nInARow: `,roll.length - nInARow);

    let count = 0;

    for (let i = 0; i < roll.length; i++) {
        console.log(`i: `,roll[i]);
        if (roll[i] == roll[i + 1]) {
            console.log(`current i: `,i);
            console.log(`current i+1: `,i+1);
            // console.log(`roll.length - nInARow: `,roll.length - nInARow);
            if (i + 1 > roll.length - nInARow) {
                return false;
            }
            continue;
        }

    }

};


const roll01 = [2, 2, 3, 4, 5];
ascendingInOrder(roll01, 4);
