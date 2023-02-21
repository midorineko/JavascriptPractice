// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

const linked = require('./linkedlist')
const Node = linked.Node;
const List = linked.LinkedList;

function circular(l) {
  if(!l.head.next) return false;
  let slowNode = l.head;
  let fastNode = l.head.next;
  while(fastNode.next && fastNode.next.next){
    if(slowNode === fastNode){
      return true;
    }
    slowNode = slowNode.next;
    fastNode = fastNode.next.next;
  }
  return false
}

const l = new List();
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
l.head = a;
a.next = b;
b.next = c;
c.next = b;
console.log(circular(l)) // true

module.exports = circular;