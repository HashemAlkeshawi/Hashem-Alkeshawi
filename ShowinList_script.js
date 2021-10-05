var isClicked = false;
function onEnter() {
    var list = document.getElementById("nav_list");
        list.style.transitionProperty="0.8s"
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

