$(function(){

    var $registerform = $("#register");
    
    $registerform.validate({
    
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
           
        }
        
    
    })



    jQuery.validator.addMethod('inputf', function(){
        var field = $('#image').val();


        var str = field.split('.');

        var get = str.pop();

        var arr = ['jpeg','png','jpg',];

        var exta = arr.includes(get);

        if(exta){
           return true;
        }


    })

jQuery.validator.addMethod('inputsize', function(value,element){
    const maxsize = 10 * 1024 * 1024;
   const f = element.files[0].size;

     if(maxsize > f){
        return true;
     }

})

    
    jQuery.validator.addMethod('lattersonly', function(value,element){
        return /^[^-\s][a-zA-Z_\s-]+$/.test(value);
        
    
    })
    
    jQuery.validator.addMethod('numericonly', function(value,element){
        return /^[0-9]+$/.test(value);
    })
    
    jQuery.validator.addMethod('emailonly', function(value,element){
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
    })


 
    })

  /*   <td><img src="./image/<?php echo $list['image'] ?>" alt="No Image"   width="100px" ></td> */