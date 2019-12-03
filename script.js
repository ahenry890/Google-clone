$(document).ready(function(){
$("#search").on("click",function(){
var search = $("input:text").val().replace(/ /g,"+");
window.open("https://www.google.com/#q=" + search); // Allows search button to work
  });
}); 
