console.log('Welcome to TypeScript!!');
function add(x, y) {
    if (x === void 0) { x = 10; }
    if (y === void 0) { y = 20; }
    var result = x + y;
    return result;
}
console.log(add());
//let, const
var pi = 3.14;
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
var multiply = function (x, y) { return x + y; };
var Employee = (function () {
    function Employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.display = function () {
        console.log("id = " + this.id + ", name = " + this.name + ", salary = " + this.salary);
    };
    return Employee;
}());
var emp = new Employee(200, 'Magesh', 10000);
emp.display();
console.log(emp.salary);
var emp2 = { id: 200, name: 'xyz', salary: 10000 };
