//SLL reverse

function reverseSLL(sll) {

    if (sll.head == null) {
        return false;
    } else {
        let runner = sll.head;
        while (runner.next != null) {
            console.log(`runner:`,runner.val);
            runner = runner.next;
        }
        console.log(`final runner:`,runner.val);
    }

    if (sll.head == null) {
        return false;
    } else {
        let runner = sll.head;
        let temp = null;
        let holder = null;
        while (runner.next != null) {
            let holder = runner.next;
            console.log(`runner: ${runner.val}\nholder: ${holder.val}\ntemp: ${temp}`,);
            runner.next = temp;
            temp = runner;
            runner = holder;
        }
        runner.next = temp;
        sll.head = runner;
    }

    let runner = sll.head;
    while (runner.next != null) {
        console.log(`runner:`,runner.val);
        runner = runner.next;
    }
    console.log(`final runner:`,runner.val);


}

function SLLNode(val){
    this.val = val;
    this.next = null;

}


function sll() {
    head: null;
    tail: null;

    this.add = function(val){
        let node_to_add = new SLLNode(val);
        console.log(`node_to_add: `,node_to_add);

        if (this.head == null) {
            this.head = node_to_add;
            this.tail = node_to_add;
        } else {
            let runner = this.head;

            while(runner.next != null) {
                console.log(`runner: `, runner);
                runner = runner.next;
            }
            //at the end of the sll
            runner.next = node_to_add;
            this.tail = node_to_add;

        }
        return "done";
    }

}

let mySLL = new sll();


console.log(`mySLL head: ${mySLL.head} | mySLL tail: ${mySLL.tail}`,);
mySLL.add(1);
console.log(`mySLL head: ${mySLL.head} | mySLL tail: ${mySLL.tail}`,);
mySLL.add(2);
mySLL.add(3);
mySLL.add(4);
mySLL.add(5);

reverseSLL(mySLL);