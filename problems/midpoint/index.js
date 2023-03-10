// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }
const Linked = require('./linkedlist');
const LinkedList = Linked.LinkedList;

//pretty cool solution using a slow and fast counter. The fast always increments twice when slow increments once
//this will keep slow always in the middle of fast. So we just have to iterate until fastnode finishes.
function midpoint(l) {
    let slowNode = l.getFirst();
    let fastNode = l.getFirst();
    while(fastNode.next && fastNode.next.next){
        slowNode = slowNode.next;
        fastNode = fastNode.next.next;
    }
    return slowNode
}

  const l = new LinkedList();
  l.insertLast('a')
  l.insertLast('b')
  l.insertLast('c')
  l.insertLast('c')
  l.insertLast('c')
  midpoint(l); // returns { data: 'b' }


module.exports = midpoint;