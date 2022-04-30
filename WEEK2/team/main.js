function sum(){
    n = document.getElementById("content").value;
    let result = 0;
    for(i = 0; i<= n; i++){
        result += i;
        
    }
    
    document.getElementById("result").innerHTML = "The sum of " + n + "= " + result;
    

}

function calculate(){
    n = parseInt( document.getElementById("content2").value);
    n2 = parseInt(document.getElementById("content3").value);
    let sum = 0;
    sum = n + n2;
    document.getElementById("calculate").innerHTML = "The sum of " + n +  "+ " + n2 + " = " + sum;

}

function addition(){
    n = parseInt( document.getElementById("content4").value);
    n2 = parseInt(document.getElementById("content5").value);
    let sum = 0;
    sum = n + n2;
    document.getElementById("calculation").innerHTML =  n +  "+ " + n2 + " = " + sum;

}

function subtract(){
    n = parseInt( document.getElementById("content4").value);
    n2 = parseInt(document.getElementById("content5").value);
    let sum = 0;
    sum = n - n2;
    document.getElementById("calculation").innerHTML =  n +  " - " + n2 + " = " + sum;

}

function multiply(){
    n = parseInt( document.getElementById("content4").value);
    n2 = parseInt(document.getElementById("content5").value);
    let sum = 0;
    sum = n * n2;
    document.getElementById("calculation").innerHTML =  n +  " * " + n2 + " = " + sum;

}

function division(){
    n = parseInt( document.getElementById("content4").value);
    n2 = parseInt(document.getElementById("content5").value);
    let sum = 0;
    sum = n / n2;
    document.getElementById("calculation").innerHTML =  n +  " / " + n2 + " = " + sum;

}