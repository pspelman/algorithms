//goal is to create as many combinations of cols that add up to 12 as possible and return an array or object of those
//combinations
// combinations MUST add up to 12
// for example, possible combinations are [12], [1,11], [2, 8, 2], etc...


//first possible combo is [1,1,1,1,1,1,1,1,1,1,1,1]

for (let i = 0; i < 13; i++) {
    console.log(``,i);
    //start counting up i
    if (i === 12) {
        console.log(`[`, i, `]`);
    }
    else{
        switch (i) {
            case 1:
                console.log(`I is 1`,);
                break;
            case 2:
                console.log(`i is 2`,);
                break;
            default:
                console.log(`other`,);
                break;
        }
    }
}
