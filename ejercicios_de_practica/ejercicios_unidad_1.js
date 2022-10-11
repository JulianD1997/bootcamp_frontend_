/* //ejercicio 1-7
alert("Hello world!")

//ejercicio 2

document.write("<p> Hello world! </p>")

//ejercicio 3

document.write(`<p>${3+5}</p>`)

//ejercicio 4

const _name = prompt("Escribe tu nombre")
document.write(`Hola ${_name}`)

//ejercicio 5

let num1 = prompt("Escribe el primer numero")
let num2 = prompt("Escribe el segundo numero")
document.write(`<p> ${Number(num1) + Number(num2)} </p>`)

//ejercicio 6

if (num1 > num2){
    document.write(`<p> numero ${num1} mayor que ${num2} </p>`)
}
else{
    document.write(`<p>numero ${num2} mayor que ${num1}</p>`)
}
//ejercicio 7

let num3 = prompt("<p> Escribe el tercer numero </p>")
if (num1 > num2 && num1 > num3){
    document.write(`<p> numero ${num1} mayor que ${num2} y ${num3} </p>`)
}
else if (num2 > num3){
    document.write(`<p> numero ${num2} mayor que ${num1} y ${num3} </p>`)
}
else{
    document.write(`<p> numero ${num3} mayor que ${num1} y ${num2} </p>`)
} */

/* //ejercicio 8
let num = prompt("Escribe un numero")
if (Number(num) % 2 === 0){
    document.write(`<p> numero ${num} divisible entre 2`)
} */

/* //ejercicio 9
let phrase = prompt("Escribe un frase").toLowerCase()
let conA = 0
for (let char of phrase){
    if (char == 'a'){
        conA++
    }
}
document.write(`<p>La letra A esta ${conA} veces en la frase ingresada</p>`)
 */

/* //ejercicio 10
let phrase = prompt("Escribe un frase")
let vocales = new Set()
for(let char of phrase){
    if(char.match(/[aeiou]/i)){
        vocales.add(char.toLowerCase())
    }
}
const voc = [...vocales]
voc.sort()
document.write(`<p> las vocales que aparecen son : ${voc}</p>`) */

/* //ejercicio 11
let phrase = prompt("Escribe un frase")
let vocales = 0
for(let char of phrase){
    if(char.match(/[aeiou]/i)){
        vocales++
    }
}
document.write(`<p> las vocales totales son : ${vocales}</p>`) */

/* //ejercicio 12
let phrase = prompt("Escribe un frase")
let vocales = 0
let conA = 0
let conE = 0
let conI = 0
let conO = 0
let conU = 0
for(let char of phrase){
    if(char.match(/[aeiou]/i)){
        switch (char.toLowerCase()){
            case 'a': conA++
                break
            case 'e': conE++
                break
            case 'i': conI++
                break
            case 'o': conO++
                break
            case 'u': conU++
                break
            default : console.log("Error")
                break
        }

    }
}
document.write(`
    <p> 
        la vocal a se repite : ${conA} veces <br>
        la vocal e se repite : ${conE} veces <br>
        la vocal i se repite : ${conI} veces <br>
        la vocal o se repite : ${conO} veces <br>
        la vocal u se repite : ${conU} veces <br>
    </p>`) */

/* //ejercicio 13- 14
let num = parseInt(prompt('Escribe un numero'))
if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0){
    document.write(`<p>El numero es divisible entre alguno de estos numeros (2,3,5,7) </p>`)
    if(num % 2 === 0){
        document.write(`<p>El numero es divisible entre 2 </p>`)
    }
    if(num % 3 === 0){
        document.write(`<p>El numero es divisible entre 3 </p>`)
    }
    if(num % 5 === 0){
        document.write(`<p>El numero es divisible entre 5 </p>`)
    }
    if(num % 7 === 0){
        document.write(`<p>El numero es divisible entre 7 </p>`)
    }
} */

/* //ejercicio 15
let num = parseInt(prompt('Escribe un numero'))

for(let i = 0; i<=num; i++){
    if(num % i === 0){
        document.write(`<p>El numero ${num} es divisible entre ${i} </p>`)
    }
} */

/* //ejercicio 16
let num = parseInt(prompt('Escribe un numero'))
let num2 = parseInt(prompt('Escribe otro numero'))
for(let i = 2; i<=num; i++){
    if(num % i === 0 && num2 % i === 0 ){
        document.write(`<p>Los numeros ${num} y ${num2} son divisibles entre ${i} </p>`)
    }
} */

/* //ejercicio 17
function primo(num){
    for(let i = 2; i<num; i++){
        if(num % i === 0){
            return document.write(`<p>El numero ${num} no es primo </p>`)
        }
    }
    return document.write(`<p>El numero ${num} es primo </p>`)
}
let num = parseInt(prompt('Escribe un numero'))
primo(num) */

/* //ejercicio 18
const edad = parseInt(prompt('Escribe tu edad'))
document.write(`<p>${edad >= 18 ? 'ya puede conducir' : 'No puede conducir'}</p>`) */

/* //ejercicio 19
function calificacion(num) {
    if (num >= 0 && num < 3){
        return 'Muy deficiente'
    }
    if (num >= 3 && num < 5){
        return 'Insuficiente'
    }
    if (num >= 5 && num < 6){
        return 'Suficiente'
    }
    if (num >= 6 && num < 7){
        return 'Bien'
    }
    if (num >= 7 && num < 9){
        return 'Notable'
    }
    if (num >= 9 && num < 10){
        return 'Sobresaliente'
    }
}
const nota = parseFloat(prompt('Escribe una nota'))
document.write(`<p> tu calificacion ${nota} es : ${calificacion(nota)}</p>`) */

//ejercicio 20 21 22 

/* //ejercicio 23
function piramide(num){
    let aux
    let i = 0
    while (i <= num){
        aux = String(i)
        //console.log(`${aux.repeat(num)}`)
        document.write(`<p>${aux.repeat(i)} </p>`)
        i++
    }
}
let num = parseInt(prompt('Escribe un numero'))

piramide(num) */

/* //ejercicio 24
function piramide(num){
    let aux
    while (num > 0){
        aux = String(num)
        //console.log(`${aux.repeat(num)}`)
        document.write(`<p>${aux.repeat(num)} </p>`)
        num--
    }
}
let num = parseInt(prompt('Escribe un numero'))

piramide(num) */

/* //ejercicio 25
let i = 1
while (i <=500){
    if (i % 4 === 0){
        document.write(`<p>${i} multiplo de 4</p>`)
        i++
        continue
    }
    else if (i % 9 === 0){
        document.write(`<p>${i} multiplo de 9</p>`)
        i++
        continue
    }
    document.write(`<p>${i}</p>`)
    i++
} */

