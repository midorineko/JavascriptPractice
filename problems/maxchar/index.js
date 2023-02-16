// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(s) {
    const hash = {};
    let finalVal = '';
    let finalValCount = 0;
    for(let char of s){
        if(hash[char]){
            hash[char] = hash[char] + 1;
        }else{
            hash[char] = 1;
        }
        if(hash[char] > finalValCount){
            finalValCount = hash[char];
            finalVal = char;
        }
    }
    return finalVal;
}

module.exports = maxChar;