/**
 * 题目描述
 * 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 * 
 * 测试案例
 * 5,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]
 * 6,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]
 */

// 第一种做法（最优解）
function Find (target, array) {
  const n = array.length,
      m = array[0].length;
  let row = n - 1,
      rol = 0;
  if (n === 0 && m === 0) {
      return false;
  }
  while (row >= 0 && rol <= m - 1) {
      if (target < array[row][rol]) {
          row--;
      } else if (target > array[row][rol]) {
          rol++;
      } else {
          return true;
      }
  }
  return false;
}
// 第二种做法：两层for循环
function Find(target, array)
{
    const rowNum = array.length;
    if (!rowNum) {
        return false;
    }
    const colNum = array[0].length;
    for(let i = 0; i < rowNum; i++) {
        for(let j = 0; j < colNum; j++) {
            if (array[i][j] === target) {
                return true;
            }
        }
    }
    return false;
}
// 第三种做法：二分查找
function Find(target, array)
{
    if (!array.length) {
      return false;
    }

    for(let i = 0; i < array.length; i++) {
        let low = 0;
        let high = array[i].length - 1;
        while (low <= high) {
            let mid = (low + high) / 2;
            if (target > array[i][mid]) {
                low = mid + 1;
            } else if (target < array[i][mid]) {
                high = mid - 1;
            } else {
                return true;
            }
        }
    }
    return false;
}
