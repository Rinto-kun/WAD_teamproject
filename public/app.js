$( document ).ready(function() {
   $('#login_link').click(function() {
       $('#login_wrap').addClass('active');
    });
    
    $('#close_login').click(function() {
        $('#login_wrap').removeClass('active');
    });
    
    if ( $('#login_wrap').hasClass('false') ){
        $('#login_wrap').addClass('active');
    } else if ( $('#login_wrap').hasClass('true') ){
        $('#login_wrap').removeClass('active');        
    }
    
    $('a').each(function(){
        if ($(this).prop('href') == window.location.href) {
            $(this).addClass('active'); $(this).parents('li').addClass('active');
        }
    });
});