function FirstPerfectSquare(arr) {
    return arr.find(isPerfectSquare);
}
const myArray = [5, 7, 16, 23, 25];
const result = FirstPerfectSquare(myArray);

console.log(result); // Output: 16 
