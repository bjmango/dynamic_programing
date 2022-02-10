// 8. bestConstruct
// =======================================================================================
// 7. countConstruct
// 7.1 Recursive + Memoization
const countConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return 1;

  let totalCount = 0;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const waysOfSuffix = countConstruct(suffix, wordBank, memo);
      totalCount += waysOfSuffix;
    }
  }

  memo[target] = totalCount;
  return totalCount;
};
// 7.2 Tabulation
// const countConstruct = (target, wordBank) => {
//   const table = Array(target.length + 1).fill(0);
//   table[0] = 1;

//   for (let i = 0; i <= target.length; i++) {
//     for (let word of wordBank) {
//       if (table[i] !== 0) {
//         if (target.slice(i, i + word.length) === word) {
//           table[i + word.length] += table[i];
//         }
//       }
//     }
//   }
//   return table[target.length];
// };

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); //2
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); //1
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk'])); //0
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); //4
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])); //0
// =======================================================================================
// 6. canConstruct
// 6.1 Recursion + Memoization
// const canConstruct = (target, wordBank, memo = {}) => {
//   if (target in memo) return memo[target];
//   if (target === '') return true;

//   for (let word of wordBank) {
//     if (target.indexOf(word) === 0) {
//       const suffix = target.slice(word.length);
//       if (canConstruct(suffix, wordBank, memo)) {
//         memo[target] = true;
//         return true;
//       }
//     }
//   }
//   memo[target] = false;
//   return false;
// };

// 6.2 Tabulation
// const canConstruct = (target, wordBank) => {
//   let table = Array(target.length + 1).fill(false);
//   table[0] = true;

//   for (let i = 0; i <= target.length; i++) {
//     if (table[i] === true) {
//       for (let word of wordBank) {
//         if (target.slice(i, i + word.length) === word) {
//           table[i + word.length] = true;
//         }
//       }
//     }
//   }
//   return table[target.length];
// };

// console.log(canConstruct('abcdef', ['ab', 'abc', 'def'])); // true
// console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // false
// console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // true
// console.log(
//   canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
//     'e',
//     'ee',
//     'eee',
//     'eeee',
//     'eeeee',
//     'eeeeee',
//   ])
// ); // false

// =======================================================================================

// 5. bestSum
// 5.1 Recursion + Memoization
// const bestSum = (targetSum, numbers, memo = {}) => {
//   if (targetSum in memo) return memo[targetSum];
//   if (targetSum === 0) return [];
//   if (targetSum < 0) return null;

//   let shortestCombination = null;

//   for (let n of numbers) {
//     const remainder = targetSum - n;
//     const remainderCombination = bestSum(remainder, numbers, memo);
//     if (remainderCombination !== null) {
//       const combination = [...remainderCombination, n];
//       if (shortestCombination === null || combination.length < shortestCombination.length) {
//         shortestCombination = combination;
//       }
//     }
//   }
//   memo[targetSum] = shortestCombination;
//   return memo[targetSum];
// };

// 5.2 Tabulation
// const bestSum = (targetSum, numbers) => {
//   table = Array(targetSum + 1).fill(null);
//   table[0] = [];

//   for (let i = 0; i <= targetSum; i++) {
//     if (table[i] !== null) {
//       for (let n of numbers) {
//         combination = [...table[i], n];
//         // * !table[i+n] gard the two cases: table[i+n] = null (default value in Array) AND table[i+n]=undefined (out of Array range)
//         if (!table[i + n] || table[i + n].length > combination.length) {
//           table[i + n] = combination;
//         }
//       }
//     }
//   }
//   return table[targetSum];
// };

// console.log(bestSum(7, [5, 3, 4, 7])); // [7]
// console.log(bestSum(8, [2, 3, 5])); // [3,5]
// console.log(bestSum(8, [1, 4, 5])); // [4,4]
// console.log(bestSum(100, [1, 2, 5, 25]));

// =======================================================================================

// 4. howSum
// 4.1 Recursion + Memoization
// const howSum = (targetSum, numbers, memo = {}) => {
//   if (targetSum in memo) return memo[targetSum];
//   if (targetSum === 0) return [];
//   if (targetSum < 0) return null;
//   for (let n of numbers) {
//     const remainder = targetSum - n;
//     // The howSum() function returns null or an Array
//     remainderResult = howSum(remainder, numbers, memo);
//     if (remainderResult !== null) {
//       memo[targetSum] = [...remainderResult, n];
//       return memo[targetSum];
//     }
//   }
//   memo[targetSum] = null;
//   return null;
// };

// 4.2 Tabulation
// const howSum = (targetSum, numbers) => {
//   table = Array(targetSum + 1).fill(null);
//   table[0] = [];

//   for (let i = 0; i <= targetSum; i++) {
//     for (let n of numbers) {
//       if (table[i] !== null) {
//         table[i + n] = [...table[i], n];
//       }
//     }
//   }
//   return table[targetSum];
// };

// console.log(howSum(7, [2, 3])); // [3,2,2]
// console.log(howSum(7, [5, 3, 4, 7])); // [4,3]
// console.log(howSum(7, [2, 4])); // null
// console.log(howSum(8, [2, 3, 5])); // [2,2,2,2]
// console.log(howSum(300, [7, 14])); // null

// =======================================================================================

// 3. canSum
// 3.1 Recursion + Memoization
// const canSum = (targetSum, numbers, memo = {}) => {
//   if (targetSum in memo) return memo[targetSum];

//   if (targetSum === 0) return true;
//   if (targetSum < 0) return false;

//   for (let n of numbers) {
//     const remainder = targetSum - n;
//     if (canSum(remainder, numbers, memo) === true) {
//       memo[targetSum] = true;
//       return true;
//     }
//   }
//   memo[targetSum] = false;
//   return false;
// };

// 3.2 Tabulation
// const canSum = (targetSum, numbers) => {
//   table = Array(targetSum + 1).fill(false);
//   table[0] = true;

//   for (let i = 0; i <= targetSum; i++) {
//     for (let n of numbers) {
//       if (table[i] === true) {
//         table[i + n] = true;
//       }
//     }
//   }
//   return table[targetSum];
// };
// console.log(canSum(7, [2, 3])); // true
// console.log(canSum(7, [5, 3, 4, 7])); // true
// console.log(canSum(7, [2, 4])); // false
// console.log(canSum(8, [2, 3, 5])); // true
// console.log(canSum(300, [7, 14])); // false

// =======================================================================================

// 2. gridTraveler
// 2.1 Recursion + Memoization
// const gridTraveler = (m, n, memo = {}) => {
//   const key = m.toString() + ',' + n.toString();
//   if (key in memo) return memo[key];
//   if (m === 1 && n === 1) return 1;
//   if (m === 0 || n === 0) return 0;

//   memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
//   return memo[key];
// };

// 2.2 Tabulation
// const gridTraveler = (m, n) => {
//   table = Array(m + 1)
//     .fill()
//     .map(() => Array(n + 1).fill(0));
//   table[1][1] = 1;
//   for (let row = 1; row <= m; row++) {
//     for (let col = 1; col <= n; col++) {
//       if (table[row][col] === 0) {
//         table[row][col] = table[row - 1][col] + table[row][col - 1];
//       }
//     }
//   }
//   return table[m][n];
// };
// console.log(gridTraveler(1, 1)); // 1
// console.log(gridTraveler(2, 3)); // 3
// console.log(gridTraveler(3, 2)); // 3
// console.log(gridTraveler(3, 3)); // 6
// console.log(gridTraveler(18, 18)); // 2333606220

// =======================================================================================
// 1- fib 2. Tabulation
// const fib = (n) => {
//   table = Array(n + 1).fill(0);
//   table[1] = 1;

//   for (let i = 2; i <= n; i++) {
//     table[i] = table[i - 1] + table[i - 2];
//   }
//   return table[n];
// };

// 1 - fib 1. Recursion + Memoization

// const fib = (n, memo = {}) => {
//   if (n in memo) return memo[n];
//   if (n == 0) return 0;
//   if (n == 1) return 1;

//   memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

//   return memo[n];
// };

// console.log(fib(2)); //1
// console.log(fib(3)); //2
// console.log(fib(4)); // 3
// console.log(fib(5)); //5
// console.log(fib(6)); //8
// console.log(fib(7)); //13
// console.log(fib(8)); //21
// console.log(fib(50)); //12586269025
