setTimeout(function() {
var todos = ["Buy New Watch"];

var input = prompt("What would you like to do?");



while(input !== "quit"){
	// handle input
	if(input === "list") {
	console.log(todos);
	} else if(input === "new") {
	// ask new todo
	var newTodo = prompt("Enter new todo");
	// add to todos array
	todos.push(newTodo);
	}
	// ask again for new input
	input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");
}, 250);



// setTimeout(function() {
// if(input === "list") {
// 	console.log(todos);
// }
// }, 250);