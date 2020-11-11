$(document).ready(function(){
    var myJson = {"name": "Karan", "age": 23, "city":"Montreal"};
    $("h2").html(myJson.name + ", " + myJson.age + ", " + myJson.city);
});