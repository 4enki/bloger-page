function AddReadMore() {
  var lengthLimit = 355;
  var readMoreTxt = "...";
  var readLessTxt = "";
  var longTxtElement = $("._longtext");

  longTxtElement.each(function() {
    if ($(this).find(".firstSec").length)
      return;

    var allstr = $(this).text();
    if (allstr.length > lengthLimit) {
      var firstSet = allstr.substring(0, lengthLimit);
      var secdHalf = allstr.substring(lengthLimit, allstr.length);
      var strtoadd = firstSet + "<span class='SecSec'>" + secdHalf + "</span><span class=\"readMore\">" + readMoreTxt + "</span><span class=\"readLess\">" + readLessTxt + "</span>";
      $(this).html(strtoadd);
    }

  });

  $('.description-more').click(function() {
    $(this).parents(".description_text-long").toggleClass('_less _show');
  });
}
$(function() {
  AddReadMore();
});
