function splitArrayIntoChunksOfLen(arr, len) {
  let chunks = [];
  let i = 0;
  let n = arr.length;
  while (i < n) {
    chunks.push(arr.slice(i, i += len));
  }
  return chunks;
}
let alphabet=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(splitArrayIntoChunksOfLen(alphabet,4));

// es6
const chunk = (arr, size) => 
  arr.reduce((acc, e, i) => 
    (i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc), 
  []);