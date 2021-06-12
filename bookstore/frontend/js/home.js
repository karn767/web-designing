$( document ).ready(function() {
    var credential = localStorage.getItem('credentialCheck');
    if (credential == 'false' || credential == null){
        location.href="login.html";
    }
    getBookName();
    getAllBooks();
});

function getBookName(){
    $("#bookSearch").keyup(function(){
        var bookToSearch = $("#bookSearch").val();
        if( bookToSearch.length != 0){
            var url = "http://localhost:5555/getBookInfo/" + bookToSearch;
            $("#groceries").empty();
            $.ajax({url: url, success: function(data){
                if (data["result"] !== null){
                    $("#groceries").append(
                        '<div class="col-md-3">' +
                            '<div class="card">' +
                                '<div style="width:15rem;">' +
                                    '<img src="http://localhost:5555/'+ data["result"]["imageName"] +'" class="card-img-top img-responsive" alt="...">'+
                                '</div>' +
                                '<div class="card-body">' +
                                    '<h5 class="card-title">'+ data["result"]["groceriesName"] +'</h5>' +
                                    '<a href="'+ data["result"]["metroUrl"] +'" target="_blank">Go to Metro</a>'+
                                '</div>'+
                            '</div>' +
                        '</div> ');
                }
            }});
        }else{
            getAllBooks();
        }
        
    });
}

