function bstNode(val) {

    this.val = val;
    this.left = null;
    this.right = null;

}


// let node1 = new bstNode(2);
// console.log(`Node val: `,node1.val);
// console.log(`Node left: `,node1.left);
// console.log(`Node right: `,node1.right);

// let my_bst = new BST(node1);
// console.log(`root:`,my_bst.root);


function BST(root = null) {
    this.root = root;


    this.add_val = function (val) {
        let newNode = new bstNode(val);
        this.add(newNode);
    };

    // this.add = function (val, current=this.root) {
    //     console.log(`\ntrying to add: `,val);
    //     if (this.root === null) {
    //         this.root = new bstNode(val);
    //         console.log(`set root: `,val);
    //     }
    //     else {
    //         console.log(`current: `, current.val);
    //         if (val == current.val) {
    //             console.log(`already in tree`,);
    //             return false;
    //         }
    //         if (val < current.val) {
    //             console.log(`${val} < ${current.val} : go LEFT`,);
    //             if (current.left) {
    //                 console.log(`there's something to the left...go there`,);
    //                 this.add(val, current.left);
    //             } else{ //NOTHING to the left
    //                 console.log(`there is NOTHING to the left. set left = ${val}`,);
    //                 current.left = new bstNode(val);
    //             }
    //         } else if (val > current.val) {
    //                 console.log(`${val} > ${current.val} : go RIGHT`,);
    //                 if (current.right) {
    //                     console.log(`there's something to the RIGHT...go there`,);
    //                     this.add(val, current.right);
    //                 } else { //NOTHING to the right
    //                     console.log(`there is NOTHING to the right. set right = ${val}`,);
    //                     current.right = new bstNode(val);
    //
    //                 }
    //             }
    //
    //
    //     }
    this.add = function (val, current=this.root) {
        if (this.root === null) {
            this.root = new bstNode(val);
        }
        else {
            if (val == current.val) {
                return false;
            }
            if (val < current.val) {
                if (current.left) {
                    this.add(val, current.left);
                } else{ //NOTHING to the left
                    current.left = new bstNode(val);
                }
            } else if (val > current.val) {
                if (current.right) {
                    this.add(val, current.right);
                } else { //NOTHING to the right
                    current.right = new bstNode(val);
                }
            }
        }

        // if (this.root === null) {
        //     this.root = newNode;
        // } else {
        //     if (newNode.val < current.val) {
        //         if (newNode.val === current.val) {
        //             return false;
        //         }
        //         if (current.left) {
        //             // console.log(`\nrecurse LEFT`,);
        //             this.add(newNode, current.left);
        //         } else {
        //             // console.log(`set LEFT:${newNode.val}\n`,);
        //             current.left = newNode;
        //         }
        //     } else {
        //         if (current.right) {
        //             // console.log(`\nrecurse RIGHT`,);
        //             this.add(newNode, current.right);
        //         } else {
        //             // console.log(`set RIGHT:${newNode.val}\n`,);
        //             current.right = newNode;
        //         }
        //     }
        // }
        //    else
        //start processing
        //is the newNode.val less than current.val??
        //if YES
        //is there anything already to the left?
        //if YES
        //send current.left into the add function
        //if NO
        //make current.left = newNode
        //if NO
        //is there anything already to the right?
        //if YES
        //send current.right into the add function
        //if NO
        //make current.right = newNode

    };

    this.rCount = function (current = this.root, count = 0) {
        if (!this.root) {
            return 0;
        } else {
            if (current.left === null && current.right === null) {
                console.log(`no left or right`,);
                return 1
            }
            if (current.left) {
                console.log(`there's a left`,);
                count += 1;
                count += this.rCount(current.left);
            } else { //only if there is NO left will we add one, and then do the add right
                count += 1;
            }
            if (current.right) {
                console.log(`theres a right`,);
                count += this.rCount(current.right)
            }
        }

        return count;
    };


}


let new_bst = new (BST);
console.log(`\n\n\nnew round: add 15`,);
new_bst.add(15);
console.log(`Count: ${new_bst.rCount()}`,);

console.log(`\n\n\nnew round: add 22`,);
new_bst.add(22);
console.log(`Count: ${new_bst.rCount()}`,);


console.log(`\n\n\nnew round: add 5`,);
new_bst.add(5);
console.log(`Count: ${new_bst.rCount()}`,);



console.log(`\n\n\nnew round: add 17`,);
new_bst.add(17);
console.log(`Count: ${new_bst.rCount()}`,);

console.log(`\n\n\nnew round: add 1`,);
new_bst.add(1);
console.log(`Count: ${new_bst.rCount()}`,);


console.log(`\n\n\nnew round: add 25`,);
new_bst.add(25);
console.log(`Count: ${new_bst.rCount()}`,);



console.log(`\n\n\nnew round: add 8`,);
new_bst.add(8);
console.log(`Count: ${new_bst.rCount()}`,);










// let new_bst = new (BST);
// console.log(`Root: `,new_bst.root);
// console.log(`count: `,new_bst.rCount());
// console.log(`\n`,);
//
// new_bst.add_val(15);
// console.log(`count: ${new_bst.rCount()} \n`,);
//
// new_bst.add_val(20);
// console.log(`count: ${new_bst.rCount()} \n`,);
//
//
// new_bst.add_val(12);
// console.log(`count: ${new_bst.rCount()} \n`,);


// new_bst.add_val(7);
// console.log(`count: `,new_bst.rCount());
//
// new_bst.add_val(4);
// console.log(`count: `,new_bst.rCount());



// console.log(`Root: `,new_bst.root);
// new_bst.add_val(20);
// // console.log(`current bst`,new_bst);
// new_bst.add_val(6);
// // console.log(`current bst`,new_bst);
// new_bst.add_val(2);
// new_bst.add_val(12);
// new_bst.add_val(19);
// new_bst.add_val(8);
// new_bst.add_val(7);
// new_bst.add_val(6);
//
// console.log(`current bst`,new_bst);


//
// new_bst.add_val(12);
// new_bst.add_val(8);
// new_bst.add_val(9);
//
// console.log(`BST: `,new_bst);

// new_bst.add_val(10);
//
//
//
// if (current_node.val > node_to_add.val) {
//     //go left
//     if (current_node.left === null) {
//         console.log(`Nothing to the LEFT...placing node!`,node_to_add);
//         current_node.left = node_to_add;
//     } else {
//         // --> GO LEFT
//         console.log(`recursing LEFT`,);
//         this.add(current_node.left, node_to_add);
//     }
//     // less than?
// } else if (current_node.val < node_to_add.val){
//     if (current_node.right===null) {
//         console.log(`Nothing to the RIGHT...placing node!`,node_to_add);
//         current_node.right = node_to_add;
//     } else {
//         // --> GO RIGHT
//         console.log(`recursing RIGHT`,);
//         this.add(current_node.right, node_to_add);
//     }
// }
//
// }
