const lista = [1,"hola",true,undefined]
const lista2 = new Array("1","hola-mundo",2,4,true)
const lista3 = new Array(3)
const lista4 = [lista,lista2,lista3]


console.log(lista)
console.log(lista2)
console.log(lista3)
console.log(lista4)


const movil = {
    marca : "Samsung",
    anchura : 5,
    altura : 10,
    isWhite : false,
    contactos : ["juan","gorka"],
    tarjeta:{
        marca : "sandisk",
        almacenamiento : 32
    }
}
console.log(movil)
movil.anyo = 2040
movil.marca = "xiaomi"
console.log(movil)

const ahora = new Date()
console.log(ahora)

const fechaMilis = new Date(10)
console.log(fechaMilis)

const fechaCadena = new Date("march 25 2022")
console.log(fechaCadena)

const fechaValores = new Date(2022,11 , 28)
console.log(fechaValores)