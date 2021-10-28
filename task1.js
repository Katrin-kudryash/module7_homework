// Задание 1.

// Написать, функцию, которая принимает в качестве аргумента объект 
// и выводит в консоль все ключи и значения только собственных свойств.
// Данная функция не должна возвращать значение.


let userInfo = {
	name: 'Patrik',
	age: 20,
	city: 'USA',
}

function getObj(userInfo) {
	
	for (let key in userInfo) {
		if (userInfo.hasOwnProperty(key)) {
			
			console.log(`Ключ - ${key}, Значение - ${userInfo[key]}`);
		}
	}
}

getObj(userInfo);