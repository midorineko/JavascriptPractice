// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;


//nothing crazy about queues here, just a simple class with an array constructor and add/remove functionality.
class Queue {
    constructor(){
        this.arr = [];
    }
    
    add(arg) {
        this.arr.unshift(arg);
        return this.arr;
    }
    
    remove() {
        return (this.arr.pop());
    }
}
const q = new Queue([]);

module.exports = Queue;