console.log("hello world");

$(document).ready(function() {
  $("button.list").click(function() {
    $("button.list1").removeClass("active");
    $("button.list2").removeClass("active");
    $("button.list3").removeClass("active");
    $("button.list4").removeClass("active");
    $(this).addClass("active");
  });
});


var divs = ["project1", "project2", "project3", "project4"];
 var visibleId = null;
 function show(id) {
   if(visibleId !== id) {
     visibleId = id;
   }
   hide();
 }
 function hide() {
   var div, i, id;
   for(i = 0; i < divs.length; i++) {
     id = divs[i];
     div = document.getElementById(id);
     if(visibleId === id) {
       div.style.display = "flex";
     } else {
       div.style.display = "none";
     }
   }
 }
