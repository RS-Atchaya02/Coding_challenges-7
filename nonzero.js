function FirstNonZero(arr) {
    return arr.find(element => element !== 0);
}
const myArray = [0, 0, 6, 3, 5, 0];
const result = FirstNonZero(myArray);

console.log(result); // Output: 3
