$(document).foundation();
// Slide backgrounds
$("#slide-one").backstretch("images/villa2.jpg");
$("#slide-two").backstretch("images/villa.jpg");
$("#slide-three").backstretch("images/villa2.jpg");
$("#slide-four").backstretch("images/villa.jpg");
// Reviews BG
$("#customer_reviews").backstretch("images/review_bg.png");
// catalogue_filter BG
$("#catalogue_filter").backstretch("images/review_bg.png");
// services_header BG
$("#services_header").backstretch("images/services1.png");
// Object Header BG
$("#object_header_photo").backstretch("images/villa2.jpg");
// Main Page form button
$(".button_search_open").click(function () {
  $(".orbit_form").toggle();
  $(".button_text").toggle();
});
// Catalogue Page price-filter caret toggle
$(".catalogue_price_filter").click(function () {
  $(".fa-caret-down").toggleClass("fa-caret-up");
});
