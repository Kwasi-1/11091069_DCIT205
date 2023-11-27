// javascript to toggle navbar


var navs = document.getElementById("navs");
function showMenu(){
  navs.style.right = "0";
}
function hideMenu(){
  navs.style.right = "-200px";
}

// function showCourses(){
//   var list = documnet.getElementByClassName("hideCourses");
//   if (list.style.display == "none"){
//     list.style.display == "block";
//   }else{
//     list.style.display == "none";
//   }
// }
window.onscroll = function() {scrollFunction()};
// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }
// }