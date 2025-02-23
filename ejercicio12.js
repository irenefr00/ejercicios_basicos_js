const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
function removeDuplicates(list) {
  let uniquearray = []
  for (let i = 0; i < list.length; i++) {
    if (!uniquearray.includes(list[i])) {
      uniquearray.push(list[i])
    }
  }
  return uniquearray
}
console.log(removeDuplicates(duplicates))
