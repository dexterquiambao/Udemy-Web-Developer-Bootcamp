let person = {
  name: 'Dexter',
  age: 30,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  
  sayHello: () => {
    return `Hello, my name is ${person.name}`
  },
  
  //Using ES6 to add sayGoodbye() method
  sayGoodbye() {
  	return 'Goodbye'
	},
};

console.log(person.sayHello())
console.log(person['name']);
console.log(person['age']);

let day = 'Tuesday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);

person.hobbies = ["Coding", "Going to the gym"];
person.hobbies = ["Coding"];
console.log(person.hobbies)
