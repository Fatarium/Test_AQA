function divide(numerator, denominator) {
    if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Обидва аргументи повинні бути числами");
    }

    if (denominator === 0) {
        throw new Error("На нуль ділити не можна");
    }

    return numerator / denominator;
}


// 1. Звичайний випадок
try {
    console.log(divide(10, 2));
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Робота завершена");
}


// 2. Ділення на 0
try {
    console.log(divide(10, 0));
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Робота завершена");
}


// 3. Один аргумент не число
try {
    console.log(divide("10", 2));
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Робота завершена");
}