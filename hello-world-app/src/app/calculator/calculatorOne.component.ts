import { Component } from '@angular/core';

@Component({
	selector : 'app-calculator-one',
	templateUrl : 'calculatorOne.component.html',
	styleUrls : ['calculator.style.css']
})
export class CalculatorOneComponent{
	result : number = 0;

	onAddClick(value1, value2){
		let n1 : number = parseInt(value1, 10),
			n2 : number = parseInt(value2, 10);
		this.result = n1 + n2;
	}
}