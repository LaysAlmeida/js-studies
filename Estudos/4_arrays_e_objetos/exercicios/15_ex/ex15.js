function removeDuplicates(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(removeDuplicates([1, 2, 1, 4, 5]));