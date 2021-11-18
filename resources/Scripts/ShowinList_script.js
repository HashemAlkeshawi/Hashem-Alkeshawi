/* Hashem Alkeshawi 120190191 */
var isScrolled = 0;
var lastScrollTop = 0;
var element = document.body;

window.addEventListener("scroll", function(){ 
   var st = window.pageYOffset || document.documentElement.scrollTop;

   var the_top = document.getElementById("top");
   var navList = document.getElementById("nav_list");
   var floatingLogo = document.getElementById("floating_name_logo");
   
   if (st > lastScrollTop){
    navList.style.visibility = "hidden";
    the_top.style.visibility = "hidden";
    floatingLogo.style.visibility = "visible";
   } else {
      the_top.style.visibility = "visible";
      navList.style.visibility = "visible";
      floatingLogo.style.visibility = "hidden";
   }
   /* Hashem Alkeshawi 120190191 */
   lastScrollTop = st <= 0 ? 0 : st; 
}, false);


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
/* Hashem Alkeshawi 120190191 */
function hideBack(){
    isScrolled = -44;
    var upArrow = document.getElementById("home_back");
    window.location.href = "#body_top";
    upArrow.style.display = "none";
    
    
}
function onHover(){
    var img = document.getElementById("img_contact");
    img.style.float = "right";
    img.style.display = "inline";
    img.style.transition = "0.4s";
}

function onNotHover(){
    var img = document.getElementById("img_contact");
    img.style.display = "none";
    img.style.transition = "0.4s";
}

function Send(){
    var text = document.getElementById("massage").value;
    var url = "https://wa.me/970592103756?text="+text;
    window.open(url, '_blank');
}
/* Hashem Alkeshawi 120190191 */
