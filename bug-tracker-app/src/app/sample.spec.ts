var calculator = {
	add : function(x,y){
		return x + y;
	},
	subtract : function(x,y){
		return x - y;
	}
}

describe("A Calculator", function(){
	it("should be able to add 2 numbers", function(){
		//arrange
		var n1 = 10,
			n2 = 20,
			expectedResult = 30;

		//act
		var result = calculator.add(n1, n2);

		//assert
		expect(result).toBe(expectedResult);
	})
	it("should be able to subtract 2 numbers", function(){
		//arrange
		var n1 = 10,
			n2 = 20,
			expectedResult = -10;

		//act
		var result = calculator.subtract(n1, n2);

		//assert
		expect(result).toBe(expectedResult);
	})
})