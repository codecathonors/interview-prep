//adds all items in an array with recursion

const sum = (arr) => (arr.length === 0) ? 0 : arr[0] + sum(arr.slice(1));

const anArray = [9, 213, 32, 53, 234, 63]

console.log(sum(anArray))

//node recursion.js in terminal