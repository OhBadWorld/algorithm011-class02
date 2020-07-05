/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    for(let i = 0; i < strs.length; i++){
        let key = strs[i].split('').sort().join('');
        if (map.has(key)) {
            let temp = map.get(key);
            temp.push(strs[i]);
            map.set(key, temp);
        } else {
            map.set(key, [strs[i]]);
        }
    }
    return Array.from(map.values());
};