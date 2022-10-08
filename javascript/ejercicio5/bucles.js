let factorial = 1
for(let i = 10; i > 0; i--){
    factorial *= i
}
console.log(`bucle for factorial de 10 = ${factorial}`)
let i = 10
factorial = 1
while(i>0){
    factorial *= i
    i--
}
console.log(`bucle while factorial de 10 = ${factorial}`)
factorial = 1
let aux = 1
bucleFactorial : while(true){
    if(aux === 10){
        break bucleFactorial
    }
    factorial *= aux
    aux++
}
console.log(`bucle while break label factorial de 10 = ${factorial}`)