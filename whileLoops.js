console.log("Print numbers between -10 and 19");
var num = -10;

while(num <= 19) {
	console.log(num);
	num += 1;
}

// or 
// var counter = -10
// while (counter <20) {
// 	console.log(counter);
// 	counter++;
// }

console.log("Print all even numbers between 10 and 40")
var num = 10;

while(num <= 40) {
	console.log(num);
	num +=2;
}

// or
// var counter = 10;

// // while(counter <=40){
// // 	if(counter & 2 === 0){
// // 	console.log(counter);
// // 	counter += 1;
// // 	}
	
// }


console.log(" Print all odd numbers between 300 and 333");
var num = 301;

while (num <= 333) {
	console.log(num);
	num += 2;
}

// or
// var counter = 300;

// while(counter <= 333) {
// 	if(counter & 2 !== 0) {
// 		console.log(counter);
// 	}
// 	counter += 1;
// }

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50")
var counter = 5;

while(counter <= 50) {
	if(counter % 5 === 0 && counter % 3 === 0) {
		console.log(counter);
	}
	counter += 1;
}























