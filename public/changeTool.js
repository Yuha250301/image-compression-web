/* -----------------Change size---------------- */
$("#size").on("change", function () {
  $("#container")
    .width(globalContainer.width * eval(this.value))
    .height(globalContainer.height * eval(this.value));
    if (eval(this.value) >= 1) {
      $("body")
        .width(globalBody.width * eval(this.value))
        .height(globalBody.height * eval(this.value));
    }
});

/* -----------------Change file---------------- */
$("#file").on("change", function () {
  let srcImg, srcArray, newUrl;

  //change left image
  srcImg = $("#img-left")
    .css("background-image")
    .replace(/^url\(['"](.+)['"]\)/, "$1");
  srcArray = srcImg.split("/");
  srcArray[srcArray.length - 1] = srcArray[srcArray.length - 1].replace(
    /.*/,
    this.value
  );
  newUrl = srcArray.join("/");
  $("#img-left").css("background-image", "url(" + newUrl + ")");
  updateImageInfomation("#left-byte", newUrl);

  //change right image
  srcImg = $("#img-right")
    .css("background-image")
    .replace(/^url\(['"](.+)['"]\)/, "$1");
  srcArray = srcImg.split("/");
  srcArray[srcArray.length - 1] = srcArray[srcArray.length - 1].replace(
    /.*/,
    this.value
  );
  newUrl = srcArray.join("/");
  $("#img-right").css("background-image", "url(" + newUrl + ")");
  updateImageInfomation("#right-byte", newUrl);

  processWidthHeight($("#img-left"));
});

/* -----------------Change type & quality---------------- */
function changeType(element, value) {
  let srcImg, srcArray, newUrl;
  srcImg = $(element)
    .css("background-image")
    .replace(/^url\(['"](.+)['"]\)/, "$1");
  srcArray = srcImg.split("/");
  srcArray[srcArray.length - 1] = srcArray[srcArray.length - 1].replace(
    /[\.].*/,
    "." + value
  );
  // alert(value);

  newUrl =srcArray.join("/");
  $(element).css("background-image", "url(" + newUrl + ")");
  if (element === "#img-left") {
    updateImageInfomation("#left-byte", newUrl);
  } else {
    updateImageInfomation("#right-byte", newUrl);
  }
}

function changeQuality(element, value) {
  let srcImg, srcArray, newUrl;
  srcImg = $(element)
    .css("background-image")
    .replace(/^url\(['"](.+)['"]\)/, "$1");
  srcArray = srcImg.split("/");
  srcArray[srcArray.length - 2] = value;

  newUrl =  srcArray.join("/") ;
  // alert(newUrl);
  $(element).css("background-image", "url(" + newUrl + ")");
  if (element === "#img-left") {
    updateImageInfomation("#left-byte", newUrl);
  } else {
    updateImageInfomation("#right-byte", newUrl);
  }
}

$("#left-type").on("change", function () {
  changeQuality("#img-left", this.value);
});
$("#right-type").on("change", function () {
  changeQuality("#img-right", this.value);
});

$("#left-quality").on("change", function () {
  changeQuality("#img-left", this.value);
});
$("#right-quality").on("change", function () {
  changeQuality("#img-right", this.value);
});
