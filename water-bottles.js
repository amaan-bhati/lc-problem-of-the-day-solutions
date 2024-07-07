//water bottles
//7th-july-2024

var numWaterBottles = function (numBottles, numExchange) {
    let rem = 0;
    let count = 0;
    while (numBottles > 0) {
        count += numBottles;
        let num = numBottles + rem
        numBottles = Math.floor((numBottles + rem) / numExchange)
        rem = num % numExchange;
    }
    return count
};
