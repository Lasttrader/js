//Задание 3.
/*Написать функцию, которая создает пустой объект, но без прототипа.*/

function checkObject() {
    // создаем объект с прототипом
    const simple_object = Object.create();
    return simple_object
};