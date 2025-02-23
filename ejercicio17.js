const alien = {
  name: 'Xenomorph',
  species: 'Xenomorph XX121',
  origin: 'Unknown',
  weight: 180
}
for (let nombre in alien) {
  console.log('La propiedad', nombre, 'tiene como valor:', alien[nombre])
}
