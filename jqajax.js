// ajax Request for insert data

$("#register").submit(function (e){
e.preventDefault();
 
$.ajax({
    url:"insert.php",
    method:"POST",
    data:new FormData(this),
    contentType:false,
    processData:false,

    success: function(response){

        console.log(response);
    },
    error: function (xhr) { console.log(xhr.responseText); } 


});

});