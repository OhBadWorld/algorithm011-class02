解法1，使用map
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let map = new Map();
    for(let i = 0; i < s.length; i++){
        if(map.has(s[i])){
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
        if(map.has(t[i])){
            map.set(t[i], map.get(t[i]) - 1);
        } else {
            map.set(t[i], -1);
        }
    }
    for (const letter of map){
        if(letter[1] !== 0){
            return false;
        }
    }
    return true;
};

解法2，暴力破解
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    return s.split('').sort().join('') === t.split('').sort().join('');
};
