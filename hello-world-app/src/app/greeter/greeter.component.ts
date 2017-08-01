import { Component } from '@angular/core';

@Component({
	selector : 'app-greeter',
	templateUrl : 'greeter.component.html',
	styleUrls : ['greeter.component.css']
})
export class GreeterComponent{
	message : string = '[Default greet message]';

	onGreetClick(username : string){
		//let username = prompt('Enter the username :');
		this.message = `Hello ${username}, Have a nice day!`;
	}
}