console.log('Welcome to TypeScript!!');

function add(x:number = 10,y:number = 20) : number {
	let result = x + y;
	return result;
}
console.log(add());

//let, const
const pi = 3.14;
/*
function multiply(x,y){
	return x + y;
}

var multiply = function(x,y){
	return x + y;
}


var multiply = (x,y) => {
	return x + y;
}
*/

let multiply = (x,y) => x + y;

class Employee{

	constructor(public id, public name, public salary){
		
	}

	display(){
		console.log(`id = ${this.id}, name = ${this.name}, salary = ${this.salary}`);
	}
}

let emp = new Employee(200, 'Magesh', 10000);
emp.display();
console.log(emp.salary);

interface IEmployee{
	id : number;
	name : string;
	salary : number;
}

let emp2 : IEmployee = { id : 200, name : 'xyz', salary : 10000 };

interface IOperator{
	(x : number, y : number) : number
}

let new_add : IOperator = (x : number, y : number) => 'this is the result';

