//pass the pillow
//6th-july-2024


var passThePillow = function (n, time) {
    let person = 1, dir = 1
    for (let i = 0; i < time; i++) {
        if (person == 1) dir = 1
        if (person == n) dir = -1
        person += dir
    }
    return person

};
