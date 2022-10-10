let valor = () => true;
console.log(valor())

const myPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Hola soy una promesa");
        reject("Error");
    },5000)
})

myPromise.then(value => console.log(value))

function* par(){
    let i = 0
    while (i<=12){
        i += 2
        yield i
    }
}
const gen = par()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())