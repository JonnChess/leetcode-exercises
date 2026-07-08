/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    // switch (s) {
    //     case "I":
    //         return 1
    //     case "V":
    //         return 5
    //     case "X":
    //         return 10
    //     case "L":
    //         return 50
    //     case "C":
    //         return 100
    //     case "D":
    //         return 500
    //     case "M":
    //         return 1000
    // }

    let nums = []
    for(let i = 0; i < s.length; i++) {
        switch (s.charAt(i)) {
            case 'I':
                nums[i] = 1
                break
            case 'V':
                nums[i] = 5
                break
            case 'X':
                nums[i] = 10
                break
            case 'L':
                nums[i] = 50
                break
            case 'C':
                nums[i] = 100
                break
            case 'D':
                nums[i] = 500
                break
            case 'M':
                nums[i] = 1000
                break
        }
    }
    console.log(nums)
    let sum = nums[nums.length - 1]
    for (let i = nums.length - 1; i > 0; i--) {
        if(nums[i] > nums[i - 1])
            sum -= nums[i - 1]
        else if (nums[i] === nums[i-1])
            sum += nums[i - 1]
        else
            sum += nums[i - 1]
        console.log(sum)
    }

    return sum
};

let result = romanToInt("C")

console.log(result)

