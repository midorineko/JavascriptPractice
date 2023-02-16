//a preferred anagrams check because it also sees if the character is a special characters

// function anagrams(s, s2) {
//     s = s.toLowerCase();
//     s2 = s2.toLowerCase();
//     const hash = {};
//     const hash2 = {};
//     let good = true;
//     for(let char of s){
//         if(char != char.toUpperCase()){
//             if(hash[char]){
//                 hash[char] = hash[char] + 1;
//             }else{
//                 hash[char] = 1;
//             }
//         }
//     }
//     for(let char of s2){
//         if(char != char.toUpperCase()){
//             if(hash2[char]){
//                 hash2[char] = hash2[char] + 1;
//             }else{
//                 hash2[char] = 1;
//             }
//         }
//     }
//     var hashKeys = Object.keys(hash)
//     hashKeys.forEach((key) =>{
//         if(hash[key]!==hash2[key]){
//          good = false   
//         }
//     })
//     return good;
// }

//a slightly better solution with a single loop and pulling keys during the loop
//start with a regex to remove any special characters and works with numbers
function anagrams(s, s2) {
    const hash = {};
    const hash2 = {};
    let hashKeys = [];
    s = s.toLowerCase().replace(/[^\w]/g, "");
    s2 = s2.toLowerCase().replace(/[^\w]/g, "");
    if(s.length != s2.length) return false
    for(let i = 0; i < s.length; i++){
        let char = s[i];
        let char2 = s2[i];
        hashKeys.push(char);
        if(hash[char]){
            hash[char] = hash[char] + 1;
        }else{
            hash[char] = 1;
        }
        if(hash2[char2]){
            hash2[char2] = hash2[char2] + 1;
        }else{
            hash2[char2] = 1;
        }
    }
    hashKeys.forEach((key) =>{
        if(hash[key]!==hash2[key]){
         return false   
        }
    })
    return true
}
module.exports = anagrams;


// added a helper
// const helperMap = (s,s2) => {
//     const hash = {};
//     const hash2 = {};
//     let hashKeys = [];
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
//     return {hash: hash, hash2: hash2, hashKeys: hashKeys}
// }

// function ana(s, s2) {
//     s = s.toLowerCase().replace(/[^\w]/g, "");
//     s2 = s2.toLowerCase().replace(/[^\w]/g, "");
//     if(s.length != s2.length) return false
//     const helper = helperMap(s, s2)
//     const hash = helper.hash
//     const hash2 = helper.hash2
//     const hashKeys = helper.hashKeys
//     hashKeys.forEach((key) =>{
//         if(hash[key]!==hash2[key]){
//          return false   
//         }
//     })
//     return true
// }
// console.log(ana('FAI1RY! TALES!', 'fairy tale1s'))

//simple but bad run complexity
// const ana = (s,s2) =>{
//     s = s.toLowerCase().replace(/[^\w]/g,'').split('').sort().join('');
//     s2 = s2.toLowerCase().replace(/[^\w]/g, '').split('').sort().join('');
//     return s === s2
// }
