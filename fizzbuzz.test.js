const { createFizzBuzz } = require('./fizzbuzz');

describe ("si el numero es multiplo de 3 y 5", () =>{

test("debe ser fizz", () =>{

  expect(createFizzBuzz(9)).toBe('Fizz');

});

test("debe ser buzz", () =>{

  expect(createFizzBuzz(10)).toBe('Buzz');
});

test("debe ser fizzbuzz", () => {

  expect(createFizzBuzz(15)).toBe('FizzBuzz');
});
});

test("debe ser un numero entero", () =>{

  expect(createFizzBuzz("holaMundo")).toBe("No es un numero entero");
})
  
 


