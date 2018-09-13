var this_thing = "yes";

//following example online

//the hash function (might be written by someone else)
//string - thing we're tyring to hassh
//max - number of buckets used in hashtable to store values
var hash = (string, max) => {
    var hash = 0; //set initial hash to 0
    for (let i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i);
    }
    //the %max means divide by number of buckets and return the remainder as the index
    return hash % max;
};

let HashTable = function () {
    let storage = []; //stuff in the table
    const storageLimit = 4; //maximum number of items

    this.print = function () {
        console.log(`storage: ${storage} `);
    };

    //add function
    this.add = function (key, value) {
        var index = hash(key, storageLimit); //getting the index for storing the thing

        if (storage[index] === undefined) {
            storage[index] = [
                [key, value]
            ];
        } else {
            var inserted = false;
            for (let i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if (inserted === false) { //it didn't get pushed in
                storage[index].push([key, value]); //adding to the bucket that already has something in it
            }
        }
    };

    this.remove = function (key) {
        var index = hash(key, storageLimit);
        if (storage[index].length === 1 && storage[index][0][0] === key) {
            delete storage[index];
        } else {
            for (var i = 0; i < storage[index]; i++) {
                if (storage[index][i][0] === key) {
                    delete storage[index][i];
                }
            }
        }
    };

    this.lookup = function(key) {
        var index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            return undefined;
        } else {
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    return storage[index][i][1];
                }
            }
        }
    }


};