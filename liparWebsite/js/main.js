$(document).ready(function () {
  $(".faq-question").on("click", function () {
    const $item = $(this).closest(".faq-item");

    // Collapse all others
    $(".faq-item").not($item).removeClass("active").find(".faq-answer").slideUp();

    // Toggle this one
    $item.toggleClass("active");
    $item.find(".faq-answer").slideToggle();
  });
});