// ajax Request for DELETE , UPDATE , INSERT

$(document).ready(function () {
  // this function work for show the data for table

  function showdata() {
    output = "";

    $.ajax({
      url: "retrieve.php",
      method: "GET",
      dataType: "json",
      success: function (data) {
        //  console.log(data);

        if (data) {
          x = data;
        } else {
          x = "";
        }
        for (i = 0; i < x.length; i++) {
          output +=
            "<tr><td>" +
            x[i].id +
            "</td><td>" +
            x[i].studentname +
            "</td><td>" +
            x[i].email +
            "</td><td>" +
            x[i].number +
            "</td><td>" +
            x[i].address +
            "</td><td><img src='./image/" +
            x[i].image +
            "' alt='No Image'   width='100px' ></td><td> <button class='btn btn-warning btn-sm btn-edit' data-sid=" +
            x[i].id +
            " >Edit</button> </td> <td> <button class='btn btn-danger btn-sm btn-del' data-sid=" +
            x[i].id +
            " >Delete</button></td></tr>";
        }

        $("#tbody").html(output);
      },
    });
  }
  showdata();


//This code for validation 
    
$("#register").validate({
    
  rules:{
  name:{
    required:true,
    lattersonly:true
    
  },
  email:{
      required:true,
      emailonly:true
  },
  number:{
      required:true,
      numericonly:true,
      minlength:10,
      maxlength:10
  
  },
  address:{
      required:true
  },

  image:{
      required:true,
      inputsize:true,
      inputf:true
     

  }

  },
  messages:{
      name:{
          required:'*Name is Required.',
          lattersonly:'*Only Character is Allowed.'
      },
      email:{
          required:'*Email is Required.', 
          emailonly:'*Enter Valid Email.'
  
      },
      number:{
          required:"*Number is Required.",
          numericonly:'*Only Digit is Allowed.',
          minlength:'*Minimum 10 Digit is Required.',
          maxlength:'*Enter Only 10 Digit.'
      },
      address:{
          required:'*Address is Required.'
      },
      image:{
          required:'*Please Select File.',
          inputsize:'*You can Upload only 2 MB size file.',
          inputf:'*Please Upload only jpeg,png,jpg format.'
         
      },
         
      },
      submitHandler: function(form,e) {
          e.preventDefault();
         
          var form = $('#register')[0];
          var data = new FormData(form);
          $.ajax({
              url:"insert.php",
              method:"POST",
              data:data,
              contentType:false,
              processData:false,
          
              success: function(response){
                  if(response == 1){
                  
                  toastr.success("Student Save Successfully", 'Success', {timeOut: 500});
                   $('#register')[0].reset();
                    $('#myModal').modal("hide");
                    showdata();
                  }else{
                      // toastr.warning('Invalid Details');
                      toastr.error('Enter valid Details', 'Invalid Details', {timeOut: 500})
          
                  }
              }
      
          });
         
      }
      
  
  });



  jQuery.validator.addMethod('inputf', function(){
      var field = $('#image').val();


      var str = field.split('.');

      var get = str.pop();

      var arr = ['jpeg','png','jpg',];

      var exta = arr.includes(get);

      if(exta){
         return true;
      }


  });

jQuery.validator.addMethod('inputsize', function(value,element){
  const maxsize = 10 * 1024 * 1024;
 const f = element.files[0].size;

   if(maxsize > f){
      return true;
   }

});

  
  jQuery.validator.addMethod('lattersonly', function(value,element){
      return /^[^-\s][a-zA-Z_\s-]+$/.test(value);
      
  
  });
  
  jQuery.validator.addMethod('numericonly', function(value,element){
      return /^[0-9]+$/.test(value);
  });
  
  jQuery.validator.addMethod('emailonly', function(value,element){
      return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
  });

  // This function for Delete the Data in student Table

  $("#tbody").on("click", ".btn-del", function () {
    let id = $(this).attr("data-sid");

    mydata = { sid: id };
    $.ajax({
      url: "delete.php",
      method: "POST",
      data: JSON.stringify(mydata),
      success: function (data) {
        toastr.success(data, 'Deleted', {timeOut: 500});
        showdata();
      },
    });
  });

  //this function for update student / edit

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

$("#tbody").on("click", ".btn-edit", function () {
  b = '';
  $('#image').val(b);
});


});
