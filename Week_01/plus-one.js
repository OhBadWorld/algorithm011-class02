/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] != 9) {
            digits[i]++;
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    const result = [1, ...digits]; // es6 写法，...表示扩展
    // const result = [1].concat(digits);
    return result;
};