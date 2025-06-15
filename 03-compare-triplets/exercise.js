let Alice = [3, 4, 5];
let Bob = [9, 2, 3];

function compareTriplets(Alice, Bob) {
    let AliceScore = 0; // Alice's points
    let BobScore = 0;   // Bob's points

    // Compare each pair of numbers
    for (let i = 0; i < Alice.length; i++) {
        (Alice[i] > Bob[i]) 
            ? AliceScore++  // Alice wins this round
            : (Alice[i] < Bob[i]) 
                ? BobScore++ // Bob wins this round
                : null;      // Tie, no points
    }

    return [AliceScore, BobScore]; // Return scores
}

// Example usage:
let scores = compareTriplets(Alice, Bob);

console.log("Alice's score:", scores[0]); // Output: Alice's score: 2
console.log("Bob's score:", scores[1]);   // Output: Bob's score: 1
