//balance-a-binary-search-tree
//26th-july-2024
//binary-search-tree/recurrsion


var balanceBST = function (root) {//function for inorder traversal
    const inOrder = (root) => {
        if (!root) return [];// // base case: empty subtree returns an empty array
        return [...inOrder(root.left), root.val, ...inOrder(root.right)];//combine left subtree values, current node value, and right subtree values
    };
 //function to build a balanced BST from a sorted array
    const tree = (arr, l, r) => {
        if (l >= r) return null;//base case: empty subarray returns null node
        const mid = Math.floor((l + r) / 2);//find the middle index
        return new TreeNode(arr[mid], //create a node with the middle element
                        tree(arr, l, mid),  //recursively build left subtree
                        tree(arr, mid + 1, r)); //recursively build right subtree
  };

    const sortedArr = inOrder(root);  //get the in-order traversal of the input BST as a sorted array
    return tree(sortedArr, 0, sortedArr.length);//build a balanced BST from the sorted array using the tree function
};

 
