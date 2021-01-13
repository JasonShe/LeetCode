/**
 * @description: 给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。
 * @description: 给定的字符串只含有小写英文字母，并且长度不超过 10000
 */

/**
 * 方法一：枚举法
 * 思路：长度为 n 的字符串 s 可以由它的一个长度为 n' 的子串 s' 重复多次构成
 *    1. n 一定是 n' 的倍数
 *    2. s' 一定是 s 的前缀
 *    3. 在 s' 之后每一个位置上的字符 s[i]，都需要与它之前的第 n' 个字符 s[i - n']相同
 * 
 * 优化点：因为子串至少需要重复一次，所以 n' 不会大于 n 的一半，只需在 [1, n/2]范围内枚举 n'
 */
const repeatedSubstringPatternWithEnum = function (s) {
  const len = s.length;

  // 因为至少需要重复一次，所以只需遍历一半长度即可
  for (let i = 0; i * 2 <= len; i++) {
    // 总串长度必然是子串长度的倍数
    if (len % i === 0) {
      let match = true;

      for (let j = i; j < len; j++) {
        if (s.charAt(j) !== s.charAt(j - i)) {
          match = false;
          break;
        }
      }

      if (match) {
        return true;
      }
    }
  }

  return false;
};

/**
 * 方法二：字符串匹配法
 * 思路：s 可以由多个长度为 n' 的子串 s' 组成
 *    1. 移除字符串 s 的前 n' 个字符，再将这些字符保持顺序添加到剩余字符串的末尾，那么字符串仍是 s
 *    2. 那么将两个 s 连在一起，并移除第一个和最后一个字符，那么得到的字符一定包含 s，即 s 是它的一个子串
 */
const repeatedSubstringPatternWithStr = function (s) {
  const newS = s + s, len = newS.length;
  return newS.substring(1, len - 1).includes(s);
};
