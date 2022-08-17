$(document).ready(function(){
    $('.container').mousemove(function(e){
        var w = e.pageX - $(this).offset().left;
        $(this).find('.image-left').width(w);
        $(this).find('.image-right').width($(this).width() - w);
    });
});