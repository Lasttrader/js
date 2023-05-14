function funcName() {
    const str = 'My first function';
    console.log(str);
}
funcName();
function sum() {
    const result = 1 + 2;
    console.log(result);
};
const sum = function () {
    const result = 1 + 2;
    console.log(result);
};
function sum(a, b) {
    const result = a + b;
    console.log(result);
}
console.log(sum.length);

//Это число называется арность (arity) — количество параметров у функции.
function log(a = 0) {
    console.log(a);
}
//Функции высшего порядка
function example(func) {
    // вызываем функцию, которую приняли как аргумент
    func();
    // возвращаем функцию  
    return function () {
        console.log('internal function')
    }
}
// функция, которую будем передавать как аргумент в функцию example 
function argFunc() {
    console.log('function from arguments')
}
// в переменную resultFunc записываем результат выполнения функции example
// функция, которая передаётся как аргумент, должна быть без круглых скобок
const resultFunc = example(argFunc);
// после вызова example() внутри неё будет вызвана функция argFunc, которую мы передали как аргумент, и в консоли будет текст: function from arguments
// вызываем функцию
resultFunc(); // 'internal function

//Замыкания
const b = 2;
const sum = function () {
    const a = 1;
    // внутри функции нет переменной b, но она есть выше по коду
    return a + b
};
// в переменную result записываем результат выполнения функции
const result = sum();
console.log(result);
//То есть, при обращении к a вне функции будет ошибка:
const b = 2;
const sum = function () {
    const a = 1;
    // внутри функции нет переменной b, но она есть выше по коду
    return a + b
};
console.log(a);

//Функции обратного вызова
const fibo = function fibonacci() {
    // тут можно  использовать "fibonacci()"
    fibonacci(); // функция вызывает сама себя
};
(function () {
    alert("Example 2");
})();
/* 
Callback или функция обратного вызова — функция, 
которая выполняется в конце операции, когда все остальные операции уже завершены.  
*/
/*Когда необходимо выполнить какой-то код по завершении асинхронного 
действия (загрузка информации из базы данных, например).
*/

function loadData(url, cb) {
    let result = doSomethingAndGetResult(url)
    // onload сработает тогда, когда result полностью прогрузится и колбэк будет вызван
    result.onload = function () {
        cb();
    }
}
loadData('url', function () {
    // code
})
const arr = [1, 2, 3]
arr.forEach(function (item) {
    console.log(item + 1)
})
function sum(a, b) {
    console.log(a + b);
}
setTimeout(sum, 1000, 1, 2); // задержка 1 секунда
// Каждую секунду в консоль будет падать сумма чисел a и b.
const intervalId = setInterval(function (a, b) {
    console.log(a + b);
}, 1000, 1, 2);
clearInterval(intervalId)

//Стрелочные функции
const sayMyName = name => { // всегда FE
    console.log('My name is ' + name);
}
//Если параметр один, фигурные скобки {} не нужны:
const logText = text => console.log(text);
const sayHelloWorld = () => console.log('Hello, world!');
const sum = (a, b) => a + b;

const fatBodyArrowFunction = (a, b, c) => {
    // тут производятся сложные вычисления на несколько строк кода.
    // если нужно что-то вернуть из такой функции — используйте return
    // иначе функция будет вести себя как процедура
    const result = a + b + c;
    return result;
};



//ЗАДАНИЕ 1
/*
В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис. 
 */
function getTypeOfNumbers() {
    const arr = [0, null, NaN, 0, 1, 2, 4, "str"]
    let even = 0,
        odd = 0,
        zero = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            if (arr[i] === 0) {
                zero += 1;
            } else if (arr[i] % 2 === 0) {
                even += 1;
            } else {
                odd += 1;
            }
        }
    }

    console.log('четных элементов: ', even)
    console.log('нечетных элементов: ', odd)
    console.log('нулей: ', zero)
}
getTypeOfNumbers()



//ЗАДАНИЕ 2
/*
Написать функцию, которая принимает на входе любое число (но не больше 1 000), 
пределяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, 
о выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.
Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.
*/
function definePrime(num) {
    let isPrime, result;
    isPrime = true;

    if (num > 1 && num <= 1000) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
            }
        }
        result = isPrime ? 'Число ${num} - простое число' : 'Число ${num} - составное число';
    } else if (num > 1000) {
        result = 'Данные неверны';
    }
    return result;
}



//ЗАДАНИЕ 3
/*
Написать функцию, которая принимает число как аргумент и возвращает функцию, 
которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.
*/
function getSumFunction(a) {
    return function (b) {
        return a + b
    }
};
const sumFunction = getSumFunction(2);
const sum = sumFunction(3)
console.log(sum); // 5



//ЗАДАНИЕ 4
/*
Напишите функцию, которая принимает два числа. 
Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.
Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, 
ачиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).
*/
function logNumbers(begin, end) {
    let current = begin;

    let timerId = setInterval(function () {
        console.log(current);
        if (current == end) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}
logNumbers(5, 15);



//ЗАДАНИЕ 5
/*
Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. 
Иначе говоря, умножает x на себя n раз и возвращает результат.
Используйте Arrow Function синтаксис.
Протестируйте функцию на любых значениях и выведите результат в консоль.
*/
const pow = (x, n) => {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}
const result = pow(5, 3)
console.log(result) // 125