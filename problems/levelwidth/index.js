// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

const Node = require('./node')

//to solve for level width I create 2 arrays, one for the current level and one for the next level.
//once the current level is done pushing their children into the second array, it will be empty. 
//set the current level = to next level and reset the next level, then push the current level array.
//the loop stops when both the current and next level arrays are empty
function levelWidth(root) {
    if(!root.data && root.data !== 0) return [0]
    let arr = [root];
    let arr2 = [];
    const finalCountArr = [1];
    while(arr.length){
        let curNode = arr.shift();
        arr2.push(...curNode.children);
        if(arr.length === 0 && arr2.length !== 0){
            arr = arr2;
            arr2 = [];
            finalCountArr.push(arr.length)
        }
    }
    return finalCountArr
}

const root = new Node(0);
root.add(1);
root.add(2);
root.add(3);
root.children[0].add(4);
root.children[2].add(5);
console.log(levelWidth(root))

module.exports = levelWidth;