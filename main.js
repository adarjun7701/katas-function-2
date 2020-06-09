// The Katas

// 1 ADD 

function add(x, y) {
  return (x + y)
}
console.log(add(2, 4))


// 2 Multiply 

function multiply(x, y) {
  let result = 0
  for (let index = 0; index < y; index++) {
    result = add(result, x)
  }
  return result;
}
console.log(multiply(6, 4))





// 3 Power/Exponentiation 

function power(x, n) {
  let result = 1
  for (let i = 0; i < n; i++) {
    result = multiply(result, x)
  }
  return result;
}
console.log(power(2, 8))





// 4  Factorial

function factorial(x) {
  let result = 1
  for (let i = 1; i <= x; i++) {
    result = multiply(result, i)
  }
  return result;
}
console.log(factorial(4))







// 5 Fibonacci

function fibonacci(result, length) {
  if (result.length >= length) {
    return result;
  }
}
console.log(fibonacci(8))

