//using the sign function.
//Find the sign and multiply it through, if it is negative then it will make it positive
//then at the end after making it a number again multiply it by the sign again
//positive numbers stay positive and negative numbers turn negative
function reverseInt(s){
    let sign = Math.sign(s);
    let cleanInt = sign*s
    let revserseStr = cleanInt.toString().split('').reverse().join('');
    let newRev = Number(revserseStr);
    return (newRev * sign)
}


//uses a typical string reversal with a while loop and checks if there is a negative and 
//appends it to the beginning adding everythign else at the end
//while transversing backwards in the string
// let s = 5134500
// function reverseInt(s){
//     let ns = s.toString();
//     let len = ns.length;
//     let fs = '';
//     while(len > 0){
//         if(ns[len-1] == '-'){
//             fs = ns[len-1] + fs;
//         }else{
//             fs = fs + ns[len-1];
//         }
//         len--;
//     }
//     return Number(fs)
    
// }

//checks if there is a negative in a string turned array, shifts it out and sets a boolean
//reverse the array, add back the negative, and turn it into a number
// function reverseInt(s){
//     let ns = s.toString().split('');
//     let neg = false;
//     if(ns[0] == '-'){
//         neg = true;
//         ns.shift();
//     }
//     ns = ns.reverse().join('');
//     if(neg){
//         ns = '-' + ns;
//     }
//     return Number(ns)
    
// }
// console.log(reverseInt(s))