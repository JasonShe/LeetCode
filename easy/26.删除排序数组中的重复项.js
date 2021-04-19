/**
 * 删除一个排序数组中的重复项
 * @description 不要使用额外的数组空间，必须在原地修改数组并使用 O(1) 额外空间完成
 * @param nums 有序重复数组
 */
const removeDuplicates = function(nums) {
  const len = nums.length;

  if (len === 0) return nums;

  let i = 0;
  for (let j = 1; j < len; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return nums.slice(0, i + 1);
};
