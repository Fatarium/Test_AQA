function handleNum(int, countable, uncountable) {
    if (int % 2 === 0) {
        handleEven()
    }
    else {
        handleOdd()
    }
}

function handleEven() {
    console.log("number is even")

}
function handleOdd() {
    console.log("number is odd")
}
handleNum(2, handleEven, handleOdd)
//console.log(handleNum(1, handleEven, handleOdd))