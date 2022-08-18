function converSizeFit(width, height) {
  let widthPort, heightPort, widthContainer, heightContainer;
  widthPort = ($(window).width() * 80) / 100;
  heightPort = ($(window).height() * 80) / 100;
  if (width > height) {
    widthContainer = widthPort;
    heightContainer = (widthContainer * height) / width;
  } else {
    heightContainer = heightPort;
    widthContainer = (heightContainer * width) / height;
  }
  return { width: widthContainer, height: heightContainer };
}

async function processWidthHeight(element) {
  const { width, height } = await _getBackgroundSize(element);
  // console.log($(window).width());
  const container = converSizeFit(width, height);
  // console.log(container);
  $("#container").width(container.width).height(container.height);
  globalContainer = container;
  // $("#container").css("width", widthContainer);
  // $("#container").css("height", heightContainer);
}

processWidthHeight($("#img-left"));
