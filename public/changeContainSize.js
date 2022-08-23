function uscln(a,b) {
  if (a == 0) return b;
  return uscln(b%a,a);
}

function converSizeFit(width, height) {
  let widthPort, heightPort, widthContainer, heightContainer;
  widthPort = ($(window).width() * 80) / 100;
  console.log(widthPort);
  heightPort = ($(window).height() * 80) / 100;
  console.log(heightPort);
  console.log(width + ' ' + height);

  if (width > height) {
    widthContainer = widthPort;
    heightContainer = (widthContainer * height) / width;
    console.log(widthContainer + ' ' + heightContainer);

  } else {
    heightContainer = heightPort;
    widthContainer = (heightContainer * width) / height;
  }
  return { width: widthContainer, height: heightContainer };
}

function converSizeFit2(width, height) {
  let widthPort, heightPort, widthBase, heightBase, widthContainer, heightContainer;
  widthPort = ($(window).width() * 60) / 100;
  console.log(widthPort);
  heightPort = ($(window).height() * 60) / 100;
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
  heightContainer = index * heightBase;
  widthContainer = index * widthBase;
  console.log(widthContainer + ' ' + heightContainer);
  return { width: widthContainer, height: heightContainer };
}

async function processWidthHeight(element) {
  const { width, height } = await _getBackgroundSize(element);
  const container = converSizeFit2(width, height);
  // console.log(container);
  $("#container").width(container.width).height(container.height);
  globalContainer = await container;
  // $("#container").css("width", widthContainer);
  // $("#container").css("height", heightContainer);
}

processWidthHeight($("#img-right"));
