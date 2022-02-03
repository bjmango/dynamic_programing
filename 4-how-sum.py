# Solution2: Memoization
from typing import List


def howSum(targetSum: int, numbers: List[int], memo: dict) -> List[int]:
    if targetSum in memo:
        return memo[targetSum]
    if targetSum == 0:
        return []
    if targetSum < 0:
        return None

    for num in numbers:
        remainder = targetSum - num
        remainderResult = howSum(remainder, numbers, memo)
        if remainderResult is not None:
            r = remainderResult[:]
            r.append(num)
            memo[targetSum] = r
            return r
    memo[targetSum] = None
    return None


print(howSum(7, [2, 3], {}))  # [3,2,2]
print(howSum(7, [5, 3, 4, 7], {}))  # [4,3]
print(howSum(7, [2, 4], {}))  # None
print(howSum(8, [2, 3, 5], {}))  # [2,2,2,2]
print(howSum(300, [7, 14], {}))  # None

# Solution1: Brute Force
# def howSum(targetSum: int, numbers: List[int]) -> List[int]:
#     if targetSum == 0:
#         return []
#     if targetSum < 0:
#         return None

#     for num in numbers:
#         remainder = targetSum - num
#         remainderResult = howSum(remainder, numbers)
#         if remainderResult is not None:
#             r = remainderResult[:]
#             r.append(num)
#             return r
#     return None


# print(howSum(7, [2, 3]))  # [3,2,2]
# print(howSum(7, [5, 3, 4, 7]))  # [4,3]
# print(howSum(7, [2, 4]))  # None
# print(howSum(8, [2, 3, 5]))  # [2,2,2,2]
# print(howSum(300, [7, 14]))  # None
