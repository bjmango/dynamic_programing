# Solution3: Tabulation
# time: O(m * n)
# space: O(m * n)

def gridTraveler(m: int, n: int) -> int:
    table = [[0 for _ in range(n+1)] for _ in range(m+1)]

    table[1][1] = 1

    for row in range(m+1):
        for col in range(n+1):
            current = table[row][col]
            if row + 1 <= m:
                table[row+1][col] += current
            if col + 1 <= n:
                table[row][col+1] += current
    return table[m][n]


gridTraveler(3, 3) == 6, f'{gridTraveler(3, 3)}'
gridTraveler(2, 3) == 3, f'{gridTraveler(2,3)}'
gridTraveler(3, 2) == 3, f'{gridTraveler(3, 2)}'
gridTraveler(3, 1) == 1, f'{gridTraveler(3,1)}'
gridTraveler(18, 18) == 2333606220, f'{gridTraveler(18,18)}'

# Solution2: Recursion + Memoization
# def gridTraveler(m: int, n: int, memo: dict) -> int:
#     key = f"{m},{n}"
#     if key in memo:
#         return memo[key]
#     if m == 1 and n == 1:
#         return 1
#     if m == 0 or n == 0:
#         return 0
#     memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)
#     return memo[key]

# print(gridTraveler(1, 1, {}))  # 1
# print(gridTraveler(2, 3, {}))  # 3
# print(gridTraveler(3, 2, {}))  # 3
# print(gridTraveler(3, 3, {}))  # 6
# print(gridTraveler(18, 18, {}))  # 2333606220

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
