// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let count = 0;
    let h = {'a': 1, 'e': 1, 'i':1, 'u':1, 'o':1};
    for(let char of str){
        if(h[char]){
            count++;
        }
    }
    return count
}

//regex solution
// function vowels(str) {
//     const match = str.match(/[aeiou]/gi);
//     return match === null ?  0 :  match.length;
//  }

module.exports = vowels;