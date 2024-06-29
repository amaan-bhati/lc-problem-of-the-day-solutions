//All Ancestors of a Node in a Directed Acyclic Graph
//graph, recursion
//29th-june-2024

var getAncestors = function (n, edges) {
    let ancestors = [], shallowAncestors = [];
    for (let i = 0; i < edges.length; i++) {
        shallowAncestors[edges[i][1]] = shallowAncestors[edges[i][1]] ?
            shallowAncestors[edges[i][1]].concat(edges[i][0]) :
            [edges[i][0]];
    }
    for (let i = 0; i < n; i++) {
        ancestors[i] = [...findAllAncestors(shallowAncestors, i)].sort((a, b) => { return a - b });
    }

    return ancestors;

    function findAllAncestors(shallowAncestors, nodeIndex, nodeAncestors = new Set(), seenNodes = new Set()) {
        if (!shallowAncestors[nodeIndex]) {
            return nodeAncestors;
        }

        shallowAncestors[nodeIndex].forEach((a) => {
            nodeAncestors.add(a);
            if (!seenNodes.has(a)) {
                nodeAncestors = findAllAncestors(shallowAncestors, a, nodeAncestors, seenNodes);
                seenNodes.add(a);
            }
        })
        return nodeAncestors;
    }
};
