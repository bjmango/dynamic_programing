# Solution2: Memoization
from typing import List


def canSum(targetSum: int, numbers: List[int], memo: dict) -> bool:
    if targetSum in memo:
        return memo[targetSum]
    if targetSum == 0:
        return True
    if targetSum < 0:
        return False

    for num in numbers:
        remainder = targetSum - num
        if canSum(remainder, numbers, memo):
            memo[targetSum] = True
            return True
    memo[targetSum] = False
    return False


# region Solution1: Brute Force
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

print(canSum(7, [2, 3], {}))  # True
print(canSum(7, [5, 3, 4, 7], {}))  # True
print(canSum(7, [2, 4], {}))  # False
print(canSum(8, [2, 3, 5], {}))  # True
print(canSum(200, [7, 14], {}))  # False
