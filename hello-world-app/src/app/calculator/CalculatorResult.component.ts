import { Component, Input} from '@angular/core';

@Component({
	selector : 'app-calculator-result',
	template : '<div class="result">Result : {{result}}</div>',
	styleUrls : ['calculator.style.css']
})
export class CalculatorResultComponent{
	@Input() result : number = 0;	
}