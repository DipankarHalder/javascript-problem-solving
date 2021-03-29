/*************************************************************************
 @condition - Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 @solution - You may assume that each input would have exactly one solution, and you may not use the same element twice.
 @return - You can return the answer in any order.
**************************************************************************/
/**
 * @param {number[]} paramArray
 * @param {number} target
 * @return {number[]}
**/

function twoNumberSum(paramArray, target) {
  for(let i = 0; i < paramArray.length; i++){
    for(let j = i+1; j < paramArray.length; j++){
      if(paramArray[i] + paramArray[j] === target){
        return [i, j];
      }
    }
  }
}

console.log(twoNumberSum([22, 20, 45, 4, 6, 8, 10, 56], 30))


