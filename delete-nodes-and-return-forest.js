var delNodes = function (root, to_delete) {
    let roots = [];
    let helper = function (root, isRoot) {
        if (!root) return null;
        let shouldDelete = to_delete.includes(root.val);
        if (isRoot && !shouldDelete) roots.push(root);
        root.left = helper(root.left, shouldDelete);
        root.right = helper(root.right, shouldDelete);
        return shouldDelete ? null : root;
    }
    helper(root, true);
    return roots;
};
