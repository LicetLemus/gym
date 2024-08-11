# 1. You get an array of numbers, return the sum of all of the positives ones.
# Example [1,-4,7,12] => 1 + 7 + 12 = 20


def positive_sum(arr):
    suma = 0
    for number in arr:
        if number > 0:
            suma = suma + number
    return suma
    
list = [1, 3, 4, -3]
print(positive_sum(list))

# 2. Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 
# 0 is neither positive nor negative.
# If the input is an empty array or is null, return an empty array.
# Example For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

def count_positives_sum_negatives(arr):
    const_positives = 0
    suma_negatives = 0
    
    if arr == []:
        return []
    
    for number in arr:
        if number > 0:
            const_positives = const_positives + 1
        if number < 0:
            suma_negatives = number + suma_negatives
    
    return [const_positives, suma_negatives]

elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
print(count_positives_sum_negatives(elements))