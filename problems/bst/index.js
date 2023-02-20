// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
    insert(data){
        if (data < this.data && this.left){
            return this.left.insert(data);
        }else if(data < this.data){
            this.left = new Node(data)
        }else if(data > this.data && this.right){
            return this.right.insert(data);
        }else if(data > this.data){
            this.right = new Node(data)
        }
        return;
    }

    contains(data){
        let curNode = this;
        if(data < curNode.data && curNode.left){
            return curNode.left.contains(data)
        }else if(data > curNode.data && curNode.right){
            return curNode.right.contains(data)
        }
        if(curNode.data === data){
            return curNode;
        }else{
            return null;
        }
    }
}
const node = new Node(10);
node.insert(5);
node.insert(15);
node.insert(20);
node.insert(0);
node.insert(-5);
node.insert(3);

console.log(node.contains(2))
module.exports = Node;