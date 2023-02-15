// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//ugly but one liner, not a great solution because their is a lot of creation and 
//reverse probably does a loop
// function reverse(str){
//     return(str.split('').reverse().join(''));
// }

// pushing from the front
// let str = 'asfsf';
// let newstr = ''
// for(let character of str) {
//   newstr = character + newstr
// }
// console.log(newstr)

//using reduce which is pretty cool
// str.split('').reduce((reversed, char)=>{
//     reversed = char + reversed;
//     return reversed
// },'')


//my solution using a while loop, which is faster than a for and makes more intuitive sense.
// function reverse(str) {
//     let newString = '';
//     let strLen = str.length - 1;
//     while(strLen >= 0){
//         const curVal = str[strLen];
//         newString = newString + curVal;
//         strLen--;
//     }
//     return newString
// }

//using longest palindrome in a string
function reverse(str) {
    let newString = '';
    let strLen = str.length - 1;
    while(strLen >= 0){
        const curVal = str[strLen];
        newString = newString + curVal;
        strLen--;
    }
    return newString
}
reverse('meowmeow')

module.exports = reverse;