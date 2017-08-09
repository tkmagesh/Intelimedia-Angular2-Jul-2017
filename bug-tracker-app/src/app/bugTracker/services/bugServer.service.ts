import { Injectable } from '@angular/core';
import { IBug } from '../models/IBug';
import { BugOperationsService } from './bugOperations.service';

@Injectable()
export class BugServerService{
	private baseUrl = 'http://localhost:3000/bugs';

	constructor(private bugOperations : BugOperationsService){

	}
	getAll() : Promise<any>{
		return fetch(this.baseUrl)
			.then(response => response.json())
	}
	addNew(newBugData : IBug) : Promise<any>{
		
		return fetch(this.baseUrl, {
			method : 'POST',
			body : JSON.stringify(newBugData),
			headers : {
				'content-type' : 'application/json'
			}
		}).then(response => response.json());
	}
	toggle(bug : IBug) : Promise<any>{
		let toggledBug = this.bugOperations.toggle(bug);
		return fetch(`${this.baseUrl}/${bug.id}`, {
			method : 'PUT',
			body : JSON.stringify(toggledBug),
			headers : {
				'content-type' : 'application/json'
			}
		}).then(response => response.json());
	}
	remove(bug : IBug) : Promise<any>{
		return fetch(`${this.baseUrl}/${bug.id}`, {
			method : 'DELETE',
		}).then(response => response.json());
	}
}