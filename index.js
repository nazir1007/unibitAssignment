 // -------------------    Problem  Statement  ------------------------- //

// Given an array of integers and a target value, you must determine which two integers sum
// equals the target and return a 2D array. Then merge the array into a single array with sorting (
// ascending ) order, in the next step double the target value and find again the combination of
// digits (can be multiple digits ) that are equal to the double targeted value and returned into a 2D
// array.
// Sample Input : [1, 3, 2, 2, -4, -6, -2, 8];
// Target Value = 4,
// Output: First Combination For “4” : [ [1,3],[2,2],[-4,8],[-6,2] ];
// Merge Into a single Array : [-6,-4,1,2,2,2,3,8];
// Second Combination For “8” : [ [ 1,3,2,2], [8,-4,2,2],....,[n,n,n,n] ]


function findCombination(arr, target) {
    const tempArr = [];
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          tempArr.push([arr[i], arr[j]]);
        }
      }
    }
    const mergedArray = arr.sort((a,b) => a-b);

    const doubleTarget = target * 2;
        for (let i = 0; i < mergedArray.length; i++) {
          const currentArr = [mergedArray[i]];
      
          let sum = mergedArray[i];
          let j = i + 1;
          while (sum < doubleTarget && j < mergedArray.length) {
            currentArr.push(mergedArray[j]);
            sum += mergedArray[j];
            j++;
          }
      
          if (sum === doubleTarget) {
            result.push(currentArr);
          }
        }

    return {tempArr, mergedArray, result};
}
  
const arr = [1, 3, 2, 2, -4, -6, -2, 8];
const target_value = 4;

const {tempArr, mergedArray, result} = findCombination(arr, target_value);
console.log(`First Combination For ${target_value}:`, tempArr);
console.log("Merge Into a single Array:", mergedArray);
console.log(`Second Combination For "${target_value * 2}":`, result);
