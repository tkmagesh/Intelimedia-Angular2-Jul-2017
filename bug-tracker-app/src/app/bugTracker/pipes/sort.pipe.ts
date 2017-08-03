import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name : 'sort'
})

interface IComparer{
	(item1 : any, item2 : any) : number;
}


export class SortPipe implements PipeTransform{

	private getComparerFor(attrName : string) : IComparer {
		return function(item1 : any, item2 : any) : number {
			if (item1[attrName] > item2[attrName]) return 1;
			if (item1[attrName] < item2[attrName]) return -1;
			return 0;
	    }
	}
	transform(list : any[], attrName : string) : any[] {
		return list.sort(this.getComparerFor(attrName));
	}
}