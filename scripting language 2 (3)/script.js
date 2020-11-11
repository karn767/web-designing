function submitData() {
    var userName = $("#name").val();
    var rollNumber = $("#rollNo").val();
    var mobileNumber = $("mobile").val();
    var email = $("#email").val();
    $("#board").empty();
    displayInformation(userName, rollNumber, mobileNumber, email);
}

function displayInformation(userName, rollNumber, mobileNumber, email) {
    $("#board").append("<li>Name: " + userName + "</li>");
    $("#board").append("<li>Roll Number: " + rollNumber + "</li>");
    $("#board").append("<li>Mobile Number: " + mobileNumber + "</li>");
    $("#board").append("<li>Email id: " + email + "</li>");
}
