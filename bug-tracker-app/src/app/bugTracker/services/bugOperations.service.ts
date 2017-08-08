import { IBug } from '../models/IBug';

export class BugOperationsService{
	private currentBugId : number = 0;

	createNew(bugName : string) : IBug {
		return {
			id : ++this.currentBugId,
			name : bugName,
			isClosed : false
		}
	}

	toggle(bug : IBug) : IBug {
		/*let toggledBug : IBug = {
			id : bug.id,
			name : bug.name,
			isClosed : !bug.isClosed
		};
		return toggledBug;*/

		let toggledBug : IBug = { ...bug, isClosed : !bug.isClosed};
		return toggledBug;
		
	}
}