# Compare triplets problem

This program compares two arrays of numbers (Alice and Bob) to score them.

## Problem

Given two arrays of the same length:
- For each position, if Alice's number is bigger, she gets 1 point.
- If Bob's number is bigger, he gets 1 point.
- If they are equal, no points.
Return both scores as an array.

## Example

Input:  
Alice = [5, 6, 7]  
Bob = [3, 6, 10]

Output:  
[1, 1]  
Explanation: Alice wins 1 point, Bob wins 1 point, one tie.

## How it works

1. Set both scores to 0.
2. Compare each pair of numbers:
   - Add to score if greater.
3. Return scores in an array.

## Usage

Run the file with Node.js:

```bash
node exercise.js
```

You will see:

```
[1, 1]
```
