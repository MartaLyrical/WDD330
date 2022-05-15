//const board = document.querySelector('.board');
var step = 1;
//moving pieces
function move(a) {
    var elem = document.getElementById(a);
    
    if (!a.innerHTML) {
        if (step % 2 == 0) e = "O";
        else e = "X";

        elem.innerHTML = e;
        step++;
    }
}

//const tdAll = document.querySelectorAll("td");
const button = document.querySelector("#reset");

//resetBtn.addEventListener("click", reset);

function reset(){
    //tdAll.innerHTML = " ";
    var tds = document.getElementsByTagName('td');
    for(var i = 0; i < tds.length; i++) {
        tds[i].innerHTML = '';
    }
}
//console.log(tdAll);

