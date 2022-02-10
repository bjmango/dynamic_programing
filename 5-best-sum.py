from itertools import combinations
from typing import List

# Solution3: Tabulation


def bestSum(targetSum: int, numbers: List[int]) -> List[int]:
    table = [None for _ in range(targetSum+1)]
    table[0] = []

    for i in range(targetSum+1):
        if table[i] is not None:
            for n in numbers:
                combination = table[i][:]
                combination.append(n)
                if i+n <= targetSum and (table[i+n] is None or len(table[i+n]) > len(combination)):
                    table[i+n] = combination
    return table[targetSum]


print(bestSum(7, [5, 3, 4, 7]))    # [7]
print(bestSum(8, [2, 3, 5]))    # [3,5]
print(bestSum(8, [1, 4, 5]))    # [4,4]
print(bestSum(100, [1, 2, 5, 25]))  # [25,25,25,25]

# Solution2: Memoization
# def bestSum(targetSum: int, numbers: List[int], memo: dict) -> List[int]:
#     if targetSum in memo:
#         return memo[targetSum]
#     if targetSum == 0:
#         return []
#     if targetSum < 0:
#         return None

#     shortestCombination = None

#     for num in numbers:
#         remainder = targetSum - num
#         remainderCombination = bestSum(remainder, numbers, memo)
#         if remainderCombination is not None:
#             combination = remainderCombination[:]
#             combination.append(num)

#             if shortestCombination is None or (len(shortestCombination) > len(combination)):
#                 shortestCombination = combination
#     memo[targetSum] = shortestCombination
#     return memo[targetSum]

# print(bestSum(7, [5, 3, 4, 7], {}))
# # [7]
# print(bestSum(8, [2, 3, 5], {}))
# # [3,5]
# print(bestSum(8, [1, 4, 5], {}))
# # [4,4]
# print(bestSum(100, [1, 2, 5, 25], {}))

# Solution1: Brute Force
# def bestSum(targetSum, numbers):
#     if targetSum == 0:
#         return []
#     if targetSum < 0:
#         return None

#     shortestCombination = None

#     for num in numbers:
#         remainder = targetSum - num
#         remainderCombination = bestSum(remainder, numbers)

#         if remainderCombination is not None:
#             combination = remainderCombination[:]
#             combination.append(num)

#             if shortestCombination is None or (len(shortestCombination) > len(combination)):
#                 shortestCombination = combination
#     return shortestCombination

# print(bestSum(7, [5, 3, 4, 7]))
# # [7]
# print(bestSum(8, [2, 3, 5]))
# # [3,5]
# print(bestSum(8, [1, 4, 5]))
# # [4,4]
# print(bestSum(100, [1, 2, 5, 25]))
