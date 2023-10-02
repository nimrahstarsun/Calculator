var numButton = document.querySelectorAll(".operand");
var synButton = document.getElementsByClassName("sygn");
var lowerBox = document.querySelector("#result");
var upperBox = document.querySelector("#calc");
var btnClear = document.querySelector(".clear");
var btnEqual = document.querySelector(".equal");
var btnBack = document.querySelector(".back");
var operand = [];
var operator = [];
var result = 0;

btnEqual.addEventListener("click", function(){
    upperBox.value = lowerBox.value;
    var str = lowerBox.value;
    var temp = "";
    for (var i = 0; i < str.length; i++) {
        if ((parseInt(str[i])>=0 && parseInt(str[i])<=9) || str[i]=='.')  {
            temp = temp + str[i];
        }
        else {
            var number = parseFloat(temp);
            operand.push(number);
            operator.push(str[i]);
            temp = "";
        }
    }
    var number = parseFloat(temp);
    operand.push(number);

    var count = operator.length;
    while (count--) {
        var check = operator.shift();
        if(check === "*") {
            result = operand.shift() * operand.shift();
        }
        else if(check === "+") {
            result = operand.shift() + operand.shift();
        }
        else if(check === "-") {
            result = operand.shift() - operand.shift();
        }
        else if(check === "/") {
            result = operand.shift() / operand.shift();
        }
        else {
            result = operand.shift() % operand.shift();
        }
        operand.unshift(result);
    }
    lowerBox.value = result;
    operand = [];
    operator = [];
});

btnBack.addEventListener("click", function() {
    var step = lowerBox.value;
    step = step.slice(0, -1);
    lowerBox.value = step;
});

btnClear.addEventListener("click", function() {
    lowerBox.value = "";
    upperBox.value = "";
    operand = [];
    operator = [];
    result = 0;
});

synButton[4].addEventListener("click", function(){
    var currentVal = lowerBox.value;
    lowerBox.value = currentVal + "+";
});

synButton[3].addEventListener("click", function(){
    var currentVal = lowerBox.value;
    lowerBox.value = currentVal + "-";
});

synButton[2].addEventListener("click", function(){
    var currentVal = lowerBox.value;
    lowerBox.value = currentVal + "*";
});

synButton[1].addEventListener("click", function(){
    var currentVal = lowerBox.value;
    lowerBox.value = currentVal + "/";
});

synButton[0].addEventListener("click", function(){
    var currentVal = lowerBox.value;
    lowerBox.value = currentVal + "%";
});


numButton[6].addEventListener("click", function(){
    var currentVal = lowerBox.value;
    lowerBox.value = currentVal + 1;
});

numButton[7].addEventListener("click", function(){
    var currentVal = lowerBox.value;
    lowerBox.value = currentVal + 2;
});

numButton[8].addEventListener("click", function(){
    var currentVal = lowerBox.value;
    lowerBox.value = currentVal + 3;
});

numButton[3].addEventListener("click", function(){
    var currentVal = lowerBox.value;
    lowerBox.value = currentVal + 4;
});

numButton[4].addEventListener("click", function(){
    var currentVal = lowerBox.value;
    lowerBox.value = currentVal + 5;
});

numButton[5].addEventListener("click", function(){
    var currentVal = lowerBox.value;
    lowerBox.value = currentVal + 6;
});

numButton[0].addEventListener("click", function(){
    var currentVal = lowerBox.value;
    lowerBox.value = currentVal + 7;
});

numButton[1].addEventListener("click", function(){
    var currentVal = lowerBox.value;
    lowerBox.value = currentVal + 8;
});

numButton[2].addEventListener("click", function(){
    var currentVal = lowerBox.value;
    lowerBox.value = currentVal + 9;
});

numButton[9].addEventListener("click", function(){
    var currentVal = lowerBox.value;
    lowerBox.value = currentVal + 0;
});

numButton[10].addEventListener("click", function(){
    var currentVal = lowerBox.value;
    lowerBox.value = currentVal + ".";
});
