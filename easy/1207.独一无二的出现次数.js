/*
 * @Author: Mr.SheYing
 * @Date: 2021-01-05 08:00:00
 * @LastEditTime: 2021-01-05 14:03:51
 * @LastEditors: Mr.SheYing
 * @Description: 给一个整数数组 arr，统计数组中每个数的出现次数
 * @Description: 如果每个数的出现次数都是独一无二的，返回 true，否则返回 false
 */

const uniqueOccurrences = function(arr) {
  const map = new Map();

  arr.forEach(n => {
    map.set(n, map.get(n) ? map.get(n) + 1 : 1);
  });

  const set = new Set(Array.from(map.values()));

  return map.size === set.size;
};

uniqueOccurrences([1, 2, 2, 1, 1, 3]); // true
uniqueOccurrences([1, 2]); // false

/**
 * 解题思路
 *    利用两个哈希表，map 存统计次数，set 用来判断是否存在重复
 */
