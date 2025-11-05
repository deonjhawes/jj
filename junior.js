function multiply(num1, num2, num3) {
    if (num1 === num2 || num1 === num3 || num2 === num3) {
        return "Error: The numbers must'nt be the same.";
    } else {
        return num1 * num2 * num3;
    }
}
console.log(multiply(2, 3, 4));
console.log(multiply(5, 5, 2));

const convertToSeconds = function(minutes) {
    return minutes * 60;
};
const seconds = convertToSeconds(5);
console.log(seconds);

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
let celsius = fahrenheitToCelsius(440);
console.log(celsius);

function reverseString(text) {
    return text.split('').reverse().join('');
}
let result = reverseString("racecar");
console.log(result);

function countVowels(text) {
   
    text = text.toLowerCase();

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let char of text) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

let vowelCount = countVowels('');
console.log(vowelCount);

function isPrime(num) {
    if (num <= 1) return false; 

    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
}
console.log(isPrime(4));   
console.log(isPrime(5));   
console.log(isPrime(16));  
console.log(isPrime(25));  
