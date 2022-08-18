$(document).ready(function () {
  $(".container").mousemove(function (e) {
    var w = e.pageX - $(this).offset().left;
    $(this).find(".image-left").width(w);
    $(this)
      .find(".image-right")
      .width($(this).width() - w);
  });

  for (let index = 1; index <= numberImage; index++) {
    if (index === 1) $("#file").append("<option value='1' selected>1</option>");
    else
      $("#file").append("<option value='" + index + "'>" + index + "</option>");
  }

  updateImageInfomation('#left-byte',"/images/ll/1.jpg");
  updateImageInfomation('#right-byte',"/images/ll/1.jpg");
});
