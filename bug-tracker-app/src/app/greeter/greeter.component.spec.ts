import { TestBed, async } from '@angular/core/testing';

import { GreeterComponent } from './greeter.component';
import { GreeterService } from './greeter.service';

/*describe('Greeter Component', () => {
	let sut = null;

	beforeEach(() => {
		sut = new GreeterComponent();
	});

	it('Should initialize the message with empty string', () => {
		//Arrange
		let expectedMessage = '';

		//Act

		//Assert
		expect(sut.message).toBe(expectedMessage);
	});

	it('Should prepare the message when greeted', () => {
		//Arrange
		let username = 'Magesh',
			expectedMessage = `Hi Magesh, Have a nice day!`;

		//Act
		sut.greet(username);

		//Assert
		expect(sut.message).toBe(expectedMessage);
	})
});*/

/*class MockGreeterService{
	getMessage(name : string) : string{
		return 'dummy greet message - wrong';
	}
}*/

let mockGreeterService = {
	getMessage : function(){
		return 'dummy greet message';
	}
};

describe("Greeter Component", () => {
	beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GreeterComponent
      ],
      providers : [
      	/*{ provide : GreeterService, useClass : MockGreeterService }*/
      	{ provide : GreeterService, useValue : mockGreeterService }
      ]
    }).compileComponents();
  }));

  it('Should prepare the message when greeted', async(() => {
    const fixture = TestBed.createComponent(GreeterComponent);
    const greeterComponent = fixture.debugElement.componentInstance;
    const expectedMessage = 'dummy greet message';

    greeterComponent.greet();

    expect(greeterComponent.message).toBe(expectedMessage);
  }));
})