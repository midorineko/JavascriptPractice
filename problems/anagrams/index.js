//ugly anagram check, can be done with a single for loop since the lengths are always the same
function anagrams(s, s2) {
    const hash = {};
    const hash2 = {};
    let good = true;
    if(s.length != s2.length) return false
    for(let char of s){
        if(hash[char]){
            hash[char] = hash[char] + 1;
        }else{
            hash[char] = 1;
        }
    }
    for(let char of s2){
        if(hash2[char]){
            hash2[char] = hash2[char] + 1;
        }else{
            hash2[char] = 1;
        }
    }
    var hashKeys = Object.keys(hash)
    hashKeys.forEach((key) =>{
        if(hash[key]!==hash2[key]){
         good = false   
        }
    })
    return good;
}

//a slightly better solution with a single loop and pulling keys during the loop
// function ana(s, s2) {
//     const hash = {};
//     const hash2 = {};
//     let good = true;
//     let hashKeys = [];
//     if(s.length != s2.length) return false
//     for(let i = 0; i < s.length; i++){
//         let char = s[i];
//         let char2 = s2[i];
//         hashKeys.push(char);
//         if(hash[char]){
//             hash[char] = hash[char] + 1;
//         }else{
//             hash[char] = 1;
//         }
//         if(hash2[char2]){
//             hash2[char2] = hash2[char2] + 1;
//         }else{
//             hash2[char2] = 1;
//         }
//     }
//     hashKeys.forEach((key) =>{
//         if(hash[key]!==hash2[key]){
//          good = false   
//         }
//     })
//     return good
// }
module.exports = anagrams;