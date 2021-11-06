// Задание 5.
// Переписать консольное приложение из предыдущего юнита на классы.

let totalPower = 0;

class Devices {
	constructor(name) {
		this.color = 'white';
		this.name = name;
	}

	turnOn() {
		totalPower += this.power;
		console.log(`${this.name} is on.`);
		console.log(`Total power - ${totalPower}V`);
	}

	turnOff() {
		totalPower -= this.power;
		console.log(`${this.name} is off. Power is not consumed`);
		console.log(`Total power - ${totalPower}V`);
	}
}


class GameDevice extends Devices {
	constructor(name, power, gamepad) {
		super(name, power, gamepad);
		this.color = 'white';
		this.name = name;
		this.power = power;
		this.gamepad = gamepad;
	}
	takeInfoPS(gamepad) {
		console.log(`${this.name}, power - ${this.power}V. There are ${gamepad} gamepads`);
	}
}


class TVDevice extends Devices {
	constructor(name, power) {
		super(name, power);
		this.color = 'white';
		this.power = power;
		this.name = name;
		this.smartTV = 'smartTV';
		this.package = 'Okko Premium Subscription';
	}
	takeInfoTV() {
		console.log(`${this.name} has ${this.smartTV} support. Power - ${this.power}V. ${this.package} package connected`);
	}
}


const gameConsole = new GameDevice('PlayStation 5', 200);
const TV = new TVDevice('Samsung', 112);

gameConsole.takeInfoPS(2);
TV.takeInfoTV();
gameConsole.turnOn();
TV.turnOn();
gameConsole.turnOff();
TV.turnOff();

console.log(gameConsole instanceof GameDevice);
console.log(gameConsole instanceof Devices);

console.log(TV instanceof TVDevice);
console.log(TV instanceof Devices);

console.log(TV instanceof GameDevice);
console.log(gameConsole instanceof TVDevice); 
