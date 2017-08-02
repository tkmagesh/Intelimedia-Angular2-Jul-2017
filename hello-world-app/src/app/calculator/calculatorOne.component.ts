import { Component } from '@angular/core';
import { CalculatorModel }  from './CalculatorModel';

@Component({
	selector : 'app-calculator-one',
	templateUrl : 'calculatorOne.component.html',
	styleUrls : ['calculator.style.css']
})
export class CalculatorOneComponent{
	

	model : CalculatorModel;

	constructor(){
		this.model = new CalculatorModel();
	}

	onAddClick(){
		this.model.add();
	}

	onSubtractClick(){
		this.model.subtract();
	}

	onMultiplyClick(){
		this.model.multiply();
	}

	onDivideClick(){
		this.model.divide();
	}
}