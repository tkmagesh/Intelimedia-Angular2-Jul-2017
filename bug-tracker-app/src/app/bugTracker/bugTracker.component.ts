import { Component, OnInit } from '@angular/core';
import { IBug } from './models/IBug';
import { BugStorageService } from './services/bugStorage.service';

import { BugServerService } from './services/bugServer.service';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.component.css']
})
export class BugTrackerComponent implements OnInit{
	bugs : IBug[] = [];
	
	bugSortBy : string = 'id';
	isDescending : boolean = false;
	
	constructor(private bugServer : BugServerService){
		
	}

	async ngOnInit(){
		/*this.bugServer.getAll()
			.then(bugs => this.bugs = bugs);*/
		this.bugs = await this.bugServer.getAll();
	}
	onBugCreated(newBugData : IBug){
		this.bugServer
			.addNew(newBugData)
			.subscribe(newBug => this.bugs = [...this.bugs, newBug]);
	}

	onBugNameClick(bugToToggle : IBug){
		//bug.isClosed = !bug.isClosed;
		this.bugServer
			.toggle(bugToToggle)
			.subscribe(toggledBug => 
				this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug));
		
	}

	onRemoveClosedClick(){
		for(let index=this.bugs.length-1; index >=0; index--){
			if (this.bugs[index].isClosed){
				this.bugServer.remove(this.bugs[index]).subscribe(_ => {});
				this.bugs.splice(index, 1);
			}
		}
	}

}