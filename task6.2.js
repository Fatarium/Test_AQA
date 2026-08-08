

  function calculate(age) {
    if (age >= 18) {
        return true
    } else {
        return false
    }
}

console.log(calculate(25)) 
console.log("Доросла")
console.log(calculate(15)) 
console.log("Не доросла")