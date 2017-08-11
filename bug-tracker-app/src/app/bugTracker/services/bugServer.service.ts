import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { IBug } from '../models/IBug';
import { BugOperationsService } from './bugOperations.service';

@Injectable()
export class BugServerService{
	private baseUrl = 'http://localhost:3000/bugs';

	constructor(private bugOperations : BugOperationsService, private http : Http){

	}
	getAll() : Observable<IBug[]>{
		return this.http
			.get(this.baseUrl)
			.map(response => response.json())

	}

	addNew(newBugData : IBug) : Observable<IBug>{
		
		return this.http
			.post(this.baseUrl, newBugData)
			.map(response => response.json());
	}

	toggle(bug : IBug) : Observable<IBug>{
		let toggledBug = this.bugOperations.toggle(bug);

		return this.http
			.put(`${this.baseUrl}/${bug.id}`, toggledBug)
			.map(response => response.json());
		
	}

	remove(bug : IBug) : Observable<any>{
		return this.http
			.delete(`${this.baseUrl}/${bug.id}`)
			.map(response => response.json())
	}
}