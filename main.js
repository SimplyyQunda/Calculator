var answerbox = document.getElementById("answer");
var calcbutton = document.getElementById('calculate-button');



var setCalc =function()
{
var valueone = document.getElementById('value-one');
var valuetwo = document.getElementById('value-two');

var x = Number(valueone.value)
var y = Number(valuetwo.value)

var sum = x + y;

answer.innerHTML = sum;
};
 


calcbutton.addEventListener("click", setCalc);