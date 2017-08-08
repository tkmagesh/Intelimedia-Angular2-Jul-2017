import { Component, EventEmitter, Output } from '@angular/core';
import { BugStorageService } from '../services/bugStorage.service';
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

	constructor(private bugStorage : BugStorageService){

	}
	onCreateNewClick(){
		let bug : IBug = this.bugStorage.addNew(this.newBugName);
		this.newBug.emit(bug);	
	}
}