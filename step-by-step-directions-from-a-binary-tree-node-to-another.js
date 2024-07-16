var getDirections = function (root, startValue, destValue) {
    let lcaNode = null

    findLCA(root, startValue, destValue)

    if (lcaNode.val === startValue) {
        return findPath(lcaNode, destValue, '')
    } else if (lcaNode.val === destValue) {
        let upPath = findPath(lcaNode, startValue, '')
        return 'U'.repeat(upPath.length)
    } else {
        let upPath = findPath(lcaNode, startValue, '')
        let downPath = findPath(lcaNode, destValue, '')
        return 'U'.repeat(upPath.length) + downPath
    }

    function findLCA(node, p, q) {
        if (!node) return false
        if (lcaNode) return false

        let curr = (node.val === p || node.val === q)
        let left = findLCA(node.left, p, q)
        let right = findLCA(node.right, p, q)

        if ((curr && (left || right)) || (left && right)) {
            lcaNode = node
            return false
        }

        return curr || left || right
    }

    function findPath(node, target, path) {
        if (!node) return ''
        if (node.val === target) return path

        let leftPath = findPath(node.left, target, path + 'L')
        if (leftPath) return leftPath

        return findPath(node.right, target, path + 'R')
    }
};
