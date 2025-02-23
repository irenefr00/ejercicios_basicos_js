const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
]
function repeatCounter(list) {
  let count = {}
  for (let word of list) {
    if (count[word]) {
      count[word]++
    } else {
      count[word] = 1
    }
  }

  return count
}
console.log(repeatCounter(words))
