

const { returnTwo, greeting, add, multiply, divide, subtract } = require('./functions')

test("Should return the integer 2", () => {
    expect(returnTwo()).toEqual(2)
})

test("Should return a greeting to the past in user", () => {
    expect(greeting('James')).toEqual(`Hello, James.`)
    expect(greeting('Jill')).toEqual(`Hello, Jill.`)
})

describe('Math functions', () => {
    describe("add function", () => {
        test("Should return the sum of num 1 and num 2", () => {
            expect(add(2,2)).toEqual(4)
        });

        test("Should return the sum of num 1 and num 2 even with extra params", () => {
            expect(add(2,2,6,5)).toEqual(4)
        });
    })
    
    describe("multiplaction function", () => { 
        test("Should return the multiplication of num 1 and num 2", () => {
            expect(multiply(5,5)).toEqual(25)
        });
        
        test("Should return the multiplication of num 1 and num 2 even if a string is passed in", () => {
        expect(multiply("5","7")).toEqual(35)
        });

    })
   
    test("Should return the division of num 1 and num 2", () => {
        expect(divide(10,2)).toEqual(5)
    });

    test("Should return the subtraction of num 1 and num 2", () => {
        expect(subtract(5,3)).toEqual(2)
    });
})






