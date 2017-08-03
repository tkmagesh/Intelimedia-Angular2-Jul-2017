import { Component } from '@angular/core';
import { IBug } from './models/IBug';


@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.component.css']
})
export class BugTrackerComponent{
	bugs : IBug[] = [];

	onCreateNewClick(bugName : string){
		let newBug : IBug = {
			name : bugName,
			isClosed : false
		};
		this.bugs.push(newBug);
	}

	onBugNameClick(bug){
		bug.isClosed = !bug.isClosed;
	}

	onRemoveClosedClick(){
		for(let index=this.bugs.length-1; index >=0; index--){
			if (this.bugs[index].isClosed)
				this.bugs.splice(index, 1);
		}
	}

	getClosedCount(){
		let closedCount = 0;
		for(let index=0; index < this.bugs.length; index++)
			if (this.bugs[index].isClosed)
				++closedCount;
		return closedCount;
	}
}