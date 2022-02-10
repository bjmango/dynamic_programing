// Solution3: Tabulation

const countConstruct = (target, wordBank) => {
  let table = Array(target.length + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        // Add the current index value to future slot. number of ways.
        table[i + word.length] += table[i];
      }
    }
  }
  console.log(table);
  return table[target.length];
};

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); //2
// console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); //1
// console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk'])); //0
// console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); //4
// console.log(
//   countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])
// ); //0
// Solution2: Recursion + Memoization
// m: length of target string
// n: number of word in wordBank
// time: O(n * m^2)
// space: O(m^2)
// const countConstruct = (target, wordBank, memo = {}) => {
//   if (target in memo) return memo[target];
//   if (target == '') return 1;

//   let totalCount = 0;

//   for (let word of wordBank) {
//     if (target.indexOf(word) == 0) {
//       const numWaysForRest = countConstruct(target.slice(word.length), wordBank, memo);
//       totalCount += numWaysForRest;
//     }
//   }
//   memo[target] = totalCount;
//   return totalCount;
// };

// Solution1: Brute Force
// m: length of target string
// time: O(n^m * m)
// space: O(m^2)
//

// const countConstruct = (target, wordBank) => {
//   if (target == '') return 1;

//   let totalCount = 0;

//   for (let word of wordBank) {
//     if (target.indexOf(word) == 0) {
//       const numWaysForRest = countConstruct(target.slice(word.length), wordBank);
//       totalCount += numWaysForRest;
//     }
//   }
//   return totalCount;
// };

// console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); //2
// console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); //1
// console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk'])); //0
// console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); //4
// console.log(
//   countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])
// ); //0
