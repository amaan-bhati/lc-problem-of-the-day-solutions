//Minimum Number of K Consecutive Bit Flips
//24th-June-2024
//sliding-window
var minKBitFlips = function (nums, k) {
    const n = nums.length;
    let res = 0; // To count the number of flips
    let flip = 0; // This will act as a rolling flip state
    const diff = new Array(n + 1).fill(0); // Difference array to track flip intervals
    for (let i = 0; i < n; ++i) {
        // Difference array to track flip intervals
        flip ^= diff[i];

 // If current bit is 0 and flip is 0 or current bit is 1 and flip is 1, we need to flip
        

        if (nums[i] == flip) {
// If there aren't enough elements left to flip
           
            if (i + k > n) {
                return -1;
            }
            res++;     // Perform a flip  
            flip ^= 1;  // Toggle flip state
            diff[i] ^= 1;    // Mark the start of a flip interval 
            diff[i + k] ^= 1;     // Mark the end of a flip interval
        }
    }

    return res;
};
