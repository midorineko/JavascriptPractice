// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor(){
        this.s = new Stack();
        this.s2 = new Stack();
    }
    add(rec){
        if(this.s2.peek()){
            while(this.s2.peek()){
                this.s.push(this.s2.pop())
            }
        }
        this.s.push(rec)
    }
    remove(){
        while(this.s.peek()){
            this.s2.push(this.s.pop())
        }
        return this.s2.pop();
    }
    
    peek(){
        while(this.s.peek()){
            this.s2.push(this.s.pop())
        }
        return this.s2.peek();
    }
}

module.exports = Queue;