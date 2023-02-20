
// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

const linked = require('./linkedlist')
const Node = linked.Node;
const List = linked.LinkedList;

// we can use getAt(n) because we know that n will always be less than length of list
function fromLast(list, n) {
    let slow=list.getAt(0);
    let fast=list.getAt(n);
    while(fast.next){
        slow = slow.next;
        fast = fast.next
    }
    return slow
}

   const list = new List();
   list.insertLast('a');
   list.insertLast('b');
   list.insertLast('c');
   list.insertLast('d');
   console.log(fromLast(list, 3)) // 'b'

module.exports = fromLast;
