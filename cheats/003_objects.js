const user = {
    name: 'Andrei',
    surname: 'Ivanov',
    age: 18,
    position: 'developer',
};
const obj = {};
const obj = new Object();

//Если значение свойства объекта является функцией, то такое свойство именуется методом.
//Метод — свойство, которое может быть вызвано.
const obj = {
    a: 1,
    f: function () {
        console.log(1);
    },
};

const obj = {
    myProp: 100,
    1: 200,
};
const key = 'myProp';
obj.myProp; // 100
obj['myProp']; // 100
obj[1]; // 200
obj[key]; // 100

//Скобочная нотация также позволяет обратиться к свойству, имя которого хранится в переменной. Это называется вычисляемым свойством.
const lang = prompt("Введите название языка программирования", "javascript");
const collection = {
    [lang]: 'Лучший язык программирования!', // имя свойства будет взято из переменной lang
};
console.log(collection[lang]); // Лучший язык программирования!, если lang="javascript"

//Объекты в JavaScript динамические — обычно позволяют добавлять и удалять свойства в любое время.
const obj = { a: 1 };
obj.a; // 1 – получаем значение
obj.a = 9; // устанавливаем новое значение
console.log(obj.a); // 9
obj.b = 100; // добавляем новое свойство с ключом b и значением 100
// obj['b'] = 100; добавление нового свойства в скобочной нотации

//Удаление свойства из объекта — унарный оператор delete:
const obj1 = { a: 1 };
delete obj.a;
console.log(obj) // {}

//Обращение к имени свойства, которое отсутствует в объекте, возвращает значение undefined.
const obj = { a: 1 };
obj.b; // undefined
//НО! Есть вероятность, что существует свойство со значением undefined, нужно об этом помнить.
const obj = { a: 1, b: undefined };
obj.b; // undefined

//Поиск свойства в объекте осуществляется по его имени (ключу)!
const obj = { a: 1, c: undefined };
console.log('a' in obj);
'a' in obj; // true
'b' in obj; // false
'c' in obj; // true

//объявляем переменную, в которую последовательно будут записаны все имена (ключи) свойств итерируемого объекта object.
const obj = { a: 1, b: 2 };
for (let key in obj) {
    // выводим все названия свойств
    console.log(key);
}
for (let key in obj) {
    // выводим все значения свойств
    console.log(obj[key]);
}



//ПРОТОТИП
//Каждый объект имеет ноль или несколько свойств, которые называются собственными (own) и единственную внутреннюю ссылку на прототип.
const person = {
    city: "Moscow"
}
// создаем объект с прототипом
const student = Object.create(person);
// добавляем собственное свойство объекту student
student.ownCity = "Piter";
// обращаемся к свойству, которого нет в объекте student, но есть в его прототипе person 
console.log(student.city); // Moscow

//Чтобы получить доступ к __proto__ можно использовать свойство getPrototypeOf.
Object.getPrototypeOf(student); // person

//Вернемся к примеру и попробуем перебрать свойства объекта:
for (let key in student) {
    console.log(key); // city, ownCity
}
//Как можно заметить, в консоли появились свойства из прототипа.  Чтобы вывести только собственные свойства объекта, можно использ овать метод hasOwnProperty.
for (let key in student) {
    if (student.hasOwnProperty(key)) {
        console.log(key); // ownCity
    }
}

//Задание 1.
/*Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств.
Данная функция не должна возвращать значение.*/


//Задание 2.
/*Написать функцию, которая принимает в качестве аргументов строку и объект,
а затем проверяет есть ли у переданного объекта свойство с данным именем.Функция должна возвращать true или false.*/


//Задание 3.
/*Написать функцию, которая создает пустой объект, но без прототипа.*/


//OOP
function Candy(weight) {
    this.tasty = 'delicious',
        this.getWeight = function () {
            console.log(`Weight is ${weight} g`)
        }
}
const twix = new Candy(47);
const snickers = new Candy(50);
twix.getWeight()
snickers.getWeight()


//Задание 4.
/*
Реализовать следующее консольное приложение подобно примеру, который разбирался в видео.Реализуйте его на прототипах.
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



/**Синтаксический сахар (англ. syntactic sugar) в языке программирования — это синтаксические возможности, 
 * применение которых не влияет на поведение программы, но делает использование языка более удобным для человека. */

class Parent {
    constructor(ownCity) {
        this.ownCity = ownCity;
        this.hasFlat = true;
    }
    getInfo() {
        console.log(`I live in ${this.ownCity}`)
    }
}

//constructor
function Parent(ownCity) {
    this.ownCity = ownCity;
    this.hasFlat = true;
}
Parent.prototype.getInfo(){
    console.log(`I live in ${this.ownCity}`)
}

//Чтобы установить делегирующую связь [[Prototype]] между двумя прототипами функции, используют слово extends.

class Child extends Parent {
    constructor(isStudent, city, ownCity) {
        super(ownCity);
        this.isStudent = isStudent;
        this.city = isStudent ? city : ownCity;
    }
    getInfo() {
        if (this.isStudent) {
            return `I live and study in ${this.city}`
        } else {
            return super.getInfo();
        }
    }
}
const student = new Child(true, 'Piter')
student.getInfo()
const employee = new Child(false, New York)
employee.getInfo()

//Создание нового экземпляра в обоих случаях происходит с использованием ключевого слова new.
let parent = new Parent('Moscow');


//Ключевое слово static позволяет объявить статические методы и свойства в классе. 
//Они добавляются непосредственно в объект-функцию, а не в объект-прототип.
class Amazing {
    static cool() {
        console.log('cool');
    }
    wow() {
        console.log('wow');
    }
}
class Wonderful extends Amazing {
    static awesome() {
        super.cool();
        console.log('awesome')
    }
    great() {
        Amazing.cool();
    }
}
Amazing.cool();
Wonderful.cool();
Wonderful.awesome();
const instance = new Wonderful();
instance.great();


//Задание 5.
/*
Переписать консольное приложение из предыдущего юнита на классы.
Общие требования:
- Имена классов, свойств и методов должны быть информативными;
- Соблюдать best practices;
- Использовать синтаксис ES6.*/
