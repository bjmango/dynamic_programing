// Solution3: Tabulation
// time: O(m * n)
// space: O(m * n)
const gridTraveler = (m, n) => {
  table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
  table[1][1] = 1;

  for (let row = 0; row <= m; row++) {
    for (let col = 0; col <= n; col++) {
      const current = table[row][col];
      if (row + 1 <= m) table[row + 1][col] += current;
      if (col + 1 <= n) table[row][col + 1] += current;
    }
  }
  return table[m][n];
};

console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(3, 2)); // 3
console.log(gridTraveler(3, 3)); // 6
console.log(gridTraveler(18, 18)); // 2333606220
// Solution2: Recursion + Memoization
// const gridTraveler = (m, n, memo = {}) => {
//   const key = m + ',' + n;
//   if (key in memo) return memo[key];
//   if (m === 1 && n === 1) return 1;
//   if (m === 0 || n === 0) return 0;
//   memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
//   return memo[key];
// };

// Solution1: Recursive
// const gridTraveler = (m, n) => {
//   if (m === 1 || n === 1) return 1;
//   if (m === 0 || n === 0) return 0;
//   return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
// };

// console.log(gridTraveler(1, 1)); // 1
// console.log(gridTraveler(2, 3)); // 3
// console.log(gridTraveler(3, 2)); // 3
// console.log(gridTraveler(3, 3)); // 6
// console.log(gridTraveler(18, 18)); // 2333606220
