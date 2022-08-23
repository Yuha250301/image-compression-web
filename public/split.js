function setWidth(e, width) {
  requestAnimationFrame(() => {
    e.width(width);
  });
}

$(document).ready(function () {
  let imageLeft = $("#img-left");
  let imageRight = $("#img-right");

  $(".container").mousemove(async function (e) {
    let w = (await e.pageX) - Math.round($(this).offset().left);
    // console.log(w);
    setWidth(imageLeft,w);
    setWidth(imageRight, $(this).width() - w);
    // $(this).find("#split-line").css({'left': w});
  });

  for (let index = 1; index <= numberImage; index++) {
    if (index === 1) $("#file").append("<option value='1' selected>1</option>");
    else
      $("#file").append("<option value='" + index + "'>" + index + "</option>");
  }

  updateImageInfomation("#left-byte", "/images/original/1");
  updateImageInfomation("#right-byte", "/images/original/1");

  globalBody = { width: $("body").width(), height: $("body").height() };
});
