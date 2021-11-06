// Задание 4.
// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео.
// Реализуйте его на прототипах. Определить иерархию электроприборов.
// Включить некоторые в розетку.Посчитать потребляемую мощность. 
// Таких приборов должно быть, как минимум, два(например, настольная лампа и компьютер).
// Выбрав прибор, подумайте, какими свойствами он обладает.

// 	План:

// Определить родительскую функцию с методами, которые включают / выключают прибор из розетки;
// Создать делегирующую связь[[Prototype]] для двух конкретных приборов;
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов;
// Создать экземпляры каждого прибора;
// Вывести в консоль

function Devices(name) {
	this.color = 'white';
	this.name = name
}

let totalPower = 0;
Devices.prototype.turnOn = function () {
	totalPower += this.power;
	console.log(`${this.name} is on.`);
	console.log(`Total power - ${totalPower}V`);
}

Devices.prototype.turnOff = function () {
	totalPower -= this.power;
	console.log(`${this.name} is off. Power is not consumed`);
	console.log(`Total power - ${totalPower}V`);
}

function GameDevice(name, power, gamepad) {
	this.color = 'white';
	this.name = name;
	this.power = power;
	this.gamepad = gamepad;
	this.takeInfoPS = function (gamepad) {
		console.log(`${this.name}, power - ${this.power}V. There are ${gamepad} gamepads`);
		}
}

GameDevice.prototype = new Devices();

function TVDevice(name, power) {
	this.color = 'white';
	this.power = power;
	this.name = name;
	this.smartTV = 'smartTV';
	this.package = 'Okko Premium Subscription';
	this.takeInfoTV = function () {
		console.log(`${this.name} has ${this.smartTV} support. Power - ${this.power}V. ${this.package} package connected`);
		}
}

TVDevice.prototype = new Devices();

const gameConsole = new GameDevice('PlayStation 5', 200);
const TV = new TVDevice('Samsung', 112);

gameConsole.takeInfoPS(2);
gameConsole.turnOn();
TV.takeInfoTV();
TV.turnOn();
TV.turnOff();
gameConsole.turnOff();
console.log(gameConsole);
console.log(TV);