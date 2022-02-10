# Solution3: Tabulation solution that avoid recursion
def fib(n):
    table = [0 for _ in range(n+3)]
    table[1] = 1
    for i in range(n):
        table[i+1] += table[i]
        table[i+2] += table[i]

    return table[n]


assert fib(6) == 8, f'{fib(6)}'
assert fib(7) == 13, f'{fib(7)}'
assert fib(8) == 21, f'{fib(8)}'
assert fib(50) == 12586269025, f'{fib(50)}'


# Solution2: Memoization
# def fib(n: int, memo: dict) -> int:
#     if n in memo:
#         return memo[n]
#     if n in (1, 2):
#         return 1
#     memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
#     return memo[n]


# print(fib(6, {}))
# print(fib(7, {}))
# print(fib(8, {}))
# print(fib(50, {}))

# Solution1: Recursive
# def fib(n: int) -> int:
#     if n <= 2:
#         return 1
#     return fib(n - 1) + fib(n - 2)


# print(fib(6))
# print(fib(7))
# print(fib(8))
# print(fib(50))
