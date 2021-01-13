/**
 * @description: 给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符组成的列表。
 * @description: 例如 -> ['bella', 'label', 'roller']
 * @param {string[]} A
 * @return {string[]}
 */
const commonChars = function(A) {
  const ans = [], word = A[0];

  for (const s of word) {
    // every 测试一个数组内所有元素是否都能通过传入的函数，返回 Boolean
    if (A.every(m => m.includes(s))) {
      // console.log(s); e l l
      A = A.map(m => m.replace(s, ''));
      console.log(A);
      ans.push(s);
    }
  }

  return ans;
};

const array = ['bella', 'label', 'roller'];
const res = commonChars(array);

// console.log(res);

/**
 * 解体思路
 *    过滤、筛选一样，每次把符合条件的筛选出来，放到 ans 中
 */
