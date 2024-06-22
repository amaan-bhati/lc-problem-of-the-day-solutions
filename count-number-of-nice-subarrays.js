//Count-number-of-nice-subarrays
//22nd-June-2024
//Sliding-window

var numberOfSubarrays = function (nums, k) {
  let left = 0,  // Starting index of the current window
      mid = 0,  // Index pointing to the first odd element in the window
      right = 0,  // Ending index of the current window
      count = 0,  // Count of valid subarrays
      windowLen = 0;  // Number of odd elements in the current window

  // Skip leading even elements
  while (mid < nums.length && nums[mid] % 2 == 0) {
    mid++;
  }

  // Slide the window
  while (right < nums.length) {
    // If a new element is odd, increment window size
    if (nums[right] % 2 == 1) {
      windowLen++;
    }

    // If window has too many odd elements, reduce/shrink it from the left
    if (windowLen > k) {
      left = mid + 1;
      mid = mid + 1;
      windowLen--;
      // Skip even elements while shrinking
      while (mid < nums.length && nums[mid] % 2 == 0) {
        mid++;
      }
    }

    // If window has exactly K odd elements, count all subarrays starting from 'left'
    if (windowLen == k) {
      count += (mid - left + 1);
    }

    // Move the window right
    right++;
  }

  return count;
};
