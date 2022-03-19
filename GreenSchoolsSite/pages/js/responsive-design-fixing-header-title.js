$(function(){
    var mobile;
    if (window.screen.width > 479) {
        $(document).on('scroll', function(){
            $('.header-title-bottom').css("left", Math.max(0 - 1.5*window.scrollY, -1000) + "px");
        })
        $(document).on('scroll', function(){
            $('.header-title-top').css("left", Math.max(0 + 1.5*window.scrollY, 0) + "px");
        })
    }
});