//Input
let numOne = 76;
let numTwo = 98;
let string = "level";

// Process
function showSum() {
    let sum = numOne + numTwo;
    return `Sum: ${sum}`; 
}

function checkOddOrEven(num) {
    if (num % 2 === 0 ) {
        return `${num} is EVEN NUMBER.`;
    }else {
        return `${num} is ODD NUMBER.`;
    }

}

function checkPrime(num) {
    if (num <= 1) {
        return `${num} neither prime or composite .`;
    } else if (num === 2) {
        return `${num}  prime number.`;
    } else if (num % 2 === 0) {
        return `${num} not prime number.`;
    } else {
        for (let i = 3; i * i <= num; i += 2) {
            if (num % i === 0) {
                return `${num} not prime number.`;
            }
        }
        return `${num}  prime number.`;
    }
}

function checkPalindrome(string) {
    let cleanedString = string.toLowerCase(); 
    let len = cleanedString.length;
    for (let i = 0; i < len / 2; i++) {
        if (cleanedString[i] !== cleanedString[len - 1 - i]) {
            return `'${string}' is not a palindrome.`;
        }
    }
    return `'${string}' is a palindrome.`;
}

// Output
console.log(showSum());
console.log(checkOddOrEven(numOne));
console.log(checkOddOrEven(numTwo));
console.log(checkPrime(numOne));
console.log(checkPrime(numTwo));
console.log(checkPalindrome(string));