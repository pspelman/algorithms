name = "Ben"
greeting = "Hello, my name is"
print "Hello", name
print "Hello" + name
print "Hello", 1
print "Hello" + str(1)

print "The greeting: {} {}".format(greeting, name)


drawer = ['item1','item2','socks']

print drawer[0]
print drawer[1]
print drawer[2]


array = [1,2,5,6,7,8,99]
positionNumber = 1
print "from the array: {}".format(array[positionNumber])
print array[2:]
print array[:3]
print array[2:4]

print len(array)
print len(array[2:])
print len(array[:3])
print len(array[2:4])


for i in range(1, 5):
    print i


for x in xrange(3):
    print "this is X!", x
    if x == 2:
        break

test_string = "HELLO, this is A TeSt StRIng!"

for x in test_string:
    print x, " LOWER: " , str.lower(x)


# enumerate(sequence)

# map(function, sequence)
# map(print , test_string)


sequenceOne = [1,1,1,1,1,0]
sequenceTwo = [0,2,2,2,2,2]

print sequenceOne
print sequenceTwo

newSequence = sequenceOne

newSequence.extend(sequenceTwo)

print newSequence

print "START POPPING!!!"
for i in range(0,len(newSequence)):
    newSequence.pop(0)
    print newSequence



# print sequenceOne
# print sequenceTwo
# print newSequence


# min(sequence)
# sorted(sequence)

my_list = [1,2,3,4]
print my_list

string_list = ["strings","in","A","list"]

my_list.extend([2,1,4,1])
print my_list

my_list.extend(string_list)
print my_list

print my_list.index(1)

x = 3
y = 5
while y > 0:
    print  y
    y = y - 1
    if y == 1:
        break
else:
    print "FINAL else"
