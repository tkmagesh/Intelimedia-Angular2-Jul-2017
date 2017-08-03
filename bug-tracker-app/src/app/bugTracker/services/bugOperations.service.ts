import { IBug } from '../models/IBug';

export class BugOperationsService{
	createNew(bugName : string) : IBug {
		return {
			name : bugName,
			isClosed : false
		}
	}

	toggle(bug : IBug) : void {
		bug.isClosed = !bug.isClosed;
	}
}