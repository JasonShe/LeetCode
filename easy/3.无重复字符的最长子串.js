/**
 * @description: 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 */

/**
 * @param {string} s 
 * @return {number}
 */
// 滑动窗口法
const lengthOfLongestSubstring = function(s) {
  if (s.length === 0) {
    return 0;
  }

  const map = new Map();
  let max = 0, left = 0;

  for (let i = 0; i < s.length; i++) {
    if (map.has(s.charAt(i))) {
      left = Math.max(left, map.get(s.charAt(i) + 1));
    }
    map.set(s.charAt(i), i);
    max = Math.max(max, i - left + 1);
  }

  return max;
};

// 双指针法
const lengthOfLongestSubstring = function() {
  if (s.length === 0) {
    return 0;
  }

  const occ = new Set();
  const len = s.length;
  let rk = -1; // 右指针，初始为 -1，还没移动
  let ans = 0; // 返回值

  for (let i = 0; i < len; i++) {
    if (i !== 0) {
      occ.delete(s.charAt(i - 1));
    }
    while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
      occ.add(s.charAt(rk + 1));
      rk++;
    }
    ans = Math.max(ans, rk - i + 1);
  }

  return max;
};
