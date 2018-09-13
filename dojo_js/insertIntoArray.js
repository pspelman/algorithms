const arr = [0, 1, 2, 3, 4];
console.log(``, arr.join(' '));

arr.splice(3, 0, 5);
console.log(``, arr.join(' '));

const insertIntoArray = (arr, where, value) => {

    console.log(`trying to insert `, value, " at index ", where , " in [", arr.join(' '), ']');

    if (where > arr.length || where < 0) {
        console.log(`invalid index received`,);
        return null;
    }

    console.log(`PRE push`,arr.join(' '));
    arr.push(value);
    console.log(`POST push`,arr.join(' '));

    let i = arr.length-1;
    console.log(``,);

    while (i > where) {
        console.log(``,);
        console.log(`i is: `,i);
        console.log(`PRE swap`,arr.join(' '));
        arr[i] = arr[i-1];
        console.log(`POST swap`,arr.join(' '));
        i--;
    }
    arr[i] = value;
    console.log(`POST FINAL swap`,arr.join(' '));

    return (
        arr
    );
};

insertIntoArray([1, 2, 3], 0, 5);
insertIntoArray([2, 3, 4, 1, 2, 3], 3, 9);