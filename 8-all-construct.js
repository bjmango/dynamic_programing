// solution3: Tabulation
const allConstruct = (target, wordBank) => {
  let table = Array(target.length + 1)
    .fill()
    .map(() => []);
  table[0] = [[]];
  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        newComb = table[i].map((comb) => [...comb, word]);
        table[i + word.length].push(...newComb);
      }
    }
  }
  return table[target.length];
};
console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // [['purp', 'le'], ['p', 'ur', 'p', 'le']]
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));
// [
//   ['abc', 'def'],
//   ['ab', 'c', 'def'],
//   ['abcd', 'ef'],
//   ['ab', 'cd', 'ef'],
// ];
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'sak', 'sk', 'boar'])); // []
console.log(allConstruct('aaaaaaaaaaaaaaaaaaz', ['a', 'aa', 'aaa', 'aaaa', 'aaaaa'])); // []

[
  ['abc', 'def'],
  ['ab', 'c', 'def'],
  ['abcd', 'ef'],
  ['ab', 'cd', 'ef'],
]; // solution2: recursion + memoization
// const allConstruct = (target, wordBank, memo = {}) => {
//   if (target in memo) return memo[target];
//   if (target === '') return [[]];

//   let result = [];

//   for (let word of wordBank) {
//     if (target.indexOf(word) === 0) {
//       const suffix = target.slice(word.length);
//       const suffixWays = allConstruct(suffix, wordBank, memo);
//       const targetWays = suffixWays.map((way) => [word, ...way]);
//       result.push(...targetWays);
//     }
//   }
//   memo[target] = result;
//   return result;
// };

// const allConstruct = (target, wordBank) => {
//   if (target === '') return [[]];

//   let result = [];

//   for (let word of wordBank) {
//     if (target.indexOf(word) === 0) {
//       const suffix = target.slice(word.length);
//       const suffixWays = allConstruct(suffix, wordBank);
//       const targetWays = suffixWays.map((way) => [word, ...way]);
//       result.push(...targetWays);
//     }
//   }
//   return result;
// };
// console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
// console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));
// console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'sak', 'sk', 'boar']));
// console.log(
//   allConstruct('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz', ['a', 'aa', 'aaa', 'aaaa', 'aaaaa'])
// );
