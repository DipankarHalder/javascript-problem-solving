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


