/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.split(/\s+/).map(val => val.split('').reverse().join('')).join(' ');
};
