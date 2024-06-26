var balanceBST = function (root) {
    const inOrder = (root) => {
        if (!root) return [];
        return [...inOrder(root.left), root.val, ...inOrder(root.right)];
    };

    const tree = (arr, l, r) => {
        if (l >= r) return null;
        const mid = Math.floor((l + r) / 2);
        return new TreeNode(arr[mid], tree(arr, l, mid), tree(arr, mid + 1, r));
    };

    const sortedArr = inOrder(root);
    return tree(sortedArr, 0, sortedArr.length);
};
