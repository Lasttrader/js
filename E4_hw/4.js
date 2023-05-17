//Задание 4.
/*
Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определить иерархию электроприборов.Включить некоторые в розетку.Посчитать потребляемую мощность. 
Таких приборов должно быть, как минимум, два(например, настольная лампа и компьютер).Выбрав прибор, подумайте, какими свойствами он обладает.

План:
1. Определить родительскую функцию с методами, которые включают / выключают прибор из розетки.
2. Создать делегирующую связь[[Prototype]] для двух конкретных приборов.
3. У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
4. Создать экземпляры каждого прибора.
5. Вывести в консоль и посмотреть результаты работы, гордиться собой. :)

Общие требования:
- Имена функций, свойств и методов должны быть информативными.
- Соблюдать best practices:
- использование camelCase нотации для переменных и методов, PascalCase для названия функций - конструкторов и классов;
- информативные имена(а не a, b);
- четкая связь между классом и его экземплярами(класс описывает множество, а экземпляр конкретную реализацию);
- использование синтаксиса ES6(кроме функции - конструкторов) и т.д.
*/

function Item(power) {
    this.power = power
}
Item.prototype.getPower = function () {
    console.log(`$Power is ${this.power} g`)
}

function Computer(name, size, height) {
    this.name = name
    this.size = size
    this.height - height
}
Computer.prototype = new Item('ON')

function Lamp(name, weight, height) {
    this.name = name
    this.weight = weight
    this.height - height
}
Lamp.prototype = new Item('OFF')

function Iron(name, label, weight) {
    this.name = name
    this.label = label
    this.height - weight
}
Iron.prototype = new Item('ON')

const myComputer = new Computer("my_computer", 555, 60);
const myLamp = new Lamp("my_lamp", 1, 50);
const myIron = new Iron("my_iron", 'samsung', 2);

console.log(myComputer.getPower())
console.log(myLamp.getPower())
console.log(myIron.getPower())
