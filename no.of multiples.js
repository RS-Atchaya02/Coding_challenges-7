function numberMultiples(arr, num) {
    if (num === 0) {
        throw new Error('The number cannot be zero.');
    }
    const multiples = arr.filter(element => element % num === 0);
    return multiples.length;
}
const myArray = [10, 20, 15, 37, 45];
const specificNumber = 3;
const result = numberMultiples(myArray, specificNumber);
console.log(result); // Output: 2 
