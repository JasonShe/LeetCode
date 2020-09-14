/*
 * @Author: Mr.SheYing
 * @Date: 2020-09-05 11:25:48
 * @LastEditTime: 2020-09-05 11:32:51
 * @LastEditors: Mr.SheYing
 * @Description: 删除排序数组中的重复项
 */

/**
 * @description: 暴力法
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates1 = function(nums) {
	let lastValue = nums[nums.length - 1];
	for (let i = nums.length - 2; i >= 0; i--) {
		if (nums[i] === lastValue) {
			nums.splice(i, 1);
		} else {
			lastValue = nums[i];
		}
	}
	return nums.length;
};

/**
 * @description: 双指针法
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates2 = function(nums) {
	let left = 0, right = 1;
	for (; right < nums.length; right++) {
		if (nums[right] !== nums[left]) {
			left++;
			nums[left] = nums[right];
		}
	}
	return left + 1;
}

/**
 * 解题思路
 * 方法一：利用数组的 splice 方法删除数组元素
 * 方法二：利用双指针方法
 */

// test
const nums1 = [0,0,1,1,1,2,2,3,3,4];
const nums2 = [0,0,1,1,1,2,2,3,3,4];

console.time();
removeDuplicates1(nums1); // 8.156ms
console.log(nums1); // [ 0, 1, 2, 3, 4 ]
console.timeEnd();

console.time();
removeDuplicates2(nums2); // 0.536ms
console.log(nums2);
/**
 * [
 * 	0, 1, 2, 3, 4,
 * 	2, 2, 3, 3, 4
 * ]
 */
console.timeEnd();
