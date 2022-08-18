/* -----------------Change size---------------- */
$("#size").on("change", function () {
  $("#container")
    .width(globalContainer.width * eval(this.value))
    .height(globalContainer.height * eval(this.value));
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
    /.*\./,
    this.value + "."
  );
  newUrl = "url(" + srcArray.join("/") + ")";
  $("#img-left").css("background-image", newUrl);

  //change right image
  srcImg = $("#img-right")
    .css("background-image")
    .replace(/^url\(['"](.+)['"]\)/, "$1");
  srcArray = srcImg.split("/");
  srcArray[srcArray.length - 1] = srcArray[srcArray.length - 1].replace(
    /.*\./,
    this.value + "."
  );
  newUrl = "url(" + srcArray.join("/") + ")";
  $("#img-right").css("background-image", newUrl);

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

  newUrl = "url(" + srcArray.join("/") + ")";
  $(element).css("background-image", newUrl);
}

function changeQuality(element, value) {
  let srcImg, srcArray, newUrl;
  srcImg = $(element)
    .css("background-image")
    .replace(/^url\(['"](.+)['"]\)/, "$1");
  srcArray = srcImg.split("/");
  srcArray[srcArray.length - 2] = value;

  newUrl = "url(" + srcArray.join("/") + ")";
  // alert(newUrl);
  $(element).css("background-image", newUrl);
}

$("#left-type").on("change", function () {
  changeType("#img-left", this.value);
});
$("#right-type").on("change", function () {
  changeType("#img-right", this.value);
});

$("#left-quality").on("change", function () {
  changeQuality("#img-left", this.value);
});
$("#right-quality").on("change", function () {
  changeQuality("#img-right", this.value);
});


