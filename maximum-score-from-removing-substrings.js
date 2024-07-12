//maximum score from removing substring
//12th-july-2024
//String, stack, greedy
var maximumGain = function (s, x, y) {
  // determine the order of 'x' and 'y' based on their potential score contribution
  const [first, second] = x > y ? ['ab', 'ba'] : ['ba', 'ab'];  // destructuring assignment
  // destructure again to store the higher and lower scoring sequences
  const [highScore, lowScore] = x > y ? [x, y] : [y, x];

  let score = 0;
  let stack = [];

  // iterate through each character in the string 's'
  for (let char of s) {
    // check if the stack is not empty and the last character combined with the current
    // character forms the 'first' sequence (higher scoring)
    if (stack.length && stack[stack.length - 1] + char === first) {
      stack.pop();  // remove the last character from the stack
      score += highScore;  // update score with the higher scoring sequence
    } else {
      stack.push(char);  // if not a match, push the current character onto the stack
    }
  }

  let newStack = [];  // create a new stack to handle the remaining characters
  // iterate through the characters remaining in the stack after processing 's'
  for (let char of stack) {
    // check if the new stack is not empty and the last character combined with the current
    // character forms the 'second' sequence (lower scoring)
    if (newStack.length && newStack[newStack.length - 1] + char === second) {
      newStack.pop();  // remove the last character from the new stack
      score += lowScore;  // update score with the lower scoring sequence
    } else {
      newStack.push(char);  // if not a match, push the character onto the new stack
    }
  }

  return score;
};
