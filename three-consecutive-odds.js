//three consecutive odds
//1st-july-2024
//modulo-operator
var threeConsecutiveOdds = function (arr) {
     // initialize a counter to track consecutive odd numbers (starts at 0).
    let count = 0;
    // check if the current number is odd using the modulo operator.
    for (let num of arr) {
        if (num % 2 !== 0) {
             // increment the counter if the number is odd.
            count++;
              // if the counter reaches 3, we found three consecutive odd numbers, return true.
            if (count === 3) {
                return true;
            }
        } else {
            // reset the counter to 0 if the current number is even.
            count = 0;
        }
    }
    
  // if the loop finishes without reaching a count of 3, there are no three consecutive odd numbers, return false.
    return false;
};


