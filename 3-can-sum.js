// Solution3: Tabulation
// m: targetSum
// n: length of numbers array
// time: O(m * n)
// space: O(m)
const canSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(false);

  table[0] = true;

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] === true) {
      for (let n of numbers) {
        table[i + n] = true;
      }
    }
  }
  return table[targetSum];
};

// Solution2: Recursive + Memoization

// m: targetSum
// n: numbers length
// time: O(n * m), memo has m nodes, and each node will have n possible branches. so the time complexity will be O(m * n)
// space: O(m) - height of the tree is m. Normally, the recursive code complexity is the height of the tree

// const canSum = (targetSum, numbers, memo = {}) => {
//   if (targetSum in memo) return memo[targetSum];
//   if (targetSum === 0) return true;
//   if (targetSum < 0) return false;

//   for (let num of numbers) {
//     const remainder = targetSum - num;
//     if (canSum(remainder, numbers, memo) === true) {
//       memo[targetSum] = true;
//       return true;
//     }
//   }
//   memo[targetSum] = false;
//   return false;
// };

// Solution1: Recursive
// m: targetSum
// n: numbers length
// time: O(n^m)
// space: O(m)

// const canSum = (targetSum, numbers) => {
//   if (targetSum === 0) return true;
//   if (targetSum < 0) return false;

//   for (let num of numbers) {
//     const remainder = targetSum - num;
//     if (canSum(remainder, numbers) === true) {
//       return true;
//     }
//   }
//   return false;
// };

console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); // true
console.log(canSum(300, [7, 14])); // false
