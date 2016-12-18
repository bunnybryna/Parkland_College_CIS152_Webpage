// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
    
    $("#email_form").validate({
        rules:{
            "email_1":{
                required: true,
                email: true,
            },
            
            "email_2":{
                required: true,
                email: true,
                equalTo: "#email_1",
            },    
            
            "full_name":{
                required: true,
                minlength: 3,       
            },
            
            "address_1":{
                required: true,
            },

            "address_2":{
                required: true,
            },
            
            "city":{
                required: true,
            },
                 
            "phone":{
                required: true,
                number: true,
                minlength: 10,                  
                maxlength: 11,
            },                   
        },
        messages:{
            "email_1":{
                required: "Email address is required.",
                email: "Please enter a valid email address.",
            },
            
            "email_2":{
                required: "Email address is required.",
                email: "Please enter a valid email address.",
                equalTo: "Email addresses must match.",                
            },
            
            "full_name":{
                required: "Name is required.",
                minlength: "Name should be more than 3 characters.",
            },            
            
            "address_1":{
                required: "Street number is required.",
            },
            
            "address_2":{
                required: "Unit number is required.",
            },
            
            "city":{
                required: "City is required.",                
            },  
                                  
            "phone":{
                required: "Phone number is required.",
                number: "Please enter numbers.",
                minlength: "Please enter a US number.",
                maxlength: "Please enter no more than 10 characters."
            },
        }     
    });
});