import { Injectable } from '@angular/core';
import { IBug } from '../models/IBug';
import { BugOperationsService } from './bugOperations.service';

@Injectable()
export class BugStorageService{
	private currentBugId : number = 0;
	private storage : Storage = window.localStorage;

	constructor(private bugOperations : BugOperationsService){

	}
	getAll(): IBug[]{
		let result : IBug[] = [];
		for(let index=0, count = this.storage.length; index < count; index++){
			let rawData = this.storage.getItem(this.storage.key(index));
			let bug = JSON.parse(rawData);
			result.push(bug);
			this.currentBugId = this.currentBugId > bug.id ? this.currentBugId : bug.id;
		}
		return result;
	}
	private save(bug : IBug) : void{
		this.storage.setItem(bug.id.toString(), JSON.stringify(bug));
	}
	addNew(bugName : string) : IBug{
		let newBug = this.bugOperations.createNew(++this.currentBugId, bugName);
		this.save(newBug);	
		return newBug;
	}
	toggle(bug : IBug) : IBug{
		let toggledBug = this.bugOperations.toggle(bug);
		this.save(toggledBug);
		return toggledBug;
	}
	remove(bug : IBug) : void{
		this.storage.removeItem(bug.id.toString());
	}
}