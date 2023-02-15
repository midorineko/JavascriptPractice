// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//recurisvely pop and shift the stack until we are at 1 or 0 left and if we get there we are true
//if any don't match then we are falst
// function palindrome(str) {
//     let arr = str.split('')
//     if(arr.length < 2){
//         return true
//     }else{
//         if(arr[0] == arr[arr.length-1]){
//             arr.pop()
//             arr.shift()
//             return palindrome(arr.join(''))
//         }else{
//             return false
//         }
//     }
// }

//longest palindrome in a string, if the entire thing is a palindrom then the longest palindrome will
//match the length of the original string
function palindrome(s) {
    let final = '';
    let good = true
    let strLen = s.length;
    for(i=0; i<strLen; i ++){
        let curVal = s[i];
        let leftInd = i -1;
        let rightInd = i + 1;
        let good = true;
        let curString = curVal;
        while(good){
            if(leftInd >= 0 && rightInd < strLen && s[leftInd] == s[rightInd]){
                curString = s[leftInd] + curString + s[rightInd]
                leftInd--;
                rightInd++;
            }else if(rightInd < strLen && curVal == s[rightInd]){
                curString = curString + s[rightInd];
                rightInd++;
            }else{
                if(curString.length > final.length){
                    final = curString;
                }
                good = false
            }
        }
    }
    return final.length === s.length
}


//using longest palindrome in a string.
module.exports = palindrome;