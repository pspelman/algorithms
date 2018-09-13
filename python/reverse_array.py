# reverse an array

def reverseArray(array):
    print "Reversing array", array
    for x in range(0,len(array)/2)  :
        print "arr" + str(x) 
        tempvar = array[x]
        array[x] = array[len(array)-1-x]
        array[len(array)-1-x] = tempvar
        print "Final array: ", array
        # array[x]



reverseArray([0,1,2,3])

    
