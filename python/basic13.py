# basic 13 in python

# print array 1 to 255
def get_array_1_to_255():
    array = []
    for num in range(1,256):
        array.append(num)
    return array


# print "array: ", get_array_1_to_255()

# Write a function that would get the sum of all the even numbers from 1 to 1000. You may use a modulus operator for this exercise.

def even1000():
    sum = 0
    for num in range(1,1001):
        if num % 2 == 0:
            # print sum
            sum += num
    return sum

# print "sum : ", even1000()


# Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999)

def odd5000():
    sum = 0
    for num in range(1,5001):
        if num % 2 != 0:
            sum += num
    return sum

# print "Odds: ", odd5000()

# Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8, [-5,2,5,12] returns 14)
def iterArr(arr):
    sum = 0
    for value in arr:
        sum += value
    return sum


inputArray = [1, 2, 3, 10, 5,6,7]
# print "Sum of ", inputArray, "=", iterArr(inputArray)

# Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
def findMax(arr):
    max = arr[0]
    for value in arr:
        if value > max:
            max = value
    return max

# print "finding Max of {}".format(inputArray), "=",findMax(inputArray)

# Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
def findAverageArr(arr):
    sum = 0
    count = 0
    for value in arr:
        sum += value
        count += 1
    return (sum / count)


# print "the average of {}".format(inputArray), "=", findAverageArr(inputArray)

# Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
def oddNumbers():
    oddArray = []
    for num in range(1,51):
        if num % 2 != 0:
            oddArray.append(num)
    return oddArray

# print "odds b/t 1-50", oddNumbers()

# Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3,
# your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

def greaterY(array, y):
    count = 0
    for value in array:
        if value > y:
            count += 1
    return count

y = 4
# print "values greater than {} in {}".format(y, inputArray), " : ", greaterY(inputArray, y)

# Given an array with multiple values, write a function that replaces each value in the array with the product of 
# the original value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

def squareVal(arr):
    for x in range(0,len(arr)):
        arr[x] = arr[x]*arr[x]
    # for val in arr:
    #     val = val * val
    return arr

# print "squaring {}".format(inputArray), ":", squareVal(inputArray)
        
# Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. 
# When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

def noNeg(arr):
    for x in range(0,len(arr)):
        if arr[x] < 0:
            arr[x] = 0
    return arr

inputArray = [-1, -2, 3, 2, 0, -15]
# print "Setting negative values to 0 in {}".format(inputArray), " : ", noNeg(inputArray)

# Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, 
# and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

def maxMinAvg(arr):
    max = arr[0]
    min = arr[0]
    avg = 0
    for value in arr:
        avg += value
        if value > max:
            max = value
        if value < min:
            min = value
    avg = avg / len(arr)
    print "max: ", max
    print "min: ", min  
    print "avg: ", avg
    return [max, min, avg]


inputArray = [1,2,3,4,5]
# maxMinAvg(inputArray)
# print maxMinAvg(inputArray)


# Write a function that will swap the first and last values of any given array. 
# The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
def swapVal(arr):
    temp = arr[0]
    arr[0] = arr[len(arr)-1]
    arr[len(arr)-1] = temp
    return arr

# print "Swap first and last in {}".format(inputArray), ":", swapVal(inputArray)
