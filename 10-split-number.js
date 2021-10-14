const num = 123456123456123456;
const digits = num.toString().split('').map(iNum => parseInt(iNum, 10));
console.log(digits);