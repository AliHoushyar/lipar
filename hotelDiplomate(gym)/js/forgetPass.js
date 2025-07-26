function loadSection(sectionClass) {
    $(".forgetPassMain").empty()
    $(".forgetPassMain").load("forgetPassfiles.html " + sectionClass)
}

$(".forgetPassMain").on("submit", "#forgetForm1", function (e) {
    e.preventDefault();
    $(".forgetPassMain").css('opacity','0')
    setTimeout(function () {
        loadSection(".forgetPassSec");
        $(".forgetPassMain").css('opacity','1')
    }, 300);
});

$(".forgetPassMain").on("submit", "#forgetForm2", function (e) {
    e.preventDefault();
    $(".forgetPassMain").css('opacity','0')
    setTimeout(function () {
        loadSection(".forgetPassThi");
        $(".forgetPassMain").css('opacity','1')
    }, 300);
});

$(".forgetPassMain").on("submit", "#forgetForm3", function (e) {
    e.preventDefault();
    $(".forgetPassMain").css('opacity','0')
    setTimeout(function () {
        loadSection(".forgetPassFor");
        $(".forgetPassMain").css('opacity','1')
    }, 300);
});

$(".forgetPassMain").on("click", ".backToLog", function () {
    window.location.href = "../index.html"
});