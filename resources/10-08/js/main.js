$(document).ready(function() {
  $(".bubble").on("click", function(event) {
    let index = $(event.currentTarget).index() + 1;
    $(".label").removeClass("label--shown");

    $(".label:nth-child(" + index + ")").addClass("label--shown");
  });


});
