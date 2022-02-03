# Solution2: Memoization
def gridTraveler(m: int, n: int, memo: dict) -> int:
    key = f"{m},{n}"
    if key in memo:
        return memo[key]
    if m == 1 or n == 1:
        return 1
    if m == 0 or n == 0:
        return 0
    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)
    return memo[key]


print(gridTraveler(1, 1, {}))  # 1
print(gridTraveler(2, 3, {}))  # 3
print(gridTraveler(3, 2, {}))  # 3
print(gridTraveler(3, 3, {}))  # 6
print(gridTraveler(18, 18, {}))  # 2333606220

# Solution1: Recursion
# def gridTraveler(m: int, n: int) -> int:
#     if m == 1 or n == 1:
#         return 1
#     if m == 0 or n == 0:
#         return 0
#     return gridTraveler(m - 1, n) + gridTraveler(m, n - 1)


# print(gridTraveler(1, 1))  # 1
# print(gridTraveler(2, 3))  # 3
# print(gridTraveler(3, 2))  # 3
# print(gridTraveler(3, 3))  # 6
# print(gridTraveler(18, 18))  # 2333606220
