function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(2, 5));
console.log(calculateSum(10, 10));
console.log(calculateSum(5, 5));

function calculateDifference(num1, num2) {
  return num1 - num2;
}

console.log(calculateDifference(22, 5));
console.log(calculateDifference(12, 1));
console.log(calculateDifference(17, 9));

function calculateProduct(num1, num2) {
  return num1 * num2;
}

console.log(calculateProduct(13, 5));


function calculateQuotient(num1, num2) {
  return num2 === 0 ? "Error: Division by zero" : num1 / num2;
}

console.log(calculateQuotient(7, 11));
console.log(calculateQuotient(3, 0));

function calculateSquare(num) {
  return num ** 2;
}

console.log(calculateSquare(2));
console.log(calculateSquare(9));

function calculateSquareRoot(num) {
  return Math.sqrt(num);
}
console.log(calculateSquareRoot(25));
console.log(calculateSquareRoot(100));

//verifica que un argumentos sea boolean
function booWho(a){
  if(a === true || a === false){
    return true;
  }else{
    return false;
  }
}


//enmascaara un email con asteriscos

//let email = "jhoelOlivera165@gmail.com";
let email = "user@domain.org";
function maskEmail(email){
  let num = email.indexOf("@") -1;
  let ast = "*";
  email = email[0]+ast.repeat(num-1)+email.slice(num);
  return email;
}
console.log(maskEmail(email));