
//Задание 2.
/*Написать функцию, которая принимает в качестве аргументов строку и объект,
а затем проверяет есть ли у переданного объекта свойство с данным именем.Функция должна возвращать true или false.*/

let test_object = {
  'key1':1,
  'key2':2
};
let test_string = 'key2'

function checkObject(my_strig, my_object){
  for (let key in my_object) {
    if (key === my_strig) {
        console.log('True', ' for ', my_strig);
       }
    else {
      console.log('False');
    }
  }
};

checkObject(test_string, test_object);
