import { Component, OnInit } from '@angular/core';
import { GreeterService } from './greeter.service';

@Component({
	
	selector: 'greeter',
	templateUrl: 'greeter.component.html'
})
export class GreeterComponent implements OnInit {
	constructor(private greeterService : GreeterService) {}

	ngOnInit() {
		
	}

	message : string = '';

	greet(username : string){
		this.message = this.greeterService.getMessage(username);
	}

}