/* const persona = {
    nombre: "Julian",
    edad: 25,
    isDeveloper: true,
    saludo: ()=>{console.log("hola")}
}
persona.saludo() */
/* 
class Persona{
    nombre
    edad
    isDeveloper

    constructor(nombre,edad,isDeveloper){
        this.nombre = nombre
        this.edad = edad
        this.isDeveloper = isDeveloper
    }
    saludo(){
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`)
    }
    
}
const miPersona = new Persona("julian",25,true)
console.log(miPersona)
miPersona.saludo() */

class Estudiante{
    #nombre
    #asignaturas
    constructor(nombre,asignaturas){
        this.#nombre = nombre
        this.#asignaturas = asignaturas
    }
    obtenerDatos(){
        return {nombre:this.#nombre,asignaturas:this.#asignaturas}
    }
}
const miEstudiante = new Estudiante("julian",['HTML','CSS','Javascript'])
console.log(miEstudiante.obtenerDatos())
