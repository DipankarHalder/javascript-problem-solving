function addTwoNumbers(l1, l2) {
  let l1NumbStr = '', l2NumbStr = '';
  do {
    l1NumbStr += l1?.val ? l1.val : '';
    l1 = l1?.next;
    l2NumbStr += l2?.val ? l2.val : '';
    l2 = l2?.next;
  } while (l1 || l2);
  let l1ReverseNumb = parseInt(Array.from(l1NumbStr).reverse().join(''));
  let l2ReverseNumb = parseInt(Array.from(l2NumbStr).reverse().join(''));
  let newNumbStr = (l1ReverseNumb + l2ReverseNumb).toString();
  let node;
  for (let i = 0; i < newNumbStr.length; i++) {
    node = new ListNode(parseInt(newNumbStr[i]), node);
  }
  return node;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));