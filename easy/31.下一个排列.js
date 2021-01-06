/*
 * @Author: Mr.SheYing
 * @Date: 2020-12-11 08:51:28
 * @LastEditTime: 2020-12-11 09:53:40
 * @LastEditors: Mr.SheYing
 * @Description: LeetCode 31
 */

 /**
  * 题目描述
  *   实现获取 下一个排列 的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列
  *   如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）
  *   必须 原地 修改，只允许使用额外常数空间。
  * 
  * 示例 1：
  *   输入：nums = [1,2,3]
  *   输出：[1,3,2]
  * 示例 2：
  *   输入：nums = [3,2,1]
  *   输出：[1,2,3]
  */

const nextPermutation = function(nums) {
  // 从后向前找到较小数
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= num[i + 1]) {
    i--;
  }

  // 若 i < 0，表示该序列是一个升序序列，则直接反转即可
  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[i] >= num[j]) {
      j--;
    }
    swap(nums, i, j);
  }

  // 反转数组
  reverse(nums, i + 1);

  function reverse(array, start) {
    let left = start, right = array.length - 1;
    while (left < right) {
      swap(array, left, right);
      left++;
      right--;
    }
  }

  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

/**
 * 解题思路
 *  方法：两遍扫描
 *    1. 将左边的【较小数】和右边的【最大数】交换
 *    2. 需要将【较小数】尽量靠右，而【较大数】尽可能小。交换后，将【较大数】右边数进行升序排列。这样可以保证变大的幅度尽可能小。
 */
