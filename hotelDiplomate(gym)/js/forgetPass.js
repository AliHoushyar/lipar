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
    window.location.href = "../home.html"
});