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
}