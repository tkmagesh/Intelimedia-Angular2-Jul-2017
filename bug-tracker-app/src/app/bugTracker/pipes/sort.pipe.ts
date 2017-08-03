import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
	name : 'sort',
	pure : false
})
export class SortPipe implements PipeTransform{

	private getComparerFor(attrName : string) : IComparer {
		return function(item1 : any, item2 : any) : number {
			if (item1[attrName] > item2[attrName]) return 1;
			if (item1[attrName] < item2[attrName]) return -1;
			return 0;
	    }
	}

	private getDescendingComparerFor(comparer : IComparer): IComparer{
		return function(item1 : any, item2 : any) : number {
			return comparer(item1, item2) * -1;
	    }
	}

	transform(list : any[], attrName : string, isDescending : boolean = false) : any[] {
		console.log('sort.transform invoked');
		let comparer = this.getComparerFor(attrName);
		if (isDescending)
			comparer = this.getDescendingComparerFor(comparer);
		return list.sort(comparer);
	}
}



interface IComparer{
	(item1 : any, item2 : any) : number;
}