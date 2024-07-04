//Merge Nodes in Between Zeros
//4th-july-2024
//linkedlist
var mergeNodes = function (head) {
    let prev = head, cur = head.next

    while (cur) {

        if (cur.val == 0) {
            if (!cur.next) {
                prev.next = null
            }
            prev = cur
        } else {
            prev.val += cur.val
            prev.next = cur.next

        }
        cur = cur.next
    }
    return head
};
