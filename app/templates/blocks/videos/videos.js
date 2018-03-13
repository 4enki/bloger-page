$('.youtube-link').magnificPopup({
  type: 'iframe',
  preloader: false
});

$(document).ready(function() {
  $(".sort-panel a.filer-link").click(function(event) {
    event.preventDefault();
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    var tab = $(this).attr("href");
    $(".videos-type").not(tab).css("display", "none");
    $(tab).fadeIn();
  });
});
