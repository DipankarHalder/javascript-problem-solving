function reverseInteger(numInteger) {
  if(numInteger === 0) 
    return 0;

  const multFact = numInteger / Math.abs(numInteger);
  const absNum = Math.abs(numInteger);
  const revNum = parseInt(
    absNum.toString().split('').reverse().join('')
  );

  if(revNum > 2 ** 31 -1 || revNum < -(2 ** 31)) 
    return 0;
  return revNum * multFact;
}

console.log(reverseInteger(-447846));

