//Minimum Number of K Consecutive Bit Flips
//24th-June-2024
//sliding-window
var minKBitFlips = function (nums, k) {
    const n = nums.length;
    let res = 0; 
    let flip = 0; 
    const diff = new Array(n + 1).fill(0); 
    for (let i = 0; i < n; ++i) {
        flip ^= diff[i];

        if (nums[i] == flip) {
            if (i + k > n) {
                return -1;
            }
            res++;       
            flip ^= 1;  
            diff[i] ^= 1;     
            diff[i + k] ^= 1;    
        }
    }

    return res;
};
