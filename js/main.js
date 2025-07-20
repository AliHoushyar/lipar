$(document).ready(function() {
    $('.selectorMenu').css('right', '10px');
    $('#BMBTN1').addClass("active");

    // Click handlers
    $('#BMBTN2').click(function() {
        $('.topContainer').empty();
        $('.topContainer').load("./menu.html");
        $('.selectorMenu').css('right', '123px');
        $('.bottonMenuSingle').removeClass("active");
        $('#BMBTN2').addClass("active");
    });

    $('#BMBTN1').click(function() {
        $('.topContainer').empty();
        $('.topContainer').load("./home2.html");
        $('.selectorMenu').css('right', '10px');
        $('.bottonMenuSingle').removeClass("active");
        $('#BMBTN1').addClass("active");
    });

    $('#BMBTN3').click(function() {
        $('.topContainer').empty();
        $('.topContainer').load("./cart.html");
        $('.selectorMenu').css('right', '253px');
        $('.bottonMenuSingle').removeClass("active");
        $('#BMBTN3').addClass("active");
    });

    // $(document).on('click', '#asas', function() {
    //     alert('This is a message from a jQuery-triggered alert!');
    // });
});