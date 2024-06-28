var maximumImportance = function (n, roads) {
    let arr = new Array(n).fill(0)

    for (let i = 0; i < roads.length; i++) {
        let leftCity = roads[i][0]
        let rightCity = roads[i][1]
        arr[leftCity]++;
        arr[rightCity]++;
    }

    arr.sort((a, b) => a - b)

    let importance = 0
    for (let i = 0; i < arr.length; i++) {
        importance += (arr[i] * (i + 1))
    }

    return importance
}
