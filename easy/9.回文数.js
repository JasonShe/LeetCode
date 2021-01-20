/**
 * @description: 判断一个整数是否是回文数。回文数是指正序（从左到右）和倒序（从右到左）读都是一样的整数。
 */

const isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  // 反转一半过程
  let revertedNumber = 0;
  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + x % 10;
    x = Math.floor(x / 10);
  }

  // 当 x 为偶数长度时，不需要去除中间的那一位，可直接比较
  // 当 x 为奇数长度时，需要去除反转后数字的最后一位，即 x 的中间那一位
  return x === revertedNumber || x === Math.floor(revertedNumber / 10);
};

/**
 * 解题思路：
 *    1. 所有的负数一定不是回文数
 *    2. 个位若为 0 则一定不是回文数
 *    3. 可以反转一半，若前一半和后一半反转相同，则为回文数
 */
