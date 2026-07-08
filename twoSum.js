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

