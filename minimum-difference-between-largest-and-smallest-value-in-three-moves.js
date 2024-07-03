//1509. Minimum Difference Between Largest and Smallest Value in Three Moves
//3rd-july-2024

var minDifference = function (nums) {
  // check if the array has less than 4 elements, in which case the minimum difference is 0.
  if (nums.length <= 4) {
    return 0;
  }

  // sort the array in ascending order to efficiently find differences.
  nums.sort((a, b) => a - b);

  // since the array is sorted, we can calculate the minimum difference by considering
  // specific pairs of elements:
  // - nums[length - 1] - nums[3]: difference between the last element and the fourth element.
  // - nums[length - 4] - nums[0]: difference between the fourth-to-last element and the first element.
  // - nums[length - 3] - nums[1]: difference between the third-to-last element and the second element.
  // - nums[length - 2] - nums[2]: difference between the second-to-last element and the third element.

  return Math.min(
    nums[nums.length - 1] - nums[3],
    nums[length - 4] - nums[0],
    nums[length - 3] - nums[1],
    nums[length - 2] - nums[2]
  );
};

