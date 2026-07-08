// Given an integer x, return true if x is a palindrome, and false otherwise.

var isPalindrome = function(x) {

    let array = x.toString().split('').map(Number)
    let i = 0, j = array.length - 1

    do {
        if(array[i] != array[j])
            return false
        i++
        j--
    } while (i < array.length/2)

    return true
};

let result = isPalindrome(123)
console.log(result)


