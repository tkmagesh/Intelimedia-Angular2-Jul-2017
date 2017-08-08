import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugStorageService } from './services/bugStorage.service';

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

	constructor(private bugStorage : BugStorageService){
		this.bugs = this.bugStorage.getAll();
	}

	onCreateNewClick(){
		let newBug : IBug = this.bugStorage.addNew(this.newBugName);
		//this.bugs.push(newBug);
		this.bugs = [...this.bugs, newBug];
	}

	onBugNameClick(bugToToggle : IBug){
		//bug.isClosed = !bug.isClosed;
		let toggledBug = this.bugStorage.toggle(bugToToggle);
		this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug);
	}

	onRemoveClosedClick(){
		for(let index=this.bugs.length-1; index >=0; index--){
			if (this.bugs[index].isClosed){
				this.bugStorage.remove(this.bugs[index]);
				this.bugs.splice(index, 1);
			}
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