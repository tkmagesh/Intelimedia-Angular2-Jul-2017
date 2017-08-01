import { Component } from '@angular/core';

@Component({
	selector : 'app-calculator-one',
	templateUrl : 'calculatorOne.component.html',
	styleUrls : ['calculator.style.css']
})
export class CalculatorOneComponent{
	result : number = 0;
	n1 : number = 0;
	n2 : number = 0;

	onAddClick(value1, value2){
		this.result = this.n1 + this.n2;
	}

	onSubtractClick(value1, value2){
		this.result = this.n1 - this.n2;
	}

	onMultiplyClick(value1, value2){
		this.result = this.n1 * this.n2;
	}

	onDivideClick(value1, value2){
		this.result = this.n1 / this.n2;
	}
}