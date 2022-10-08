const nameStudent = "julian"
console.log(nameStudent)

const lastName = "casallas"
console.log(lastName)

let student = `${nameStudent} ${lastName}`
console.log(student)

let studentUpper = student.toUpperCase()
console.log(studentUpper)

let studentLower = student.toLowerCase()
console.log(studentLower)

let long = student.length
console.log(long)

let firstLetterName = nameStudent.charAt(0)
console.log(firstLetterName)

let lastLetterLastName = lastName.slice(-1)
console.log(lastLetterLastName)

let notSpaces = student.replace(" ","")
console.log(notSpaces)

let nameInString = student.includes(nameStudent)
console.log(nameInString)
