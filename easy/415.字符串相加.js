/*
 * @Author: Mr.SheYing
 * @Date: 2020-12-29 17:00:26
 * @LastEditTime: 2020-12-29 17:48:51
 * @LastEditors: Mr.SheYing
 * @Description: 给定两个字符串形式的非负整数 num1 和 num2，计算它们的和
 * @Description：不能使用任何内建 BigInteger 库，不能直接将输入的字符串转换为整数形式
 */

const addStrings = function (num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let add = 0; // 用来标识是否进位
  let arr = [];
  while(i >= 0 || j >= 0 || add !== 0) {
    let x = i >= 0 ? num1[i] - '0' : 0;
    let y = j >= 0 ? num2[j] - '0' : 0;
    let result = x + y + add;
    arr.push(result % 10);
    add = Math.floor(result / 10);
    i--;
    j--;
  }
  // 计算完成，需要反转数组
  return arr.reverse().join('');
};

// 【竖式加法】：小学数学中笔算的加法
