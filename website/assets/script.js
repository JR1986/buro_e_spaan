$(document).ready(function() {
  $("['href=over-ons']").click(function(event) {
    $("body, html").animate(
      {
        scrollTop: $("#over-ons").offset().top
      },
      1000
    );
  });
});
