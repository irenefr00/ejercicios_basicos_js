const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function nameFinder(nameList, nameToFind) {
  let position = nameList.indexOf(nameToFind)

  if (position !== -1) {
    return { found: true, position: position }
  } else {
    return { found: false }
  }
}

console.log(nameFinder(names, 'Tony'))
console.log(nameFinder(names, 'John'))
