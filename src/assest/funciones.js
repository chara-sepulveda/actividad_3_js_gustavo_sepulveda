console.log('funciones')
console.warn('escribiendo una funcion tradicoonal')
function saludar(){
    console.log('hola charanga')
}
saludar()

console.warn('escribiendo una funcion tradicional en un const')
const saludar1 = function (){
    console.log('hola desde otra funcion')

}
saludar1()


const saludar2 = () => {
    console.log('saludando desde una funcion flecha')
}
saludar2()

console.warn('escribiendo una funcion de flecha con parametro')
const saludar3 = () =>{nombre
    console.log(`hola ${nombre}`)
}
saludar3(charanga)

console.warn('escribiendo una funcion de flecha con retorno')
const saludar4 = (nombre) =>{
    return `hola ${nombre}`
}
let saludando = saludar4(`charanga`)
console.log(saludando)

console.warn('escribiendo una funcion de flecha  abreviada')
const saludar5 = (nombre) => `hola ${nombre}`
let saludando2 = saludar5('chara')
console.log(saludando2)

console.warn('funcion con Math.random')
const rand= ()  => Math.random()
console.log(rand())








