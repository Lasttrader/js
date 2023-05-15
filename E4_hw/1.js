//Задание 1.
/*Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств.
Данная функция не должна возвращать значение.*/

function getObject(obj_dict){
  for (let key in obj_dict) {
    if (obj_dict.hasOwnProperty(key)) {
        console.log(key);
    }
}
}

let me = {
  1:'key1',
  2:'key2'
};

let student = Object.create(me);
student.age = 37;

getObject(grisha);