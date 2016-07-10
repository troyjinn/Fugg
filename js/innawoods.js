//Wew lad
var woods = 0;
var knives = 0;

function woodClick(number){
    woods = woods + number;
    document.getElementById("wood").innerHTML = woods;
};

function buyKnife(){
    var knifeCost = Math.floor(10 * Math.pow(1.1,knives));
    if(woods >= knifeCost){
        knives = knives + 1;
        woods = woods - knifeCost;
        document.getElementById("knives").innerHTML = knives;
        document.getElementById("wood").innerHTML = woods;
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,knives));
    document.getElementById("knifeCost").innerHTML = nextCost;
};

// Automates knives yo
window.setInterval(function() {
    woodClick(knives);
}, 10);

if(woods >= nextCost){
    buyKnife();
};
