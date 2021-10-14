function givenNumberIsPalindrome(numInt){
  return numInt === Number(
    numInt.toString().split("").reverse().join("")
  );
}

console.log(givenNumberIsPalindrome(123455321));