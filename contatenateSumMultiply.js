// You are given an integer n.

// Form a new integer x by concatenating all the non-zero digits of n in their original order. If there are no non-zero digits, x = 0.

// Let sum be the sum of digits in x.

// Return an integer representing the value of x * sum.

var sumAndMultiply = function(n) {
    let sum = 0
    numArr = n.toString().split('').map(Number)
    for (let i = 0; i < numArr.length; i++) {
        sum += numArr[i]
        if(numArr[i] == 0) {
            numArr.splice(i, 1)
            i--
        }
    }
    num = Number(numArr.join(''))
    result = num*sum

    return result
};

result = sumAndMultiply(10203004)
console.log(result)
