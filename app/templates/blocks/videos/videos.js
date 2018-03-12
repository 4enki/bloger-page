$('.youtube-link').magnificPopup({
  type: 'iframe',
  preloader: false
});

$(document).ready(function() {
  $(".work-types a.work-type").click(function(event) {
    event.preventDefault();
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    var tab = $(this).attr("href");
    $(".works-example").not(tab).css("display", "none");
    $(tab).fadeIn();
  });
});
