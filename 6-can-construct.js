// Solution3: Tabulation
// m: length of target string
// n: length of the workBank Array
// time: O(m * n * m)   O(m^2 * n)
// space: O(m)
const canConstruct = (target, wordBank) => {
  let table = Array(target.length + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= target.length; i++) {
    if (table[i] === true) {
      for (let word of wordBank) {
        // if the word matches the characters starting at position i
        if (target.slice(i, i + word.length) === word) {
          // if (target.slice(i).indexOf(word) === 0) {
          table[i + word.length] = true;
        }
      }
    }
  }
  return table[target.length];
};

// Solution2: Recursion + Memoization
// m: length of target string
// n: number of word in wordBank
// time: O(n * m^2) :
//  1. target string has m options (key)
//  2. memo stores n results for each key
//  3. .slice() time complexity is m
// space: O(m^2):
//  1. m levels tree
//  2. m suffix storage space
// const canConstruct = (target, wordBank, memo = {}) => {
//   if (target in memo) return memo[target];
//   if (target === '') return true;

//   for (let word of wordBank) {
//     if (target.indexOf(word) === 0) {
//       const suffix = target.slice(word.length);
//       if (canConstruct(suffix, wordBank, memo) === true) {
//         memo[target] = true;
//         return true;
//       }
//     }
//   }
//   memo[target] = false;
//   return false;
// };

// Solution1: brute force
// m: length of target string
// n: number of word in wordBank
// time: O(n^m * m) : m levels tree, each level n branching, .slice() is m time complexity
//        typically, time complexity is number of nodes on solution tree + expensive statements time cost
// space: O(m^2): m levels tree
//        typically, space complexity is level of the tree + expensive statements space cost

// const canConstruct = (target, wordBank) => {
//   if (target === '') {
//     return true;
//   }

//   for (let word of wordBank) {
//     if (target.indexOf(word) === 0) {
//       const suffix = target.slice(word.length);
//       if (canConstruct(suffix, wordBank) === true) {
//         return true;
//       }
//     }
//   }
//   return false;
// };
console.log(canConstruct('abcdef', ['ab', 'abc', 'def'])); // true
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // false
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // true
console.log(
  canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
  ])
); // false
