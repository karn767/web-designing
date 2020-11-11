$(document).ready(function(){
  $("p").dblclick(function(){
    alert("The paragraph was double-clicked.");
  });
});

function mouseDown() {
  document.getElementById("container2").style.color = "red";
}

function mouseUp() {
  document.getElementById("container2").style.color = "green";
}

$(document).ready(function(){
  $(document).mousemove(function(event){
    $("span").text(event.pageX + ", " + event.pageY);
  });
});


$(document).ready(function(){
  $("#container4").mouseenter(function(){
    $("#container4").css("background-color", "yellow");
  });
//   $("p").mouseleave(function(){
//     $("p").css("background-color", "lightgray");
//   });
});