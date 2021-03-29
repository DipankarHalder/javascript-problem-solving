/**********************************************
 @condition - Given an integer x, return true if x is palindrome integer.
 @explaination - An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
*********************************************/
/**
 * @param {number} numInt
 * @return {boolean}
**/

function givenNumberIsPalindrome(numInt){
  return numInt === Number(
    numInt.toString().split("").reverse().join("")
  );
}

console.log(givenNumberIsPalindrome(123455321));