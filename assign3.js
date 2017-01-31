var numbers = [1, 2, 3, 4];
console.log("The numbers are",numbers);
var newNumbers = [];

for(var i = 0; i < numbers.length; i++) 
{
    newNumbers[i] = numbers[i] + 2;
}

console.log("The doubled numbers are", newNumbers);