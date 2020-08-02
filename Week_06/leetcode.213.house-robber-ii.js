/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var n = nums.length;
    if(n == 1){
        return nums[0];
    }else if(n == 0){
        return 0;
    }
    function dpGO(nums){
       var prevMax = 0;
       var currMax = 0;
       for(var i = 0;i < nums.length;i++){
           var tmp = currMax;
           currMax = Math.max(currMax,prevMax+nums[i]);
           prevMax = tmp;
       }
       return currMax;
    }
    var need1 = dpGO(nums.slice(1));
    var need2 = dpGO(nums.slice(0,nums.length-1));
    return Math.max(need1,need2);
};