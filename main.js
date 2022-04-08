var points = 0;
var updated_points = 0;

function start() {
    document.getElementById("click_me").style.display="inline";
    document.getElementById("points").innerHTML= points ;
    document.getElementById("jado").innerHTML= "Keep Going On!!";
    document.getElementById("jado").style.backgroundColor="yellow";  
}

function yo() {
    points = points+1;
    localStorage.setItem("points",points);
    updated_points = localStorage.getItem("points",points);
    document.getElementById("points").innerHTML= updated_points ;
    
    setTimeout(function()
    {
        po();
    },60000);

}

function po() {
    document.getElementById("points").innerHTML= points ;
    document.getElementById("click_me").style.display="none";
    document.getElementById("jado").innerHTML= "You Won!!!!";
    document.getElementById("jado").style.backgroundColor="green"; 
}