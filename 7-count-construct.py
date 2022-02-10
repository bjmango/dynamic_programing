from typing import List


def countConstruct(target: str, wordBank: List[str]) -> int:
    table = [0 for _ in range(len(target)+1)]
    table[0] = 1

    for i in range(len(target) + 1):
        for word in wordBank:
            if target[i:].startswith(word):
                table[i+len(word)] += table[i]

    return table[len(target)]


print(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]))  # 2
print(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))  # 1
print(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk"]))  # 0
print(countConstruct("enterapotentpot", [
      "a", "p", "ent", "enter", "ot", "o", "t"]))  # 4
print(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
      ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]))  # 0

# Solution2: Recursion + Memoization
# def countConstruct(target: str, wordBank: List[str], memo: dict) -> int:
#     if target in memo:
#         return memo[target]
#     if target == "":
#         return 1

#     total = 0

#     for word in wordBank:
#         if target.startswith(word):
#             suffix = target.removeprefix(word)
#             total += countConstruct(suffix, wordBank, memo)

#     memo[target] = total
#     return total


# print(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"], {}))  # 2
# print(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"], {}))  # 1
# print(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk"], {}))  # 0
# print(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"], {}))  # 4
# print(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"], {}))  # 0


#
# def countConstruct(target: str, wordBank: List[str]) -> int:
#     if target == "":
#         return 1

#     total = 0

#     for word in wordBank:
#         if target.startswith(word):
#             suffix = target.removeprefix(word)
#             total += countConstruct(suffix, wordBank)

#     return total


# print(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]))  # 2
# print(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))  # 1
# print(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk"]))  # 0
# print(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))  # 4
# print(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]))  # 0
