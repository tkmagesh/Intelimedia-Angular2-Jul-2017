import { BugOperationsService } from './bugOperations.service';

describe("Bug Operations Service", () => {
	var sut = null;
	beforeEach(() => {
		sut = new BugOperationsService();
	});

	it('Should create new bug object', () => {
		let result = sut.createNew(100, 'test bug');
		expect(result).toBeDefined();
	});

	it('Should create new bug object with the closed default to false', () => {
		let result = sut.createNew(100, 'test bug');
		expect(result.isClosed).toBe(false);
	});
	
	it('Should toggle the isClosed when toggled', function(){
		let testBug = { isClosed : true};
		let result = sut.toggle(testBug);
		expect(result.isClosed).toBe(!testBug.isClosed);
	})
})