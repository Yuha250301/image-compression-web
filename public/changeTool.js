/* -----------------Change size---------------- */
$("#size").on("change", function () {
  const tmp = convertSizeFitTarget(globalContainer.width, globalContainer.height,eval(this.value) )
  $("#container")
    .width(tmp.width)
    .height(tmp.height);
    if (eval(this.value) > 1) {
      $("#container").draggable( "option", "disabled", false );
      let x1 = -(tmp.width - globalContainer.width - ($(window).width() - globalContainer.width)/2) ;
      let y1 = -(tmp.height - globalContainer.height);
      let x2 =  ($(window).width() - globalContainer.width)/2;
      let y2 =  0;
      $( "#container" ).draggable( "option", "containment", [x1,y1, x2, y2] );
    } 
    if (eval(this.value) <= 1) {
      $("#container").draggable( "option", "disabled", true );
      $("#container").css({'top': 0, 'left': 0});
    }
});

function convertSizeFitTarget(width, height, size) {
  let widthBase, heightBase, widthContainer, heightContainer;
  // widthPort = ($(window).width() * 70) / 100;
  // console.log(widthPort);
  // heightPort = ($(window).height() * 70) / 100;
  // console.log(heightPort);
  // console.log(width + ' ' + height);
  let targetWidth = width * size;
  let targetHeight = height * size;
  let index = 0;
  let tmp = uscln(width, height);
  widthBase = width / tmp;
  heightBase = height / tmp;
  while (index * widthBase <= targetWidth && index * heightBase <= targetHeight){
    index++;
  }
  index--;
  heightContainer = index * heightBase;
  widthContainer = index * widthBase;
  return { width: widthContainer, height: heightContainer };
}

/* -----------------Change file---------------- */
$("#file").on("change", function () {
  let srcImg, srcArray, newUrl;
  $("#size").val(1).change();
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
