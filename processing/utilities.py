lenLimit = 19


def character_is_valid(ch):
    return 'a' <= ch <= 'z' or 'A' <= ch <= 'Z' or ch == ' '


def sanity_check(output):
    maxlen = 0
    for word in output:
        for ch in word:
            if not character_is_valid(ch):
                print(f"{word} is not valid. contains {ch}.")
        maxlen = max(maxlen, len(word))
        if len(word) > lenLimit:
            print(f"{word} is too long. len {len(word)}.")
    # print(maxlen)


def log_easy(easy):
    print()
    print("Easy Len:", len(easy))
    print(*easy, sep='\n')


def log_moderate(moderate):
    print()
    print("Moderate Len:", len(moderate))
    print(*moderate, sep='\n')
