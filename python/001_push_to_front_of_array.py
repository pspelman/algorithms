print "hello world!"

def pushToFront(newFront, array):
    print "new front: ", newFront
    print "on array: ", array

    for x in range(len(array),1,-1):
        print "array length: ", len(array)
        print "x: ", x
        # array[x+1]
        print array[x-1]
        array[0] = newFront
        return array 



arr = [1,2,3,4,5]

newNumber = 3

print pushToFront(newNumber, arr)

