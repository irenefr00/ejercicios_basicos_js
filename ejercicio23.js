const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 },
  { name: 'Spirited Away', durationInMinutes: 80 },
  { name: 'The Matrix', durationInMinutes: 136 },
  { name: 'Amélie', durationInMinutes: 110 },
  { name: 'Eternal Sunshine of the Spotless Mind', durationInMinutes: 108 }
]
let pequeña = []
let mediana = []
let grande = []
for (let movie of movies) {
  if (movie.durationInMinutes <= 100) {
    pequeña.push(movie.name)
  } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes <= 200) {
    mediana.push(movie.name)
  } else if (movie.durationInMinutes >= 200) {
    grande.push(movie.name)
  }
}
console.log('menos de 100 minutos:', pequeña.join())
console.log('mas de 100 minutos:', mediana.join())
console.log('mas de 200 minutos:', grande.join())
