const { FizzBuzz } = require('./fizzbuzz');

describe ("prueba de función FizzBuzz", () =>{
 
  test("Debe retornar Fizz", () =>{
    const input = 9;
    expect(FizzBuzz(input)).toBe('Fizz');
  });

  test("Debe retornar Buzz", () =>{
    const input = 10;
    expect(FizzBuzz(input)).toBe('Buzz');
  });

  test("Debe retornar FizzBuzz", () => {
    const input = 15;
    expect(FizzBuzz(input)).toBe('FizzBuzz');
  });

  test("Debe retornar el número que se ingresó", () => {
    const input = 23;
    expect(FizzBuzz(input)).toBe(input);
  });

  test("Debe retornar: 'No es un número entero'", () => {
    const input = "hola Mundo";
    expect(FizzBuzz(input)).toBe("No es un número entero");
  });

});
 


