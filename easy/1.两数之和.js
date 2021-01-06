/*
 * @Author: Mr.SheYing
 * @Date: 2020-12-29 18:50:15
 * @LastEditTime: 2020-12-29 19:11:44
 * @LastEditors: Mr.SheYing
 * @Description: 给定一个整数数组 nums 和一个目标值 target，在该数组中找出和为目标值得那两个整数，并返回听他们的数组下标
 * @Description: 同一个元素不能使用两遍
 */

const twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }

  return 
}
