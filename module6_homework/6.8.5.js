//Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.




const degree = (x, n) => {
    const result = x**n
    return result;
}
const arg = `${degree(5, 2)}`;
console.log(arg)
