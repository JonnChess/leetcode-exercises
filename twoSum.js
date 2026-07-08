// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function(nums, target) {
    const mapa = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (mapa.has(nums[i])) {
            return [mapa.get(nums[i]), i]
        }
        mapa.set(target - nums[i], i)
    }
};

let result = twoSum([2, 7, 11, 15], 9);
console.log(result);

