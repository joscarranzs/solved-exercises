# Mini-Max Sum Problem

This project solves the "Mini-Max Sum" problem.

## Problem

Given an array of 5 numbers, find:

- The minimum sum by adding 4 of the 5 numbers.
- The maximum sum by adding 4 of the 5 numbers.

## Example

If the array is:  
`[1, 2, 3, 4, 5]`

- Minimum sum: `1 + 2 + 3 + 4 = 10`
- Maximum sum: `2 + 3 + 4 + 5 = 14`

So, output is:  
`10 14`

## How it works

1. Add all numbers in the array.
2. For each number, subtract it from the total sum.
3. Find the smallest and biggest result from step 2.
4. Print these two numbers.

## Usage

Run the file using Node.js:

```bash
node exercise.js
```

You will see:

```
10 14
```
