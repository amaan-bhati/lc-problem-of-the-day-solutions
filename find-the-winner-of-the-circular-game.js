//Find the winner of the circular game
//8th-july-2024
var findTheWinner = function (n, k) {
     //create an array of size n containing numbers from 1 to n
    let arr = Array.from({ length: n }, (_, i) => i + 1), toBeRemovedIndex = 0;
  //current length of the array
    let length = arr.length;
  //loop continues until only one element remains in the array
    while (length > 1) { 
    //calculate the index of the element to be removed considering wrapping around the array
        toBeRemovedIndex = (toBeRemovedIndex + k - 1) % (length); 
    //remove the element at the calculated index
        arr.splice(toBeRemovedIndex, 1);
    //update the length after removal
        length = arr.length;
    }
  //return the remaining element (the winner)
    return arr[0];
};
