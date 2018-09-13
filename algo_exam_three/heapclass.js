
//rules for heap
// right child: i * 2
// left child: i * 2 + 1
// parent: Math.floor(i / 2)


let minHeap = function() {
    this.indexSwap = function (index1, index2) {
        if (index1 > heap.length || index2 > heap.length) {
            return false;
        }
        let temp = heap[index1];
        heap[index1] = heap[index2];
        heap[index2] = temp;
        return true;
    };

    this.printHeap = function () {
        let outstring = "[ ";
        for(let i = 1; i < heap.length-2; i++) {
            outstring += heap[i] + ", ";
        }
        outstring += heap[heap.length - 1] + " ]";
        console.log(`current heap: `, outstring);
    };

    // largest values will be on top
    // address is index(n) and index(n+1)
    let heap = [null];

    this.add = function (val) {
        console.log(`Trying to add`,);
        //first add to the very end of the array
        heap.push(val);
        this.printHeap();
        if (heap.length <= 2) {
            return true;
        }
        //now start to test - it was pushed to position heap.length-1

        let test_idx = heap.length - 1; // testing begins at the end of the array, where it was added
        let parent_idx = Math.floor(test_idx / 2); //set the original parent_idx index

        while (heap[test_idx] < heap[parent_idx]) { //while the value below is less than the one above, the lower one needs to be moved
            // parent_idx = Math.floor(test_idx / 2);
                //if I got to the top of the heap, it means I need to switch with the root
            if (test_idx >= 1) {
                //ES6 destructuring syntax
                console.log(`swapping ${heap[test_idx]} with ${heap[parent_idx]}`,);
                [heap[Math.floor(test_idx / 2)], heap[test_idx]] = [heap[test_idx], heap[Math.floor(test_idx / 2)]];
                // should also work with
                // this.indexSwap(test_idx, parent_idx);

                // if the test_idx hasn't finished testing up the tree
                if (Math.floor(test_idx / 2) > 1) { // if it has a parent
                    console.log(`test index was ${test_idx}`,);
                    test_idx = Math.floor(test_idx / 2);

                    console.log(`test index is now: ${test_idx}, parent_idx was: ${parent_idx}`,);

                    parent_idx = Math.floor(test_idx);

                    console.log(`parent_idx is now: ${parent_idx}`,);

                } else {
                    break;
                }
            }
            //print the current heap
            this.printHeap();

        }


    };

};


//TODO: build the maxHeap
let maxHeap = function () {

    let heap = [null];

    this.add = function (val) {
        heap.push(val);


    };


};