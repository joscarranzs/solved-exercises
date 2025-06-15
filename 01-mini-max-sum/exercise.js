// This is the input array.
let arr = [1, 2, 3, 4, 5];

// Function to solve the Mini-Max Sum problem
function miniMaxSum(arr) {
    // Add all numbers in the array
    let total = arr.reduce((acc, val) => acc + val, 0);
    // For each number, subtract it from total sum and save the result in a new array
    let sums = arr.map(num => total - num);

    // Print the smallest and biggest number from the new array
    console.log(Math.min(...sums), Math.max(...sums));
}

// Example usage
miniMaxSum(arr); // Output: 10 14
