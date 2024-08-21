function Lowercase(str) {
    return str.split('').filter(char => char >= 'a' && char <= 'z').length;
}
const myString = "Hello World! How are you?";
const result = Lowercase(myString);
console.log(result); // Output: 16
