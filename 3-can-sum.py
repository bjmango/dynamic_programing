# Solution3: Tabulation
from typing import List

# Solution3: Tabulation
# m: targetSum
# n: length of numbers list
# time: O(m * n)
# space: O(m)


def canSum(targetSum: int, numbers: List[int]) -> bool:
    table = [False for _ in range(targetSum+1)]
    table[0] = True

    for i in range(targetSum+1):
        if table[i]:
            for n in numbers:
                if i+n <= targetSum:
                    table[i+n] = True
    return table[targetSum]


print(canSum(7, [2, 3]))  # True
print(canSum(7, [5, 3, 4, 7]))  # True
print(canSum(7, [2, 4]))  # False
print(canSum(8, [2, 3, 5]))  # True
print(canSum(200, [7, 14]))  # False

# Solution2: Memoization
# def canSum(targetSum: int, numbers: List[int], memo: dict) -> bool:
#     if targetSum in memo:
#         return memo[targetSum]
#     if targetSum == 0:
#         return True
#     if targetSum < 0:
#         return False

#     for num in numbers:
#         remainder = targetSum - num
#         if canSum(remainder, numbers, memo):
#             memo[targetSum] = True
#             return True
#     memo[targetSum] = False
#     return False


# region Solution1: Brute Force
#
# def canSum(targetSum: int, numbers: List[int]) -> bool:
#     if targetSum == 0:
#         return True
#     if targetSum < 0:
#         return False
#     for num in numbers:
#         remainder = targetSum - num
#         if canSum(remainder, numbers):
#             return True
#     return False
# endregion

# print(canSum(7, [2, 3], {}))  # True
# print(canSum(7, [5, 3, 4, 7], {}))  # True
# print(canSum(7, [2, 4], {}))  # False
# print(canSum(8, [2, 3, 5], {}))  # True
# print(canSum(200, [7, 14], {}))  # False
