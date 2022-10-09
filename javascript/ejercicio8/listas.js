const bagList = ["leche","pollo","carne","arroz","tomate"]
console.log(bagList)

bagList.push("aceite de girasol")
console.log(bagList)

const movies = [
    {titulo:"Harry Potter",director:"Chris Columbus",fecha: new Date(2002,10,28)},
    {titulo:"elysum",director:"Neill Blomkamp",fecha: new Date(2013,07,9)},
    {titulo:"jurassic park",director:"Steven Spielberg",fecha: new Date(1993,06,15)}
]
console.log(movies)
for(movie of movies){
    console.log(movie.fecha)
}
const movies2010 = movies.filter(m => m.fecha > new Date(2010,0,1))
console.log(movies2010)

const moviesTitle = movies.map(movie => movie.titulo)
console.log(moviesTitle)

const directors = movies.map(movie => movie.director)
console.log(directors)

console.log(moviesTitle.concat(directors))

const newList = [...directors,...moviesTitle]
console.log(newList)