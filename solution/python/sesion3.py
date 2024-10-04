"""
Given two temperatures, return true if one is less than 0 and the other 
is greater than 100.
"""

def temperatures(a, b):
    return (a < 0 and b > 100) or (a > 100 and b < 0)

print(temperatures(120, 2)) # Expected: True

"""
2.Given 2 strings, a and b, return a string of the form short+long+short,
with the shorter string on the outside and the longer string on the inside. 
The strings will not be the same length, but they may be empty (length 0)
"""

def short_long_short(a, b):
    if len(a) < len(b):
        return a + b + a
    else:
        return b + a +b
    
print(short_long_short("Hello", "World")) # Expected: "HelloWorldHello"


"""
3. Given an array of ints length 3, return a new array with the elements in reverse order,
so {1, 2, 3} becomes {3, 2, 1}.
"""

def reverse_array(nums):
    return nums[::-1]

print(reverse_array([1, 2, 3])) # Expected: [3, 2, 1]


"""
delete the spaces in a string and rerurn the string without spaces
"""

def delete_spaces(str):
    return str.replace(' ', '')

print(delete_spaces("8 j 8   mBliB8g  imjB8B8  jl  B")) # Expected: "8j8mBliB8gimjB8B8jlB"


"""
give a sentence, return the number of words whose first and last letter are the same
"""

def words_same_letter(sentence):
    list = sentence.split()

    count = 0
    for word in list:
        if word[0] == word[-1]:
            count =  count + 1
    return count

print(words_same_letter("ana ama a nana")) # Expected: 3

"""
Un grupo de amigos ha decidido iniciar una sociedad secreta. El nombre de la sociedad será la primera letra de cada uno de ellos,
ordenados alfabéticamente.
Crear una función que tome una serie de nombres y retorne el nombre de la sociedad secreta.
"""

def society_name(names):
    letter = []
    for name in names:
        first_letter = name[0]
        letter.append(first_letter)
    return  ''.join(sorted(letter))

print(society_name(["Adam", "Sarah", "Malcolm"])) # Expected: "AMS"

"""
give two integers, return the value that is closest to 21 without passing it. If both pass it, return 0
"""