//Remove Max Number of Edges to Keep Graph Fully Traversable
//30th-june-2024
//graph and union set with unionFind class

var maxNumEdgesToRemove = function (n, edges) {
    // create two UnionFind, one for Alice (auf) and one for Bob (buf)
    const auf = new UnionFind(n);
    const buf = new UnionFind(n);
    
  // variable to store the number of removable edges (res)
    let res = 0;
// iterate through each edge in the edges array
    for (const edge of edges) {
      // handle both-way edges (type 3)
    if (edge[0] === 3) {
      // try to union the nodes in Alice's UnionFind (auf)
      if (auf.union(edge[1], edge[2]) === 1) {
        // if successful, union the same nodes in Bob's UnionFind (buf)
        buf.union(edge[1], edge[2]);
        // increment removable edges count (res)
        res += 1;
      }
        }
        if (auf.is_connected() && buf.is_connected()) {
            return edges.length - res;
        }
    }

  for (const edge of edges) {
    // handle Alice's edges (type 1)
    if (edge[0] === 1) {
      // try to union the nodes in Alice's UnionFind (auf)
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
// iterate through edges again
  for (const edge of edges) {
    // handle Alice's edges (type 1)
    if (edge[0] === 1) {
      // try to union the nodes in Alice's UnionFind (auf)
      res += auf.union(edge[1], edge[2]);
    }
    // handle Bob's edges (type 2)
    if (edge[0] === 2) {
      // try to union the nodes in Bob's UnionFind (buf)
      res += buf.union(edge[1], edge[2]);
    }

class UnionFind {
   // constructor to initialize the UnionFind data structure
  constructor(n) {
    // parent array to store parent nodes for each node
    this.parent = Array.from({ length: n + 1 }, (_, i) => i);
    // number of nodes in the graph (used for connected check)
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
        // union two nodes (merge sets)
  union(x, y) {
    // find the root parents of x and y
    const px = this.find(x);
    const py = this.find(y);

    // if they are already in the same set, do nothing and return 0
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
