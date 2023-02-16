// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//simple solution by building an array and if it's equal to the size than it will push into a final array
//if the loop finished and there is anything left in generated array that wasn't pushed, it will push it in
// function chunk(array, size) {
//     let finalArr = [];
//     let curArr = [];
//     for(let c of array){
//         curArr.push(c);
//         if(curArr.length >= size){
//             finalArr.push(curArr);
//             curArr = [];
//         }
//     }
//     if(curArr.length > 0){
//         finalArr.push(curArr)
//     }
//     return finalArr
// }

// a cooler version using splice. It will splice out the size of the array, thus making the array shorter
// it will push that slice into the final array.
// if the size is greater than or equal to array length, we are finished with the loop and
// check to see if there is anything left in the orinal array and if there is it will push it in
function chunk(array, size) {
    let finalArr = [];
    while(size < array.length){
        let spliced = array.splice(0,size);
        finalArr.push(spliced);
    }
    if(array.length > 0 ) finalArr.push(array)
    return finalArr
}
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3))
module.exports = chunk;