console.warn('creando un objeto literal')
const personaje ={
    nombre : 'Tonny Stark',
    codeName : 'Ironman',
    estaVivo : false,
    edad : 40,
    coords : {
        lat : 34.034,
        Ing : -118.7,
    },
    traje : ['mark I','Mark V',  'Hulkbuster' ],
    direccion : {
        zip : '1080, 90265',
        ubicacion : 'malibu california',

    },
    'ultima-pelicula': 'End Game',
}
console.warn('acciendo al obejtos y sus propiedades')


console.log(personaje.nombre)
console.log(`nombre: ${personaje.nombre}`)
console.log(`apodo: ${personaje['codeName']}`)
console.log(`edad : ${personaje.edad}`)
console.log(`latitud: ${personaje.coords.lat}`)
let x ='estaVivo'
console.log(`estaVivo: ${personaje[x]}`)
 console.log(`estaVivo : ${personajes['ultima-pelicula']}`)
 console.warn('borrando una propiedad del objeto')
 delete personaje.edad
 console.log({ personaje })

 console.warn('creandouna propiedad del objeto')
 personaje.casado
 console.log(`cantidad de trajes: ${personaje.traje.length}`)
 console.log(`tercer traje: ${personaje.traje[2]}`)
