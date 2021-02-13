/**
 * @description: 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * @description: 有效字符串需满足：
 * @description: 1. 左括号必须用相同类型的右括号闭合; 2. 左括号必须以正确的顺序闭合。
 * @param: {string} s 由括号组成的字符串
 */
const isValid = function(s) {
  const len = s.length;
  if (len % 2) return false;

  const map = new Map();
  map.set(')', '(');
  map.set(']', '[');
  map.set('}', '{');

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    let str = s[i];
    if (map.has(str)) {
      if (!stack.length || map.get(str) !== stack[stack.length - 1]) {
        return false;
      }
      stack.pop();
    } else {
      stack.push(str);
    }
  }

  return !stack.length;
}

console.log(isValid('([}}])'));
