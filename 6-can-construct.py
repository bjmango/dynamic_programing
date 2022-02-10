from typing import List

# Solution3: Tabulation


def canConstruct(target: str, wordBank: List[str]) -> bool:
    table = [False for _ in range(len(target) + 1)]
    table[0] = True

    for i in range(len(target)):
        if table[i]:
            for word in wordBank:
                if target[i:].startswith(word) and i+len(word) <= len(target):
                    table[i+len(word)] = True
    return table[len(target)]


print(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))  # true
print(canConstruct("skateboard", ["bo", "rd",
      "ate", "t", "ska", "sk", "boar"]))  # false
print(canConstruct("enterapotentpot", [
      "a", "p", "ent", "enter", "ot", "o", "t"]))  # true
print(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
      ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]))  # false

# Solution2: Recursion + Memoization
# def canConstruct(target: str, wordBank: List[str], memo: dict) -> bool:
#     if target in memo:
#         return memo[target]
#     if target == "":
#         return True
#     for word in wordBank:
#         if target.startswith(word):
#             suffix = target.removeprefix(word)
#             if canConstruct(suffix, wordBank, memo):
#                 memo[target] = True
#                 return True
#     memo[target] = False
#     return False


# print(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"], {}))  # true
# print(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"], {}))  # false
# print(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"], {}))  # true
# print(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"], {}))  # false


# Solution1: Brute Force
# def canConstruct(target: str, wordBank: List[str]) -> bool:
#     if target == "":
#         return True
#     for word in wordBank:
#         if target.startswith(word):
#             suffix = target.removeprefix(word)
#             if canConstruct(suffix, wordBank):
#                 return True
#     return False


# print(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))  # true
# print(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))  # false
# print(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))  # true
# print(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]))  # false
