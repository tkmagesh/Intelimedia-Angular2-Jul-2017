import { Component } from '@angular/core';
import { CalculatorModel } from './CalculatorModel';

@Component({
	selector :  'app-calculator-two',
	templateUrl : 'calculatorTwo.component.html',
	styleUrls : ['calculator.style.css']
})
export class CalculatorTwoComponent{
	model : CalculatorModel;

	operator : string = '';

	constructor(){
		this.model = new CalculatorModel();
	}

	calculate(){
		/*switch (this.operator) {
			case "add":
				this.model.add();
				break;
			case "subtract":
				this.model.subtract();
				break;
			case "multiply":
				this.model.multiply();
				break;
			case "divide":
				this.model.divide();
				break;
			
		}*/
		this.model[this.operator]();
	}
}