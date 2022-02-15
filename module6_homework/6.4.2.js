const number = 607;

let a = false

for (let i = 0; i < number; i++) {
	if (number % i == 0) {
		a=true
		break;
	}
}

console.log(a)
