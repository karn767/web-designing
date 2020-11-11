function formData() {
    var first = $("#first").val();
    var last = $("#last").val();
    var group = $("#blood option:selected")
    var mobile = $("mobile").val();
    var id = $("#id").val();
    var textarea = $("#textarea").val();
    var age = $("#age").val()
    var gender = $("#gender").val()
    var vehicle = $(".radio:checked").val();
    var life = $( "#life option:selected" ).val();
    $("#boardfordata").empty();
    info(first, last, group, id, mobile, textarea, age, vehicle, gender, life);
}

function info(first, last, group, id, mobile, textarea, age, vehicle, gender, life) {
    $("#boardfordata").append("<li>First Name: " + first + "</li>");
    $("#boardfordata").append("<li>Last Name: " + last + "</li>");
    $("#boardfordata").append("<li>Blood Group: " + group + "</li>");
    $("#boardfordata").append("<li>Student Id: " + id + "</li>");
    $("#boardfordata").append("<li>Mobile Number: " + mobile + "</li>");
    $("#boardfordata").append("<li>Address: " + textarea + "</li>");
    $("#boardfordata").append("<li>Age: " + age + "</li>");
    $("#boardfordata").append("<li>Own a car: " + vehicle + "</li>");
    $("#boardfordata").append("<li>Gender: " + gender + "</li>");
    $("#boardfordata").append("<li>Martial status: " + life + "</li>");
}
