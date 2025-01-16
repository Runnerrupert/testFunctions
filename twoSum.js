const twoSum = function (nums, target) {
    let hashMap = {};

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (complement in hashMap) {
            return { index_1: hashMap[complement], index_2: i };
        } else {
            hashMap[nums[i]] = i;
        }
    }
    return { success: false, message: 'No solution found' };
}

console.log(twoSum([3, 6, 4, 8, 12, 7, 1, 9], 8)); 