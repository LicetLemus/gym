"""
Implementa la función helloName para que dado un string name,
por ejemplo "Bob", retorne un saludo de la forma "Hello Bob!".
"""

def hello_name(name):
    return "Hello " + name + "!"

# Test
name = "Bob"
print(hello_name(name)) # Expected: "Hello Bob!"

"""
Completa la función intMax que recibe tres valores tipo int, a b c y retorna el mayor.
"""

def int_max(a, b, c):
    return max(a, b, c)

print(int_max(1, 2, 3)) # Expected: 3

"""
3. Given an array of ints, return true if 6 
appears as either the first or last element in the array. 
The array will be length 1 or more.
firstLast6([1, 2, 6]) → true
En JavaScript, la expresión nums[0] === 6 || nums[nums.length - 1] === 6 
devuelve automáticamente true o false según el resultado de la evaluación de la condición.
"""

def first_last_6(arrays):
    return arrays[0] == 6 or arrays[-1] == 6
print(first_last_6([6, 5, 4])) # Expected: True


"""
Write a function that returns the string "something" joined with a space " " 
and the given argument a.
"""
    
def give_me_something(a):
    return f"something {a}"

print(give_me_something("is better than nothing")) 