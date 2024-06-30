var maxNumEdgesToRemove = function (n, edges) {
    const auf = new UnionFind(n);
    const buf = new UnionFind(n);
    let res = 0;

    for (const edge of edges) {
        if (edge[0] === 3) {
            if (auf.union(edge[1], edge[2]) === 1) {
                buf.union(edge[1], edge[2]);
                res += 1;
            }
        }
        if (auf.is_connected() && buf.is_connected()) {
            return edges.length - res;
        }
    }

    for (const edge of edges) {
        if (edge[0] === 1) {
            res += auf.union(edge[1], edge[2]);
        }
        if (edge[0] === 2) {
            res += buf.union(edge[1], edge[2]);
        }
        if (auf.is_connected() && buf.is_connected()) {
            return edges.length - res;
        }
    }
    return -1;
}


class UnionFind {
    constructor(n) {
        this.parent = Array.from({ length: n + 1 }, (_, i) => i);
        this.node_count = n;
    }

    find(x) {
        if (this.parent[x] === 0 || this.parent[x] === x) {
            return x;
        }
        this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
    }

    union(x, y) {
        const px = this.find(x);
        const py = this.find(y);

        if (px === py) {
            return 0;
        }
        this.parent[py] = px;
        this.node_count -= 1;
        return 1;
    }

    is_connected() {
        return this.node_count === 1;
    }
}
