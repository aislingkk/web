$(document).ready(function() {
    $("rect").hover( function(event) {
    let index = $(event.currentTarget).index() + 1;
      $("#label")
        .find("text")
        .removeClass("lable-show");

    // change this part tot find the text related to the rectbox
      $("#label")
      .children(":nth-child(" + index + ")").find('text')
        .addClass("lable-show");
      // $("#label")
      // .children(":nth-child(" + index + 1 + ")")
      //   .addClass("lable-show");
  });
});


