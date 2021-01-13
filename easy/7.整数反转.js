/**
 * @description: 给出一个 32 位的有符号整数，需要将这个整数中每位上的数字进行反转
 * @description: 假设环境只能存储下 32 位的有符号整数
 */

const reverse = function (x) {
  let result = 0;

  while (x !== 0) {
    // 每一次取出 x 的末位数，拼到 result 上
    result = result * 10 + x % 10;
    
    // 去除 x 的最后一位，只保留整数部分
    x = (x / 10) | 0;
  }

  // 对超过 32 位的整数 安位或 转换结果不等于自身，可用作溢出判断
  return (result | 0) === result ? result : 0;
};

reverse(123);