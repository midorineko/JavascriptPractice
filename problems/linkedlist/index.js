// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }

    insertFirst(data){
        this.head = new Node(data, this.head)
    }

    size(){
        let count = 0;
        let curNode = this.head
        while(curNode !== null){
            curNode = curNode.next
            count++;
        }
        return count;
    }

    getFirst(){
        let curNode = this.head;
        return curNode;
    }

    getLast(){
        let curNode = this.head;
        while(curNode && curNode.next){
            curNode = curNode.next
        }
        return curNode;
    }

    clear(){
        this.head = null;
    }

    removeFirst(){
        if(this.head === null) return;
        this.head = this.head.next
    }

    removeLast(){
        if(this.head === null) return;
        let curNode = this.head;
        let prevNode = this.head;
        while(curNode.next){
            prevNode = curNode;
            curNode = curNode.next;
        }
        if(curNode === prevNode){
            this.clear();
        }else{
            prevNode.next = null;
        }
    }

    insertLast(data){
        let lastNode = this.getLast();
        if(lastNode){
            lastNode.next = new Node(data);
        }else{
            this.head = new Node(data)
        }
    }

    getAt(ind){
        let count = 0;
        let curNode = this.head;
        while(curNode && count !== ind){
            curNode = curNode.next;
            count++;
        }
        return curNode
    }

    removeAt(ind){
       if(!this.head) return null;
       let prevNode = this.getAt(ind-1);
       let pastNode = this.getAt(ind+1);
       let curNode = this.getAt(ind);
       if(curNode){
            if(prevNode){
            return prevNode.next = pastNode;
           }
    
           if(pastNode){
            return this.head = pastNode;
           }
    
           this.clear();
           return null;
       }else{return null}
    }

    insertAt(data, ind){
        if(!this.head) return this.head = new Node(data);
        let prevNode = this.getAt(ind-1);
        let curNode = this.getAt(ind);
        if(prevNode){
            let addingNode = new Node(data);
            prevNode.next = addingNode;
            addingNode.next = curNode;
            return;
        }
        if(curNode){
            this.insertFirst(data);
            return;
        }
        this.insertLast(data);
        return;
    }

    forEach(fn){
        if(!this.head) return null;
        let curNode = this.head;
        while(curNode){
            fn(curNode)
            curNode = curNode.next
        }
    }
    *[Symbol.iterator](){
        let curNode = this.head;
        while(curNode){
            yield curNode;
            curNode = curNode.next
        }
        
    }
}

ll = new LinkedList
ll.insertFirst(1)
ll.insertFirst(2)
ll.insertFirst(3)
ll.insertFirst(4)
ll.forEach((node)=>{
    node.data = node.data + 10
})

console.log(ll)
// console.log(ll)


module.exports = { Node, LinkedList };