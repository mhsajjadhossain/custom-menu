$(function() {
    
    "use strict";

      
    $('.toggler-button button').on('click', function(){
        $(this).toggleClass('active');
        $('.nav-menu').toggleClass('active');
        $('body').toggleClass('active');
    });
    

    
});