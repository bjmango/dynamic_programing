# Solution3: Easier solution that avoid recursion
# def fib(n):
#     if n <= 2:
#         return 1
#     i = 3
#     left = 1
#     right = 1
#     while i < n:
#         result = left + right
#         left = right
#         right = result
#         i += 1
#     return result


# Solution2: Memoization
def fib(n: int, memo: dict) -> int:
    if n in memo:
        return memo[n]
    if n <= 2:
        return 1
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    return memo[n]


print(fib(6, {}))
print(fib(7, {}))
print(fib(8, {}))
print(fib(50, {}))

# Solution1: Recusive
# def fib(n: int) -> int:
#     if n <= 2:
#         return 1
#     return fib(n - 1) + fib(n - 2)


# print(fib(6))
# print(fib(7))
# print(fib(8))
# print(fib(50))
