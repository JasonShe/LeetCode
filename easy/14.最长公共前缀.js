/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 */

/**
 * 获取两个字符串公共前缀
 * @param {string} s1 
 * @param {string} s2 
 * @return {string}
 */
function getCommonPrefix(s1, s2) {
  const len1 = s1.length;
  const len2 = s2.length;
  const len = Math.min(len1, len2);
  let index = 0;

  while (index < len && s1.charAt(index) === s2.charAt(index)) {
    index++;
  }

  return s1.substring(0, index);
}

/**
 * @description: 使用扫描遍历方法，依次比较两个数组成员，得到公共前缀，更新存储前缀的变量
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix_Scan = function (strs) {
  if (!strs || strs.length === 0) {
    return '';
  }

  let prefix = strs[0];
  let len = strs.length;

  for (let i = 0; i < len; i++) {
    prefix = getCommonPrefix(prefix, strs[i]);

    if (prefix.length === 0) {
      break;
    }
  }

  return prefix;
};

console.log('------------------------------------------------ 方法分割线 ---------------------------------------------------------');

const commonPrefix = function(lcpLeft, lcpRight) {
  let len = Math.min(lcpLeft.length, lcpRight.length);

  for (let i = 0; i < len; i++) {
    if (lcpLeft.charAt(i) !== lcpRight.charAt(i)) {
      return lcpLeft.substring(0, i);
    }
  }

  return lcpLeft.substring(0, len);
}

const getCommonPartPrefix = function (strs, start, end) {
  if (start === end) {
    return strs[start];
  }

  const mid = Math.floor((start + end) / 2) + start;
  const lcpLeft = getCommonPartPrefix(strs, start, mid);
  const lcpRight = getCommonPartPrefix(strs, mid + 1, end);

  return commonPrefix(lcpLeft, lcpRight);
}

/**
 * @description: 使用分治思想，讲 n 个字符串求公共前缀转化为求 2 个字符串的公共前缀
 * @param {string[]} strs 
 * @return {string}
 */
const longestCommonPrefix_Divide = function (strs) {
  if (!strs || strs.length === 0) {
    return '';
  }

  return getCommonPartPrefix(strs, 0, strs.length - 1);
}

console.log('------------------------------------------------ 方法分割线 ---------------------------------------------------------');

const isCommonPrefix = function (strs, length) {
  const str0 = strs[0].substring(0, length);
  const count = strs.length;

  for (let i = 1; i < count; i++) {
    const str = strs[i];
    for (let j = 0; i < length; j++) {
      if (str0.charAt(j) !== str.charAt(j)) {
        return false;
      }
    }
  }

  return true;
}

/**
 * @description: 二分查找，与分治最大的区别是取一半丢掉另一半
 * @param {string[]} strs 
 * @return {string}
 */
const longestCommonPrefix_half = function (strs) {
  if (!strs || strs.length === 0) {
    return '';
  }

  let minLength = Number.MAX_SAFE_INTEGER;
  strs.forEach(str => Math.min(minLen, str.length));

  let low = 0;
  let high = minLength;
  while (low < high) {
    let mid = Math.floor((low + high) / 2) + low;
    if (isCommonPrefix(strs, mid)) {
      low = mid;
    } else {
      high = mid - 1;
    }
  }

  return strs[0].substring(0, low);
}
