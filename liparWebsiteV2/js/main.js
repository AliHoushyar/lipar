$(document).ready(function() {
    var silverEarth = $('.silverEarth');
    var webHe = $('.webHeaderbottomSec');
    var aimg = $('.aboutUsimg');
    var hostSec = $('.hostSecMainWinRowSingle');

    $(window).on('scroll', function() {
        var scrollY = $(window).scrollTop();
        console.log(scrollY)
        if (scrollY <= 749) {
            // Calculate new width (minimum 300px)
            var newWidth = Math.max(300, 600 - scrollY * 0.06);

            // Calculate new top and right positions as percentages
            var newTop = 50 + scrollY * 0.033;
            var newRight = 50 + scrollY * 0.032;

            // Apply CSS changes
            silverEarth.css({
                width: newWidth + 'px',
                top: newTop + '%',
                right: newRight + '%'
            });
        }

        if (scrollY>=200) {
            webHe.addClass("show")
        }
        else{
            webHe.removeClass("show")
        }

        if(scrollY >= 1000){
            aimg.addClass("show")
        }
        else{
            aimg.removeClass("show")
        }

        if(scrollY >= 1750){
            hostSec.addClass("show")
        }
        else{
            hostSec.removeClass("show")
        }
    });
});
