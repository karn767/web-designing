$(document).ready(function(){
  $("#first").click(function(){
    $("#second").slideDown("slow");
  });
});

$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({left: '250px'});
  });
});