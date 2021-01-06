/*
 * @Author: Mr.SheYing
 * @Date: 2020-12-30 14:43:39
 * @LastEditTime: 2020-12-30 17:25:32
 * @LastEditors: Mr.SheYing
 * @Description: 给定一个字符串 s，计算具有相同数量 0 和 1 的非空（连续）子字符串的数量，并且这些子字符串中的所有 0 和 1 都是组合在一起的
 * @Description: 重复出现的子串要计算它们出现的次数
 */

const countBinarySubstrings = function(s) {
  let ptr = 0, n = s.length, last = 0, ans = 0;

  while(ptr < n) {
    const c = s.charAt(ptr);
    let count = 0;
    while(ptr < n && s.charAt(ptr) === c) {
      ptr++;
      count++;
    }
    ans += Math.min(count, last);
    last = count;
  }

  return res;
}

/**
 * 解题思路
 *    1）按照 0 和 1 分组统计重复次数
 *    2）比较相邻分组统计次数，取最小值即为一个答案
 */
