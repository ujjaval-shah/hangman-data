import json
from data import *
from utilities import *


def cricketers_data():
    output = []

    for row in cricketers:
        output += row

    greats = ["Steve Smith", "Virat Kohli", "Joe Root"]
    easy = greats[:]
    moderate = []

    sanity_check(output)

    for cricketer in output[:20]:
        if len(cricketer) > lenLimit:
            print(cricketer, len(cricketer), "Removed")
        else:
            easy.append(cricketer)

    for cricketer in output[20:]:
        if len(cricketer) > lenLimit:
            print(cricketer, len(cricketer), "Removed")
        elif cricketer not in greats:
            moderate.append(cricketer)

    log_easy(easy)
    log_moderate(moderate)

    return {
        "theme": "Test cricketers of 21st century",
        "easy": easy,
        "moderate": moderate
    }


def cities_data():
    output = cities

    sanity_check(output)

    easy = cities[:25]
    moderate = cities[25:]

    log_easy(easy)
    log_moderate(moderate)

    return {
        "theme": "Top Indian Cities (By Population)",
        "easy": easy,
        "moderate": moderate
    }


def indian_states():
    output = states

    sanity_check(output)

    easy = output

    log_easy(easy)

    return {
        "theme": "States of India",
        "easy": easy,
    }


def main():
    themes = {
        "test_cricketers": cricketers_data(),
        "indian_cities": cities_data(),
        "states_of_india": indian_states()
    }

    # print(themes)
    with open('.\output\data.json', 'w') as f:
        json.dump(themes, f, indent=4)


if __name__ == '__main__':
    main()
