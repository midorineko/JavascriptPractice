// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//straight forware single loop without changing types
//you coulse do this by checking if the previous character was a space, but this seems more
//straight forward
function capitalize(s) {
    let finalStr = '';
    let caps = true;
    for(let char of s){
        if(caps){
            finalStr += char.toUpperCase();
            caps = false;
        }else{
            finalStr += char;
            if(char === ' '){
                caps = true;
            }
        }
    }
    return finalStr
}

//use split and slice to get arrays and put them back together while adding a capitalization
// function capitalize(s) {
//     let splitArr = s.split(" ");
//     let final = '';
//     for(let str of splitArr){
//         final += str[0].toUpperCase() + str.slice(1) + ' ';
//     }
//     return final
// }

module.exports = capitalize;