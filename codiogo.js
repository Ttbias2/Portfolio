$(document).ready(function () {
    
    $('#bpr').click(function (e) { 
       
        $("html,body").animate({
            scrollTop:$('#Presentacion').offset().top
        })
    });

    $('#bsk').click(function (e) { 
       
        $("html,body").animate({
            scrollTop:($('#Skills').offset().top)-50
        })
    });

    $('#bpo').click(function (e) { 
       
        $("html,body").animate({
            scrollTop:($('#Portfolio').offset().top)-200
        })
    });

    $('#bco').click(function (e) { 
       
        $("html,body").animate({
            scrollTop:$('#Contacto').offset().top
        })
    });



});