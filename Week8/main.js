var canvas = document.getElementById("myCanvas");
var context = canvas.getContext('2d');
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";
context.fillRect(10, 10, 100, 100);
context.strokeRect(10, 10, 100, 100);


var canvas2 = document.getElementById("myCanvas2");
var context2 = canvas2.getContext('2d');
var gradient = context2.createLinearGradient(0, 0, 0, 200);
gradient.addColorStop(0, "blue");
gradient.addColorStop(1, "white");
context2.fillStyle = gradient;
context2.fillRect(10, 10, 100, 100);
context2.strokeRect(10, 10, 100, 100);

var canvas3 = document.getElementById("myCanvas3");
var context3 = canvas3.getContext('2d');
context3.beginPath();
context3.arc(100, 100, 50, 0, Math.PI*2, true);
context3.closePath();
context3.strokeStyle = "red";
context3.fillStyle = "blue";
context3.lineWidth = 3;
context3.fill();
context3.stroke();

function saveDrawing() {
    var canvas4 = document.getElementById("myCanvas3");
    window.open(canvas4.toDataURL("image/png"));
}
var button = document.getElementById("saveButton");
button.addEventListener("click", saveDrawing, true);


var mice = document.querySelectorAll("#mouseContainer img");
var mouse = null;
for (var i=0; i < mice.length; i++) {
    mouse = mice[i];
    mouse.addEventListener('dragstart', function (event) {
        // handle the dragstart event
        event.dataTransfer.setData("text/plain", this.id);

    });
}
var cat = document.getElementById("cat");
cat.addEventListener("dragover", function(event) {
    event.preventDefault();
});

cat.addEventListener("drop", function(event) {
    var mouseHash = {
        mouse1: 'NOMNOMNOM',
        mouse2: 'Meow',
        mouse3: 'Purrrrrr ...'
    };
    var catHeading = document.getElementById('catHeading');
    var mouseID = event.originalEvent.dataTransfer.getData("text/plain");
    catHeading.innerHTML = mouseHash[mouseID];
    var mousey = document.getElementById(item);
    mousey.parentNode.removeChild(mousey);
    event.preventDefault();
});

v



   


   
   


   