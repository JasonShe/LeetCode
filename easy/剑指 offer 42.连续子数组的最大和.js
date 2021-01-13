/**
 * @description: 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
 * @description: 要求时间复杂度为 O(n)
 */

const maxSubArray = function (nums) {
  let ans = nums[0], len = nums.length;
  for (let i = 1; i < len; i++) {
    num[i] += Math.max(nums[i - 1], 0);
    ans = Math.max(ans, nums[i]);
  }

  return ans;
};
