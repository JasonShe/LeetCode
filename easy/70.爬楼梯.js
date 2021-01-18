/**
 * @description: 假设你正在爬楼梯，需要 n 阶你才能到达楼顶。
 * @description: 每次你可以爬 1 或 2 个台阶，你有多少种不同的方法可以爬到楼顶呢？
 * @description: 给定 n 是一个正整数
 */

const climbStairs = function (n) {
  let f = 1, s = 2, i = 1;

  while (i < n) {
    let t = f + s;
    f = s;
    s = t;
    i++;
  }

  return f;
};

/**
 * 解题思路：滚动数组法
 *    可以看出它是一个斐波那契数列问题，可以用递归的方式解决。
 *    为了优化递归，发现第 n 项只和前两项有关，所以我们可以每次记录前两项，像滚动数组一样求和
 */