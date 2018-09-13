subSets = (arr) => {
    const sets = [];

    let maxCollection = arr.length;
    console.log(`max set length: `, maxCollection);
    for (let i = 0; i < arr.length; i++) {
        sets.push(arr[i]);
        console.log(`Sets: `, sets);
    }
    sets.push(sets.join(", "));
    console.log(`Sets: `, sets);


    return sets;
};

subSets(['A', 'B']);
// subSets(['A', 'B', 'C']);