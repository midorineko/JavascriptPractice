// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let arr = str.split('')
    if(arr.length < 2){
        return true
    }else{
        if(arr[0] == arr[arr.length-1]){
            arr.pop()
            arr.shift()
            return palindrome(arr.join(''))
        }else{
            return false
        }
    }
}

module.exports = palindrome;