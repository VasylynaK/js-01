var name = prompt("What is your name?");
var greating = "Hello " + name +'.' + " I will help you solve the quadratic equation";
document.write(greating);

function squareEquation (a,b,c) {
    var discriminant = b*b - 4*a*c;
    var x1 = (-b + Math.sqrt(discriminant))/(2*a);
    var x2 = (-b - Math.sqrt(discriminant))/(2*a);
    return [x1, x2];
}

var a = Number(prompt('Please input parameter a'));
var b= Number(prompt('Please input parameter b'));
var c = Number(prompt('Please input parameter c'));
var calc = squareEquation (a, b, c);
var result = "X1= " + calc[0] + "; X2= " + calc[1];
var userInput = a + "x<sup>2</sup> +" +  b  + "x +" + c + "=0"; 
document.write("<br>" + "Your equation: " + userInput);
document.write("<br>" + "Result: " + result);