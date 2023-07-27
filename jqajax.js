// ajax Request for insert data

$(document).ready(function(){

// this function work for show the data for table 
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

output += "<tr><td>" + x[i].id + "</td><td>" + x[i].studentname + "</td><td>" + x[i].email + "</td><td>" + x[i].number + "</td><td>" + x[i].address + "</td><td><img src='./image/"+ x[i].image +"'"+" alt='No Image'   width='100px' ></td><td> <button class='btn btn-warning btn-sm btn-edit'>Edit</button> </td> <td> <button class='btn btn-danger btn-sm btn-del' data-sid="+ x[i].id+ " >Delete </button></td></tr>";
}


$("#tbody").html(output);
 },

});
}
showdata();


// this function for store the data  in table take user input
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
        showdata();
    },
    error: function (xhr) { console.log(xhr.responseText); } 

});

});


// This function for Delete the Data in student Table

$("#tbody").on("click", ".btn-del", function(){ 

    let id = $(this).attr("data-sid");

mydata = {sid:id};
mythis = this;
$.ajax({
 
    url:"delete.php",
    method:"POST",
    data:JSON.stringify(mydata),
    success:function(data){
    // console.log(data);
   showdata();

},


});

});


});