
def getMeThatNumber():
  counter = 0
  results = []
  file = open("day-1-input.txt", "r")
  for line in file:
    if line != '\n':
      counter += int(line)
    else:

      results.append(counter)
      counter = 0
  results.sort()
  print(sum(results[-3:]))

getMeThatNumber()
