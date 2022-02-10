from typing import List

# Solution3: Tabulation


def howSum(targetSum: int, numbers: List[int]) -> List[int]:
    table = [None for _ in range(targetSum+1)]

    table[0] = []

    for i in range(targetSum+1):
        if table[i] is not None:
            for n in numbers:
                if i + n <= targetSum:
                    cp = table[i][:]
                    cp.append(n)
                    table[i+n] = cp
    return table[targetSum]


print(howSum(7, [2, 3]))  # [3,2,2]
print(howSum(7, [5, 3, 4, 7]))  # [4,3]
print(howSum(7, [2, 4]))  # None
print(howSum(8, [2, 3, 5]))  # [2,2,2,2]
print(howSum(300, [7, 14]))  # None

# Solution2: Recursion + Memoization
# m: targetSum
# n: numbers length
# time: O(m*n*m) = O (n * m^2)
# space: O(m^2)
# def howSum(targetSum: int, numbers: List[int], memo: dict) -> List[int]:
#     if targetSum in memo:
#         return memo[targetSum]
#     if targetSum == 0:
#         return []
#     if targetSum < 0:
#         return None

#     for num in numbers:
#         remainder = targetSum - num
#         remainderResult = howSum(remainder, numbers, memo)
#         if remainderResult is not None:
#             r = remainderResult[:]
#             r.append(num)
#             memo[targetSum] = r
#             return r
#     memo[targetSum] = None
#     return None

# print(howSum(7, [2, 3], {}))  # [3,2,2]
# print(howSum(7, [5, 3, 4, 7], {}))  # [4,3]
# print(howSum(7, [2, 4], {}))  # None
# print(howSum(8, [2, 3, 5], {}))  # [2,2,2,2]
# print(howSum(300, [7, 14], {}))  # None

# Solution1: Brute Force
# m: targetSum
# n: numbers length
# time: O(n^m * m)
# apace: O(m)

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
