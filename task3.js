// Задание 3.
// Написать функцию, которая создает пустой объект, но без прототипа.

const getObj = () => {
	return Object.create(null);

};

console.log(getObj());

