// let params = process.argv

// console.log(params[0])

// let arr = [
//     {id:1, nombre:"Escuadra", precio:323.45},
//     {id:2, nombre:"Calculadora", precio:234.56},
//     {id:3, nombre:"Globo Terráqueo", precio:45.67},
//     {id:4, nombre:"Paleta Pintura", precio:456.78},
//     {id:5, nombre:"Reloj", precio:67.89},
//     {id:6, nombre:"Agenda", precio:78.90},
// ]



const os = require("os")

let arq = os.arch()

console.log(arq)

// const total = arr.reduce ((acumulador, item) => {
//     return acumulador = acumulador + item.precio
// }, 0
// )

// function sacarTotal (items){
//     let sumatoria = 0
//     for (let i = 0; i < items.length; i++) {
//         sumatoria = sumatoria + items[i].precio
//     }
//     return sumatoria
// }
// console.log(sacarTotal(arr))

// function promedio (precioTotal, cantidad){
//     return precioTotal / cantidad
// }
// console.log(promedio(total, arr.length))

// function menor (lista) {
//     let listaOrdenada = lista.sort(function(a, b){
//         return b.precio - a.precio 
//     }
//     )
//     let primerElemento =  listaOrdenada[0]
//     return primerElemento
// }
// console.log(menor(arr))










