
//TOGGLE CLASSES

function toggleClass(el){
       if(el.className == "class1") {
         el.className = "class2";
       } else {
         el.className = "class1";
       }
}

function toggleClassR(el){
  if(el.className == "r") {
    el.className = "rickroll-image";
  } else {
    el.className = "r";
  }
}




function toggleClassOne(el){
 let kids = document.getElementsByClassName("menu2").children;
 for(var i = 0; i < kids.length; i++) {
   kids[i].className = "class1";
 }
 el.className = "class2";
}