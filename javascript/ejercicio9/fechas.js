const now = new Date()
console.log(now.toLocaleDateString("en-US"))

const birth = new Date(1997,10,17)
console.log(birth.toLocaleDateString("en-US"))

console.log(now > birth)

const birthDay = birth.getDate()
console.log(birthDay)

const birthMonth = birth.getMonth()
console.log(birthMonth+1)

const birthYear = birth.getFullYear()
console.log(birthYear)
