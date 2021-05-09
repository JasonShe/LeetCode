/**
 * @description: 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
 * 字符          数值
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * @description: 例外：4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX
 * @description: 给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内
 */

const strMap = new Map([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000]
]);

const romanToInt = function (s) {
  let sum = 0;
  let preSum = strMap.get(s[0]);
  const len = s.length;

  for (let i = 1; i < len; i++) {
    const num = strMap.get(s[i]);
    if (preSum < num) {
      sum -= preSum;
    } else {
      sum += preSum;
    }
    preSum = num;
  }

  sum += preSum;

  return sum;
};

// test
console.log(romanToInt('III'));
console.log(romanToInt('IV'));
