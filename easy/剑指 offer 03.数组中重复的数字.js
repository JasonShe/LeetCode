/**
 * @description: 找出数组中重复的数字。
 * @description: 在一个长度为 n 的数组 nums 里的所有数字都在 0 ~ n-1 的范围内。
 * @description: 数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。
 * @description: 请找出数组中任意一个重复的数字
 */

const findRepeatNumber = function (nums) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return nums[i];
    }
    set.add(nums[i]);
  }
};