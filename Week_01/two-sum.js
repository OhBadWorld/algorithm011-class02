/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let myMap = new Map();
    for(let i = 0; i< nums.length; i++) {
        if(myMap.has(target-nums[i]) == false){
            myMap.set(nums[i], i);
        }else {
            return [i, myMap.get(target-nums[i])];
        }
    }
};
// 使用javascript 中的 map对象