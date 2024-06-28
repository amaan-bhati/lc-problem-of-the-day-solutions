//maximum-total-importance-of-roads
//2-d-array
//28th-june-2024

var maximumImportance = function (n, roads) {
  //initialize an array to store the degree for each city
    let arr = new Array(n).fill(0)
  //loop through each road in the 'roads' array
    for (let i = 0; i < roads.length; i++) {
    //extract the city indices from the current road
        let leftCity = roads[i][0]
        let rightCity = roads[i][1]   
    //increment the degree of both cities connected by the road
        arr[leftCity]++;
        arr[rightCity]++;
    }
  //sort the 'arr' array in ascending order based on the degree
    arr.sort((a, b) => a - b)
  //initialize a variable to store the total importance
    let importance = 0
  //loop through the sorted 'arr' array
    for (let i = 0; i < arr.length; i++) {   
    //calculate the importance for each city based on its degree and position
        importance += (arr[i] * (i + 1)) // importance = degree * (1-based index + 1)
    }
  //return the total importance of all roads
    return importance
}
