// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
    $('#episode-one-link').click(function(){
        $('#episode-one').show();
         $('#episode-one').css('background-color','black');
         $('#episode-one').css('color','yellow');
        $("#episode-one-link").animate({
            opacity: '0.5',
            height: '150px',
            width: '150px' });
        $('#episode-two').hide();
        $('#episode-three').hide();
        $('#episode-four').hide();
        $('#episode-five').hide();
        $('#episode-six').hide();
        $('#episode-seven').hide();                                              
    });
    $('#episode-two-link').click(function(){
       $('#episode-two').show()
        .css('background-color','black')
        .css('color','yellow'); 
        $('#episode-two').slideUp(2000).slideDown(2000);      
        $('#episode-one').hide();
        $('#episode-three').hide();
        $('#episode-four').hide();
        $('#episode-five').hide();
        $('#episode-six').hide();
        $('#episode-seven').hide();          
    });
    $('#episode-three-link').click(function(){
        $('#episode-three').show(1000)
        .css('background-color','black')
        .css('color','yellow'); 
        $('#episode-two').hide();
        $('#episode-one').hide();
        $('#episode-four').hide();
        $('#episode-five').hide();
        $('#episode-six').hide();
        $('#episode-seven').hide();            
    });
    $('#episode-four-link').click(function(){
        $('#episode-four').fadeIn(1500)     
        .css('background-color','black')
        .css('color','yellow');      
        $('#episode-two').hide();
        $('#episode-three').hide();
        $('#episode-one').hide();
        $('#episode-five').hide();
        $('#episode-six').hide();
        $('#episode-seven').hide();            
    });
    $('#episode-five-link').click(function(){
        $('#episode-five').show()
        $('#episode-five').fadeToggle(3000)
        .css('background-color','black')
        .css('color','yellow');     
        $('#episode-two').hide();
        $('#episode-three').hide();
        $('#episode-four').hide();
        $('#episode-one').hide();
        $('#episode-six').hide();
        $('#episode-seven').hide();             
    });
    $('#episode-six-link').click(function(){
        alert('You clicked episode six!');
        $('#episode-six').show()
        .css('background-color','black')
        .css('color','yellow');     
        $('#episode-two').hide();
        $('#episode-three').hide();
        $('#episode-four').hide();
        $('#episode-five').hide();
        $('#episode-one').hide();
        $('#episode-seven').hide();             
    })
    $('#episode-seven-link').click(function(){
        $('#episode-seven').show()
        .css('background-color','black')
        .css('color','yellow');          
        $('#episode-two').hide();
        $('#episode-three').hide();
        $('#episode-four').hide();
        $('#episode-five').hide();
        $('#episode-six').hide();
        $('#episode-one').hide();              
    })
});