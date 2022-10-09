const dataMe = {
    nombre :'Julian',
    apellidos :'Casallas',
    age : 25,
    altura : 1.75,  
    programador : true}
const edad = 'age'
console.log(dataMe[edad])

const data2 = {
    nombre :'david',
    apellidos :'bernal',
    age : 21,
    altura : 1.75,  
    programador : true}

const data3 = {
    nombre :'pepe',
    apellidos :'casas',
    age : 28,
    altura : 1.75,  
    programador : true}

const data4 = [dataMe, data2, data3]
console.log(data4)

data4.sort((person1, person2) => (person2.age - person1.age))
console.log(data4)