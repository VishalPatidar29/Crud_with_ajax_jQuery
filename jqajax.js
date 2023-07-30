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

output += "<tr><td>" + x[i].id + "</td><td>" + x[i].studentname + "</td><td>" + x[i].email + "</td><td>" + x[i].number + "</td><td>" + x[i].address + "</td><td><img src='./image/"+ x[i].image +"'"+" alt='No Image'   width='100px' ></td><td> <button class='btn btn-warning btn-sm btn-edit' data-sid="+ x[i].id+ "   >Edit</button> </td> <td> <button class='btn btn-danger btn-sm btn-del' data-sid="+ x[i].id+ " >Delete </button></td></tr>";
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
        if(response == 1){
        toastr.success("Student Save Successfully", 'Success', {timeOut: 500});
        }else{
            toastr.warning('Invalid Details');
            toastr.error('Enter valid Details', 'Invalid Details', {timeOut: 500})

        }
        // console.log(response);
        $('#register')[0].reset();
        showdata();
        $('#myModal').modal("hide");
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
        toastr.success(data, 'Deleted', {timeOut: 500});
    // console.log(data);
   showdata();

},


});

});

// this code for edit data
$("#tbody").on("click", ".btn-edit", function () {
    console.log("button clicked");
    let id = $(this).attr("data-sid");
     console.log(id);
    mydata = { sid: id };
    $("#myModal").modal("show");
    $('#submitadd').hide();
    $('#btnEditEmployee').show();
    $.ajax({
      url: "edit.php",
      method: "POST",
      dataType: "json",
      data: JSON.stringify(mydata),

      success: function (data) {
        console.log(data);
          $('#id').val(data.id);
          $('#name').val(data.studentname);
          $('#email').val(data.email);
          $('#number').val(data.number);
          $('#address').val(data.address);
        
      },
    });
  });


// this function for button edit

$('#btnCreate').click(function(){
       a =""; 
    $('#id').val(a);
    $("#register")[0].reset();
    $('#submitadd').show();
    $('#btnEditEmployee').hide();
  
  });


});