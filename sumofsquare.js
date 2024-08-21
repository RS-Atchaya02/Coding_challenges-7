function sumOfSquares(arr) {
    return arr.reduce((sum, element) => sum + element * element, 0);
}
const myArray = [1, 2, 3, 4];
const result = sumOfSquares(myArray);
console.log(result);    // Output: 30 
