
$(document).ready(function(){
    $('#wawbtn').click(function(){
        $('#waw').show(1000)                          
    });
    $('#nycbtn').click(function(){
       $('#nyc').show(1000)        
    });
    $('#cmibtn').click(function(){
        $('#cmi').show(1000)          
    })
});

function upDate(pic, target){
    var src = pic.getAttribute("src");
    document.getElementById('enlarge').style.backgroundImage="url('" + src + "')";
    document.getElementById('details').innerHTML = document.getElementById(target).innerHTML;
}
