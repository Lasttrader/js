
//Задание 5.
/*
Переписать консольное приложение из предыдущего юнита на классы.
Общие требования:
- Имена классов, свойств и методов должны быть информативными;
- Соблюдать best practices;
- Использовать синтаксис ES6.*/

class Item {
    constructor(power) {
        this.power = power
    }
    getPower() {
        console.log(`$Power is ${this.power} g`)
    }
}


class Computer extends Item {
    constructor(name, size, height, power) {
        super(power)
        this.name = name
        this.size = size
        this.height - height
    }
}


class Lamp extends Item {
    constructor(name, weight, height, power) {
        super(power)
        this.name = name
        this.weight = weight
        this.height - height
    }
}


class Iron extends Item {
    constructor(name, label, weight, power) {
        super(power)
        this.name = name
        this.label = label
        this.height - weight
    }
}


const myComputer = new Computer("my_computer", 555, 60, 'ON');
const myLamp = new Lamp("my_lamp", 1, 50, 'ON');
const myIron = new Iron("my_iron", 'samsung', 2, 'OFF');


console.log(myComputer.getPower())
console.log(myLamp.getPower())
console.log(myIron.getPower())

