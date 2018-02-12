$(document).ready(function() {
  $('.btn-popup').magnificPopup({
    type: 'inline',

    fixedContentPos: true,
    fixedBgPos: false,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in',
    focus: '#aname',
  });

  $("#signup-form").on('keyup change', ".form-group", function() {
    $(this).removeClass('is-error');
  });

  $("#signup-form").on('submit', function() {
    var $form = $(this);

    $.ajax({
      type: 'GET',
      dataType: 'json',
      async: true,
      url: $form.attr('action') + '.json?adv=ayhgggon&utm_source=landing&utm_campaign=youtube_start&utm_medium=youtube_landing&utm_content=signup',
      data: $form.serialize(),
      success: function(res) {
        switch (res.status) {
          case 'error':
            var errors = res.errors;

            for (var i in errors) {
              var $fld = $form.find(".form-group[name=" + i + "]");
              if ($fld) {
                $fld.addClass('is-error');
                $fld.find(".invalid-feedback").html(errors[i][0]['text']);
              }
            }

          case 'redirect':
            if (res.redirect_to){
              var page = res.redirect_to;
              if (!page) page = "/";
              window.location = page;
            }

            break;
        }
      },

      error: function() {}
    });

    return false;
  });

});
