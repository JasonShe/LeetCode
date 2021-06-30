/**
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
 */

/**
 * @description: 模拟: 按照走的路径模拟
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder_walk = function(matrix) {
  // 判空
  if (!matrix.length || !matrix[0].length) {
    return [];
  }

  const rows = matrix.length; // 矩阵行
  const columns = matrix[0].length; // 矩阵列
  const visited = new Array(rows).fill(0).map(() => new Array(columns).fill(false)); // 辅助数组，代表是否访问过节点
  const total = rows * columns; // 总数量
  const order = new Array(total).fill(0); // 返回的顺序数组

  let directionIndex = 0, row = 0, column = 0;
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  for (let i = 0; i < total; i++) {
    order[i] = matrix[row][column];
    visited[row][column] = true;

    const nextRow = row + directions[directionIndex][0];
    const nextColumn = column + directions[directionIndex][1];

    if (
      !(
        0 <= nextRow
        && nextRow < rows
        && 0 <= nextColumn
        && nextColumn < columns
        && !(visited[nextRow][nextColumn])
      )
    ) {
      directionIndex = (directionIndex + 1) % 4;
    }

    row += directions[directionIndex][0];
    column += directions[directionIndex][1];
  }
  return order;
};

/**
 * @description: 按层模拟: 按照走的路径模拟，将矩阵看成若干层，首先打印最外层的元素，其次打印次外层的元素，直到打印最内层的元素
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder_simulation = function(matrix) {
  if (!matrix.length || !matrix[0].length) {
      return [];
  }

  const rows = matrix.length, columns = matrix[0].length;
  const order = [];
  let left = 0, right = columns - 1, top = 0, bottom = rows - 1;
  while (left <= right && top <= bottom) {
      for (let column = left; column <= right; column++) {
          order.push(matrix[top][column]);
      }
      for (let row = top + 1; row <= bottom; row++) {
          order.push(matrix[row][right]);
      }
      if (left < right && top < bottom) {
          for (let column = right - 1; column > left; column--) {
              order.push(matrix[bottom][column]);
          }
          for (let row = bottom; row > top; row--) {
              order.push(matrix[row][left]);
          }
      }
      [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
  }
  return order;
};
