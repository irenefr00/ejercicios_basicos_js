//2.1
const jedi = { nombre: 'Luke Skywalker', edad: 19 }

// Tu código para cambiar la edad aquí...
jedi.edad = 25
//console.log(jedi)
//2.2
let nombre = 'Leia'
let apellido = 'Organa'
let edad = 20
let mensaje =
  'Soy ' +
  nombre +
  ' ' +
  apellido +
  ', tengo ' +
  edad +
  ' años y soy una princesa de Alderaan.'
//console.log(mensaje)

//2.3
const sable1 = { nombre: 'Shoto de Yoda', precio: 1500 }
const sable2 = { nombre: 'Sable de Darth Vader', precio: 2000 }

// Tu código para calcular el precio total aquí...
let costetotal = sable1.precio + sable2.precio
//console.log(costetotal)

//2.4
let precioBaseGlobal = 10000

// Cambia el precio base en esta linea modificando la variable
precioBaseGlobal = 25000

const nave1 = { nombre: 'Ala-X', precioBase: 50000, precioFinal: 60000 }
const nave2 = {
  nombre: 'Halcón Milenario',
  precioBase: 70000,
  precioFinal: 80000
}

// Tu código para actualizar el precio final de cada nave aquí...
nave1.precioFinal = nave1.precioBase + precioBaseGlobal
console.log(nave1.precioFinal)
nave2.precioFinal = nave2.precioBase + precioBaseGlobal
console.log(nave2.precioFinal)
