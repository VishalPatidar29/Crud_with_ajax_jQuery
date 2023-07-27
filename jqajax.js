// ajax Request for insert data

$(document).ready(function(){

function showdata(){
    output = "";
    
$.ajax({

  url:"retrieve.php",
 method: "GET",
 dataType: "json",
 success:function(data){
//  console.log(data);

if(data){
    x = data;
}else{
    x ="";
}
for(i=0; i < x.length; i++){

output += "<tr><td>" + x[i].id + "</td><td>" + x[i].studentname + "</td><td>" + x[i].email + "</td><td>" + x[i].number + "</td><td>" + x[i].address + "</td><td><img src='./image/"+ x[i].image +"'"+" alt='No Image'   width='100px' ></td><td> <button class='btn btn-warning btn-sm btn-edit'>Edit</button> </td> <td> <button class='btn btn-danger btn-sm btn-edit'>Delete </button></td></tr>"
}


$("#tbody").html(output);


 },

});
}
showdata();



$("#register").submit(function (e){
e.preventDefault();
 
$.ajax({
    url:"insert.php",
    method:"POST",
    data:new FormData(this),
    contentType:false,
    processData:false,

    success: function(response){
       msg = "<div class = 'alert alert-dark mt-3'>"+ response + "</div>";
       $('#msg').html(msg);
        // console.log(response);
        $('#register')[0].reset();
    },
    error: function (xhr) { console.log(xhr.responseText); } 


});

});

});