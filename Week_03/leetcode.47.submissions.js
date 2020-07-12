/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if(nums.length < 2) return [nums];
    nums.sort((a,b) => a - b);
    function _perm(nums) {
      if(nums.length < 2) return nums;
      let res = [];
      for(let i = 0 ; i < nums.length ; i ++) {
        if(nums[i] === nums[i + 1]) continue;
        let start = nums[i];
        let remain = nums.slice(0, i).concat(nums.slice(i + 1));
        for(let end of _perm(remain)) {
          res.push([start].concat(end));
        }
      }
      return res;
    }
    return _perm(nums)
};