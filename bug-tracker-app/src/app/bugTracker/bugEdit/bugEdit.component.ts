import { Component, EventEmitter, Output } from '@angular/core';
import { BugOperationsService } from '../services/bugOperations.service';
import { IBug } from '../models/IBug';

@Component({
	selector : 'bug-edit',
	template : `
		<section class="edit">
			<label for="">Bug Name :</label>
			<input type="text" [(ngModel)]="newBugName">
			<input type="button" value="Create New" (click)="onCreateNewClick()">
		</section>
	`
})
export class BugEditComponent{
	newBugName : string = '';

	@Output()
	newBug : EventEmitter<IBug> = new EventEmitter<IBug>();

	constructor(private bugOperations : BugOperationsService){

	}
	onCreateNewClick(){
		let bug : IBug = this.bugOperations.createNew(0, this.newBugName);
		this.newBug.emit(bug);	
	}
}