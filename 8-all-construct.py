from typing import List


def allConstruct(target: str, wordBank: List[str]) -> List[str]:
    table = [[] for _ in range(len(target) + 1)]
    table[0] = [[]]

    for i in range(len(target) + 1):
        for word in wordBank:
            if target[i:].startswith(word):
                combinations = table[i][:]
                if i + len(word) <= len(target):
                    for comb in combinations:
                        newComb = comb[:]
                        newComb.append(word)
                        table[i+len(word)].append(newComb)
    return table[len(target)]


# [['purp', 'le'], ['p', 'ur', 'p', 'le']]
print(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]))
