// javascript to joogle navbar

var navs = document.getElementById("navs");
function showMenu(){
  navs.style.right = "0";
}
function hideMenu(){
  navs.style.right = "-200px";
}

function showCourses(){
  var list = documnet.getElementByClassName("hideCourses");
  if (list.style.display == "none"){
    list.style.display == "block";
  }else{
    list.style.display == "none";
  }
}