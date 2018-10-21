$(document).ready(function() {
    $("rect").hover( function(event) {
    let index = $(event.currentTarget).index() + 1;
    $("#rectboxlabel").find("text").removeClass("rectbox-36-show");
    // $("#rectboxlabel:nth-child(" + index + ")").addClass("rectbox-36-show");

    $("#rectboxlabel")
      .children(":nth-child(" + index + ")")
      .addClass("rectbox-36-show");
    $("#rectboxlabel")
      .children(":nth-child(" + index * 2 + 1 + ")")
      .addClass("rectbox-36-show");
  });
});
