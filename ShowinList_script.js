var isClicked = false;
var isScrolled = 0;
function onEnter() {
    var list = document.getElementById("nav_list");
        list.style.display = "inline";
    
}
function onLeave() {
    if(!isClicked){
    var list = document.getElementById("nav_list");
        list.style.display = "none";
    }
    
}
function isClicked1(){
    isClicked = !(isClicked);
    onLeave();
}

function onItemSelect(){
    var list = document.getElementById("nav_list");
    if(list.style.display != "none"){
        isClicked = !(isClicked);
        list.style.display = "none";
    }
}

function showBack(){
    isScrolled++;
    if(isScrolled>0){
    var upArrow = document.getElementById("home_back");
        upArrow.style.display = "block";
        isScrolled = 0;

    }

    
}
function hideBack(){
    isScrolled = -44;
    var upArrow = document.getElementById("home_back");
    window.location.href = "#body_top";
    upArrow.style.display = "none";


    
}

