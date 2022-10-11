/* //ejercicio 1
function mensaje(num){
    let i = 1;
    while(i <= num){
        console.log(`${i} Bienvenidos al curso Full Stack`);
        i++
    }
}
mensaje(10) */

/* //ejercicio 2
let mayor = (num1, num2) => {
    if(num1 > num2){
        return `numero1 ${num1} mayor que ${num2}`
    }
    else{
        return`numero2 ${num2} mayor que ${num1}`
    }
}
let prueba = (num1,num2) =>{return ((num1 > num2) ? `numero ${num1}` : `numero ${num2}`)}
let num1 = prompt("Escribe el primer numero")
let num2 = prompt("Escribe el segundo numero")
console.log(prueba(num1,num2)) */

/* //ejercicio 3
function promedio(...args) {
    const result = args.reduce((acu,cur)=> acu+cur)
    return result / args.length
}
const calc = promedio(10,6,3.5,7)
document.write('el promedio es '+ calc ) */

/* //ejercicio 4
var sumNotas = 0
var contNotas = 0
function leer_notas(curr){
    console.log(curr)
    if(curr === -1){
        prom = sumNotas / contNotas
        sumNotas = 0
        contNotas = 0
        return prom
    }
    sumNotas += curr
    contNotas++
    console.log("suma notas "+sumNotas)
    console.log("cuantas notas " +contNotas)
}
function siguiente(num){
    let result = 0
    for(num; num>=-1; num--){
        result = leer_notas(num)
    }
    return result
}
console.log("promedio de notas : "+siguiente(10))
function notas(){
    let notas = 0, i = 0, sum = 0, prom = 0
    while(true){
        notas = parseFloat(prompt("Ingrese la nota (ingrese -1 para finalizar)"))
        if (notas == -1){
            break
        }
        sum += notas
        i++ 
    }
    prom = sum / i
    return prom
}
document.write(notas()) */

/* //ejercicio 21
const bajo = (args)=>{
    let aux = 999999999999999
    for(num of args){       
        if (num < aux){
            aux = num
            continue
        }
    }
    return aux
}
document.write("numero mas bajo "+bajo([8,8]))
 */

/* //ejercicio 24
function repeticion(...args){
    let aux
    do{
        aux = args.pop()
        if(args.includes(aux)){
            console.log(aux)
        }
    }while(args.length > 0)
}
repeticion(...[3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100])
 */

/* //ejercicio 26
function invertir(numero){
    let residuo
    if(numero === 0){
        return ""
    }
    else{
        residuo = numero % 10
        return `${residuo}${invertir(Math.floor(numero / 10))}`
    }
}
console.log(invertir(123456)) */

/* //ejercicio 29
function palabraLarga(text){
    let str = text.split(" ")
    let cadenaLarga = ""
    for(let cadena of str){
        if (cadena.length > cadenaLarga.length){
            cadenaLarga = cadena
        }
    }
    return cadenaLarga
}
console.log(palabraLarga("Tutorial de desarrollo web")) */