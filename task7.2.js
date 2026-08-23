function recurs (num){
console.log(num)
if (num > 1){
    recurs(num - 1)
}
}
recurs(5)