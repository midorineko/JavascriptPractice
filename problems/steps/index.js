// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//using repeat function to dudplicate the '#' in the ammount necessary
function steps(n) {
    for(let i=1; i<=n; i++){
        const built = "" + '#'.repeat(i) + " ".repeat(n-i) +""
        console.log(built)
    }
}

//recursion instead of a for loop
// function steps(n, p=n){
//     if(n === 0) return;
//     const built = "'" + '#'.repeat((p-n)+1) + " ".repeat(n-1) +"'"
//     console.log(built)
//     steps(n-1,p)
// }

///tripple while loop solution
//first while loop goes until i reaches n
//second while loop will add '#' until p is equal to i, essentailly adding '#' until i is met
//then we add spaces until spaceint equals n 
// function steps(n) {
//     let i = 1;
//     while(i <= n){
//         let p = 0;
//         let step = ""
//         let spaceInt = i;
//         while(p < i){
//             step += '#';
//             p++;
//         }
//         while(spaceInt < n){
//             step += ' ';
//             spaceInt++;
//         }
//         console.log(step)
//         i++;
//     }
// }

//also with recursion. pretty tricky p is basically the length of step. if the length of step is the same as n we move to the next row or i
// function steps(n, i = 0, p = 0, step = '') {
//     if(i === n ) return;
//     if(p === n ){
//         console.log(step)
//         return steps(n, i+1, p = 0, step = '')
//     }
//     if(p <= i){
//         step += '#';
//     }else{
//         step += ' '
//     }
//     return steps(n, i, p+1, step)
// }

//using a matrix. We can map out rows and columns if the column is less than or equal to row
//then we can add a '#' otherwise we need to add a space
// function steps(n) {
//     for(let row = 0; row < n; row++){
//         str = '';
//         for(let col = 0; col<n; col++){
//             if(col <= row){
//                 str += '#';
//             }else{
//                 str += ' ';
//             }
//         }
//         console.log(str);
//     }
// }

//recursive incrementing stair and row. stair.length is effectively the column
// function steps(n, row = 0, stair = ''){
//     if(n === row) return;
//     if(stair.length === n){
//         console.log(stair);
//         return steps(n,row+1);
//     }
//     if(stair.length <= row){
//         stair += '#';
//     }else{
//         stair += ' ';
//     }
//     return(steps(n,row, stair))
// }

module.exports = steps;