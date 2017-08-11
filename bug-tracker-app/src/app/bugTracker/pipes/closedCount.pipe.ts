import { Pipe, PipeTransform } from '@angular/core';
import { IBug } from '../models/IBug';

@Pipe({
	name : 'closedCount',
	pure : true
})
export class ClosedCountPipe implements PipeTransform{
	transform(list : IBug[]) : number{
		return list.reduce((prevResult, bug) => bug.isClosed ? ++prevResult : prevResult, 0);
	}
}