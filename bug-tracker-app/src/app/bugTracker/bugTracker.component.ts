import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.component.css']
})
export class BugTrackerComponent{
	bugs : IBug[] = [];
	
	bugSortBy : string = 'id';
	isDescending : boolean = false;
	newBugName : string = '';

	constructor(private bugOperations : BugOperationsService){
		this.bugs.push(this.bugOperations.createNew('Server communication failure'));
		this.bugs.push(this.bugOperations.createNew('Application not responding'));
		this.bugs.push(this.bugOperations.createNew('User actions not recognized'));
		this.bugs.push(this.bugOperations.createNew('Data integrity checks failed'));
	}

	onCreateNewClick(){
		let newBug : IBug = this.bugOperations.createNew(this.newBugName);
		//this.bugs.push(newBug);
		this.bugs = [...this.bugs, newBug];
	}

	onBugNameClick(bugToToggle : IBug){
		//bug.isClosed = !bug.isClosed;
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug);
	}

	onRemoveClosedClick(){
		for(let index=this.bugs.length-1; index >=0; index--){
			if (this.bugs[index].isClosed)
				this.bugs.splice(index, 1);
		}
	}

	/*getClosedCount(){
		console.log('getClosedCount evaluated');
		let closedCount = 0;
		for(let index=0; index < this.bugs.length; index++)
			if (this.bugs[index].isClosed)
				++closedCount;
		return closedCount;
	}*/
}