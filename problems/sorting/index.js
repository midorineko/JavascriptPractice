// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for(i=0;i < arr.length; i++){
        let j = 0;
        while(j < (arr.length - i)){
            if(arr[j]>arr[j+1]){
                const swap = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = swap;
            }
            j++;
        }
    }
    return arr
}

function selectionSort(arr) {
    for(let i=0;i<arr.length; i++){
        mindex = i;
        let j = i+1;
        while(j < arr.length){
            if(arr[j] < arr[mindex]){
                mindex = j;
            }
            j++;
        }
        if(i !== mindex){
            const lowest = arr[mindex];
            arr[mindex] = arr[i];
            arr[i] = lowest;
        }
    }
    return arr
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
      }
    
      const center = Math.floor(arr.length / 2);
      const left = arr.slice(0, center);
      const right = arr.slice(center);
    
      return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const results = [];

    while (left.length && right.length) {
      if (left[0] < right[0]) {
        results.push(left.shift());
      } else {
        results.push(right.shift());
      }
    }
  
    return [...results, ...left, ...right];
}


module.exports = { bubbleSort, selectionSort, mergeSort, merge };