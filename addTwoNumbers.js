/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0)
    let current = head
    let carry = 0

    while(l1 || l2 || carry) {
        let num = 0
        let value1 = l1 ? l1.val : 0
        let value2 = l2 ? l2.val : 0

        num = value1 + value2 + carry
        carry = Math.floor(num/10)

        current.next = new ListNode(num % 10)
        current = current.next

        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null

    }

    return head.next
};

l1 = new ListNode(2, new ListNode(4, new ListNode(3)))

l2 = new ListNode(5, new ListNode(6, new ListNode(4)))

console.log(addTwoNumbers(l1, l2))

