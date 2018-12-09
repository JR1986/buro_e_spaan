$(document).ready(function() {
  $("a[href='#over-ons']").click(function(event) {
    $("body, html").animate(
      {
        scrollTop: $("#over-ons").offset().top
      },
      1000
    );
  });
  $("a[href='#onze-diensten']").click(function(event) {
    $("body, html").animate(
      {
        scrollTop: $("#onze-diensten").offset().top
      },
      1200
    );
  });
  $("a[href='#samenwerking']").click(function(event) {
    $("body, html").animate(
      {
        scrollTop: $("#samenwerking").offset().top
      },
      1400
    );
  });
  $("a[href='#contact']").click(function(event) {
    $("body, html").animate(
      {
        scrollTop: $("#contact").offset().top
      },
      1600
    );
  });
  $("a[href='#navbar']").click(function(event) {
    $("body, html").animate(
      {
        scrollTop: $("#navbar").offset().top
      },
      1000
    );
  });
});
