$(document).ready(function () {
  $(".container").mousemove(function (e) {
    var w = e.pageX - $(this).offset().left;
    console.log(w);
    $(this).find(".image-left").width(w);
    $(this)
      .find(".image-right")
      .width($(this).width() - w);
    // $(this).find("#split-line").css({'left': w});
  });

  for (let index = 1; index <= numberImage; index++) {
    if (index === 1) $("#file").append("<option value='1' selected>1</option>");
    else
      $("#file").append("<option value='" + index + "'>" + index + "</option>");
  }

  updateImageInfomation('#left-byte',"/images/original/1");
  updateImageInfomation('#right-byte',"/images/original/1");

  globalBody = {width: $('body').width(), height: $('body').height()};
});
