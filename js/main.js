$(document).ready(function() {
    $("rect").hover( function(event) {
    let index = $(event.currentTarget).index() + 1;
    $("#rectboxlabel").find("text").removeClass("rectbox-36-show");

    // change this part tot find the text related to the rectbox
    $("#rectboxlabel")
      .children(":nth-child(" + index + ")")
      .addClass("rectbox-36-show");
    $("#rectboxlabel")
      .children(":nth-child(" + index + 1 + ")")
      .addClass("rectbox-36-show");
  });
});


