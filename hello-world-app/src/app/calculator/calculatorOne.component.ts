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

}