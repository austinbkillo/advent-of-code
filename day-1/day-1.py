
def getMeThatNumber():
  counter = 0
  max = 0
  newlines = 0
  file = open("day-1-input.txt", "r")
  for line in file:
    if line != '\n':
      counter += int(line)
    else:
      if counter > max:
        max = counter
      counter = 0
  print('max', max)

getMeThatNumber()
