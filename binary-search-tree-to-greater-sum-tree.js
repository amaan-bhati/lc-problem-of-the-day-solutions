//binary-search-tree-to-greater-sum-tree
//25th-june-2024
//binary-search-tree

var bstToGst = function(root) {
    let sum = 0;

    let iterate = (node) => {
        //right
        if(node.right){ iterate(node.right); }

        //center
        sum += node.val;
        node.val = sum;

        //left
        if(node.left){ iterate(node.left); }
    }

    iterate(root);

    return root;
};
