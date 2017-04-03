function squareRoot (a,b,c) {
    var discriminant = b*b - 4*a*c;
    var x1 = (-b + Math.sqrt(discriminant))/(2*a);
    var x2 = (-b - Math.sqrt(discriminant))/(2*a);
    return [x1, x2];
}

function showResult(){
var a = document.getElementById("argumentA").value;
var b= document.getElementById("argumentB").value;
var actionB = document.getElementById("argumentActionB").value;
var c = document.getElementById("argumentC").value;
var actionC = document.getElementById("argumentActionC").value;
var calc = squareRoot (a, actionB + b, actionC + c);
var result = "X1= " + calc[0] + "; X2= " + calc[1];
var userInput = a + "x<sup>2</sup>" + actionB +  b  + "x" + actionC + c + "=0"; 
document.write("Your equation: " + userInput);
document.write("<br>" + "<br>"+"Result: " + result);
}