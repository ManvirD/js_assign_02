let myArr = [];
function myFunction(arr, obj) 
{
  arr.push(1);
  obj.food = 'apple pie';
}

let myObj = { name: 'Tony', food: 'pizza' };
myFunction(myArr, myObj);
console.log(myArr);
console.log(myObj); 