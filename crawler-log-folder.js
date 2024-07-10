//Crawler log folder
//10th-july-2024
//array, string, stack


var minOperations = function (logs) {
    //initialize a variable 'answer' to keep track of the current depth in the directory structure.
  //a positive value indicates we're within subdirectories, while 0 represents the root directory.
    let answer = 0;
//loop through each log entry in the 'logs' array.
    for (let i of logs) {
        //check if the current log entry is "../" (move up one directory)
        if (i == "../") {
            //if 'answer' is greater than 0, we can move up a directory (decrease depth).
            if (answer > 0) {
                
                answer -= 1;
            }
        }
            //otherwise, attempting to move up from the root directory is a no-op.
        else if (i == "./") {
            //if the current log entry is "./" (stay in the current directory), we simply skip it.
            continue;
        }
            
        else {
        //any other log entry indicates moving down one directory (increase depth).
            answer += 1;
        }
    }
  //after iterating through all logs, 'answer' holds the minimum depth reached during navigation.

    return answer;
};
