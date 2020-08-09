/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let arr = new Array(n);
    for (let i = 0; i <= n; i++) {
        if (i < 3) {
            arr[i - 1] = i;
        } else {
            arr[i - 1] = arr[i - 2] + arr[i -3];
        }
    }
    return n <= 0 ? 0 : arr[n - 1];
};