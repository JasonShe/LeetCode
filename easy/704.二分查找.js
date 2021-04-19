/**
 * @description: 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target 
 * @description: 写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  let left = 0;
  let right = nums.length;
  let pivot;

  while (left <= right) {
    // 计算中间值
    pivot = Math.floor((left + right) / 2);

    if (target === nums[pivot]) {
      return pivot;
    }

    if (target < nums[pivot]) {
      right = pivot - 1;
    } else {
      left = pivot + 1;
    }
  }

  return -1;
};
