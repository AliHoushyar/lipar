$(document).ready(function() {
    $('#LoginBtnMain').click(function(){
        $('.loginForm').css('bottom','0px');
        $('.loginTexts').css('opacity','0');
        $('.loginLogo').css('top','100px');
    })

    $('.loginForget').click(function(){
        $('.forgetPassForm').css('bottom','0px');
        $('.loginTexts').css('opacity','0');
        $('.loginLogo').css('top','100px');
    })

    $('#loginMainForm').submit(function(e){
        e.preventDefault()
        window.location.href = "../home.html"
    })
})