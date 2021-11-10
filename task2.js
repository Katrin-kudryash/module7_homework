// Задание 2.

// Написать функцию, которая принимает в качестве аргументов строку и объект, 
// а затем проверяет есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.

let userInfo = {
	name: 'Patrik',
	age: 20,
	country: 'USA',
}

let city = 'Chikago'

function getObjandStr(string, object) {
	return string in object;
}

getObjandStr(city, userInfo);
getObjandStr('country', userInfo);

// или чтобы сразу вывести все в консоль

// console.log(getObjandStr(city, userInfo));
// console.log(getObjandStr('country', userInfo));


// 2 способ 
// (без создания функции) 

// let userInfo = {
// 	name: 'Patrik',
// 	age: 20,
// 	country: 'USA',
// }

// let city = 'Chikago'

// console.log(city in userInfo);
// console.log('country' in userInfo);