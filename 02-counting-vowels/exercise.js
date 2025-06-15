let vowels = 'aeiou'; // Letters we count as vowels

function countVowels(str) {
    let count = 0; // Start the counter at 0
    for (let char of str.toLowerCase()) { // Go through each letter in the string (make it lowercase)
        if (vowels.includes(char)) { // If the letter is a vowel
            count++; // Add 1 to the counter
        }
    }
    return count; // Return the total number of vowels
}

// Example usage:
console.log(countVowels("Hello World")); // Output: 3
