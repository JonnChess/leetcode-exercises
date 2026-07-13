/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const parentheses = '() {} []'
    let i = 0

    for (let i = 0; i < s.length; i++){
      stack.push(s[i])

      let open = stack[stack.length - 2]
      let closed = stack[stack.length -1]

      let potencialIncluso = open + closed

      if(parentheses.includes(potencialIncluso)) {
        stack.pop()
        stack.pop()
      }
    }

    return stack.length === 0
};

console.log(isValid('()'))

