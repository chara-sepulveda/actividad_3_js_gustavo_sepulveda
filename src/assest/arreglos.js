console.log('conectado')
console.warn('Declarando un arreglo un string con personajes de comics')

const personajes = ['Thor',  'Ironman', 'Batman', 'Sueprman']
console.log({personajes})

console.warn('Hallando la longitud del arreglo')
let tamanio = personajes.length
console.log({tamanio})

console.warn('Hallando el primer y ultimo elemento')
console.log(personaje[0])
console.log(personajes[personajes.length -1])
console.log(personajes[2-1])


console.warn('agregando un nuevo elento al arreglo')
personajes.push('hulk')
console.log({ personajes })

console.warn('agregando un nuevo elemento al arreglo en determinada posicion')
const personajes2 = [...personajes]
console.log({ personajes2 })
personajes.splice(1,0, 'charanga')
console.log({ personajes })

console.warn('agregando un nuevo elemento al inicio del arreglo')
personajes.unshift('black widow')
console.log({ personajes} )

console.warn('eliminar el ultimo elemento del  arreglo')
personajes.pop()
console.log({ personajes })

console.warn('Hallando el indice del elemento')
let thorindex = personajes.indexOf('Thor')
console.log({ thorindex })


