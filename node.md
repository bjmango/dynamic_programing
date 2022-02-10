YouTube: https://www.youtube.com/watch?v=oBt53YbR9Kk&list=PLI_woXrp15_2Ae7OrNGblNjw9krNVbkFw&index=1

1. Fibonacci
2. Grid Travel

# Memoization Recipe

1. Make it work (Brute Force solution)
   - visualize the problem as a tree
   - implement the tree using recursion
   - test it
2. Make it efficient.

   - add a memo object
   - add a base case to return memo values

   ```
   if xx in memo:
    return memo[xxx]
   ```

   - before return statement, store return values into the memo

   ```
   memo[x] = xxx
   return memo[x]
   ```

# Tabulation Recipe

- visualize the problem as a table
- size the table bases on the inputs of the problem
- initialize the table with default values
- seed the trivial answer into the table (base cases)
- iterate through the table
- fill further positions bases on the current position
