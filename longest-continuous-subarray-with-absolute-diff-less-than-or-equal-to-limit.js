//longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit
//23rd-June

var longestSubarray = function (nums, limit) {
  let max = [],
    min = [],
    start = 0,
    end = 0,
    ans = 0;
  //Iterate till end
  while (end < nums.length) {
    //Update the max and the min queues
    while (max.length > 0 && max[max.length - 1] < nums[end]) {
      max.pop();
    }
    while (min.length > 0 && min[min.length - 1] > nums[end]) {
      min.pop();
    }
    max.push(nums[end]);
    min.push(nums[end]);
    //shrink the window if the max and min are out of bounds
    while (max[0] - min[0] > limit) {
      if (max[0] == nums[start]) {
        max.shift();
      }
      if (min[0] == nums[start]) {
        min.shift();
      }
      start++;
    }
    ans = Math.max(ans, end - start + 1);
    end++;
  }
  return ans;
};
