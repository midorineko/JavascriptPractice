// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
/* 
One of the more difficult problems to solve. I am pretty proud to get this wihtout seeing a solution.
I added an image document so you can see how I mapped it out.
Essentially we are going around the edges in a box. So first I tried just getting the first box.
     [[1, 2, 3, 4],
     [12, 0, 0, 5],
     [11, 0, 0, 6],
     [10, 9, 8, 7]]
The main way we are going to add values into the matrix is by array[current row][current column]. For n=4 row 1 at column 0 is 12.
First row we need current row to equal starting row and increment current column until we get to end column
[1, 2, 3, 0] <--- 0 at the end because we are using less than

Next we need to set this end column for each row, so we increment rows until we hit row end
     [[1, 2, 3, 4],
     [0, 0, 0, 5],
     [0, 0, 0, 6],
     [0, 0, 0, 0]] <--- again trailing 0 because we are going to set that when doing the bottom loop

Now we  check to make sure current column is greater than starting column
    [[1, 2, 3, 4],
     [0, 0, 0, 5],
     [0, 0, 0, 6],
     [0, 9, 8, 7]]
Then we keep current column equal to starting column and increment rows while current row is greater than starting row.
    [[1, 2, 3, 4],
     [0, 0, 0, 5],
     [11, 0, 0, 6],
     [10, 9, 8, 7]]

Now we have new start and ending rows and columns so we just do it again until the value we are pushing in is n*n.
Due to us leaving a zero, we will end up with a final 0 instead of the final value, because none of the while loops will clear.
Because our start/end columns and rows are past our current column/row.
So before we print the matrix we have to assign the final value in the matrix.
    [[1, 2, 3, 4],
     [12, 13, 14, 5],
     [11, 0, 15, 6],
     [10, 9, 8, 7]] <--- before we push in the final number. 
*/

function matrix(n) {
    let a = []
    for(let i = 0; i < n; i++){
        a.push([Array(n)])
    }
    let sr = 0; let sc=0;
    let er = n-1; let ec=n-1;
    let cr = 0; let cc=0;
    let val = 1;
    while(val < n*n){
        while(cc < ec){
            a[cr][cc] = val;
            val++;
            cc++;
        }
        sr++;
        while(cr < er){
            a[cr][cc] = val
            val++;
            cr++;
        }
        ec--;
        while(cc>sc){
            a[cr][cc] = val;
            val++;
            cc--;
        }
        er--
        while(cr>sr){
            a[cr][cc] = val;
            val++;
            cr--;
        }
        sc++;
    }
    a[cr][cc] = val
    return a
}
module.exports = matrix;