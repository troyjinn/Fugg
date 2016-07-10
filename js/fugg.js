//Wew lad
var fuggs = 0;
var cursors = 0;
var spardos = 0;

function fuggClick(number){
    fuggs = fuggs + number;
    document.getElementById("fugg").innerHTML = fuggs;
};

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));
    if(fuggs >= cursorCost){
        cursors = cursors + 1;
        fuggs = fuggs - cursorCost;
        document.getElementById("cursors").innerHTML = cursors;
        document.getElementById("fugg").innerHTML = fuggs;
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors));
    document.getElementById("cursorCost").innerHTML = nextCost;
};

function buySpardo(){
    var spardoCost = Math.floor(50 * Math.pow(1.1,spardos));
    if(fuggs >= spardoCost){
        spardos = spardos + 1;
        fuggs = fuggs - spardoCost;
        document.getElementById("spardos").innerHTML = spardos;
        document.getElementById("fugg").innerHTML = fuggs;
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,spardos));
    document.getElementById("spardoCost").innerHTML = nextCost;
};

// Automates cursors yo
window.setInterval(function() {
    fuggClick(cursors);
    fuggClick(spardos * 5);
}, 1000);
