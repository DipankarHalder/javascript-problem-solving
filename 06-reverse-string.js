function reverseString(string) {
  //--------------------------------------------
  // return string.split("").reverse().join("");

  //--------------------------------------------
  // return [...string].reverse().join("");

  //--------------------------------------------
  // var o = '';
  // for (var i = string.length - 1; i >= 0; i--)
  //   o += string[i];
  // return o;

  //--------------------------------------------
  // var o = [];
  // for (var i = 0, len = string.length; i <= len; i++)
  //   o.push(string.charAt(len - i));
  // return o.join('');

  //--------------------------------------------
  // for (var i = string.length - 1, o = ''; i >= 0; o += string[i--]) { }
  // return o;

  //--------------------------------------------
  // return Array.from(string).reverse().join('');

  //--------------------------------------------
  return string.split("").reduce((revString, char)=> char + revString, "");
}

console.log(reverseString("dipankar"));