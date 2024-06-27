//find-center-of-star-grap
//27th-june-2024
//graph

var findCenter = function (edges) {
    obj = {}

    for (edge of edges) {
        a = edge[0]
        b = edge[1]
        obj[a] ? obj[a]++ : obj[a] = 1
        obj[b] ? obj[b]++ : obj[b] = 1
        if (obj[a] && obj[a] > 1) return a
        if (obj[b] && obj[b] > 1) return b
    }
};
