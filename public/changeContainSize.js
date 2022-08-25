function uscln(a,b) {
  if (a == 0) return b;
  return uscln(b%a,a);
}

function convertSizeFit2(width, height) {
  let widthPort, heightPort, widthBase, heightBase, widthContainer = width, heightContainer = height;
  widthPort = ($(window).width() * 70) / 100;
  console.log(widthPort);
  heightPort = ($(window).height() * 70) / 100;
  console.log(heightPort);
  console.log(width + ' ' + height);
  let index = 0;
  let tmp = uscln(width, height);
  widthBase = width / tmp;
  heightBase = height / tmp;
  while (index * widthBase < widthPort && index * heightBase < heightPort){
    index++;
  }
  index--;
  console.log(index);
  if (index > 0){
    heightContainer = index * heightBase;
    widthContainer = index * widthBase
  }
  console.log(widthContainer + ' ' + heightContainer);
  return { width: widthContainer, height: heightContainer };
}

async function processWidthHeight(element) {
  const { width, height } = await _getBackgroundSize(element);
  const container = convertSizeFit2(width, height);
  // console.log(container);
  $("#container").width(container.width).height(container.height);
  globalContainer = await container;
  processOverlay();
  // $("#container").css("width", widthContainer);
  // $("#container").css("height", heightContainer);
}

function processOverlay(){
  $(".overlay-width").width(($(window).width() - globalContainer.width)/2);
  $(".overlay-height").height($(window).height() - globalContainer.height - 221);
}

processWidthHeight($("#img-right"));
