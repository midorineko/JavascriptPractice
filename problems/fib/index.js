// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//     let arr = [];
//     let i = 0;
//     while(i<=n){
//         if(i < 2){
//             arr.push(i);
//         }else{
//             arr.push(arr[arr.length-1] + arr[arr.length -2])
//         }
//         i++;
//     }
//     return arr[arr.length-1]
// }


// recursive fib
function fib(n){
    if(n < 2){
        return n
    }
    return fib(n-1) + fib(n-2);
}

// memoize it 
const memoize = (fn) =>{
    let cache = {};
    return function(...args){
        let spreadArgs = JSON.stringify(args);
        if(cache[spreadArgs]){
            return cache[spreadArgs];
        }
        let newSolution = fn.apply(this, args);
        cache[spreadArgs] = newSolution;
        return cache[spreadArgs];
    }
}

fib = memoize(fib);
module.exports = fib;