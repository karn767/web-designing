$(document).ready(function(){
    var myJson = {"name": "John Doe", "age": 21, "city":"Montreal"};
    $("h2").html(myJson.name + ", " + myJson.age + ", " + myJson.city);
});