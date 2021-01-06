/**
 * @description: 字符串压缩
 * @description: 字符串 aabcccccaaa -> a2b1c5a3，若压缩后的字符串没有变短，则返回原先的字符串
 * @param {string} S
 * @return {string}
 */
const compressString = function(S) {
  let i = 0, j = i + 1;
  let str = '';
  const len = S.length;

  while(i < len - 1 && j < len) {
    if (S[i] === S[j]) {
      j++;
    } else {
      str += `${S[i]}${j - i}`;
      i = j;
    }
  }

  // 执行完循环后还需要做一次处理，类似最后又一个单独或两个单独的情况
  str += `${S[i]}${i === j ? 1 : (j - i)}`;

  return str.length <= len ? str : S;
};

/**
 * 解题思路
 *    双指针法
 */
