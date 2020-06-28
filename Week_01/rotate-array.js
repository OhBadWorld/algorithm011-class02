// 方法1、循环pop()并且unshift()，
var rotate = function(nums, k) {
    let i = 0
    while(i < k){
        nums.unshift(nums.pop())
        i++
    }
};



// 方法2、还可以splice()整个切下尾部的k个元素，使用...展开后再unshift()
var rotate = function(nums, k) {
    let len = nums.length
    return nums.unshift(...nums.splice(len-k,k))
};