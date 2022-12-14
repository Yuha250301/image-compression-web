(function ($) {
  // for better performance, define regexes once, before the code
  var pxRegex = /px/,
    percentRegex = /%/,
    urlRegex = /url\(['"]*(.*?)['"]*\)/g;
  $.fn.getBackgroundSize = function (callback) {
    var img = new Image(),
      width,
      height,
      backgroundSize = this.css("background-size").split(" ");

    if (pxRegex.test(backgroundSize[0])) width = parseInt(backgroundSize[0]);
    if (percentRegex.test(backgroundSize[0]))
      width = this.parent().width() * (parseInt(backgroundSize[0]) / 100);
    if (pxRegex.test(backgroundSize[1])) height = parseInt(backgroundSize[1]);
    if (percentRegex.test(backgroundSize[1]))
      height = this.parent().height() * (parseInt(backgroundSize[0]) / 100);
    // additional performance boost, if width and height was set just call the callback and return
    if (typeof width != "undefined" && typeof height != "undefined") {
      callback({ width: width, height: height });
      return this;
    }
    img.onload = function () {
      if (typeof width == "undefined") width = this.width;
      if (typeof height == "undefined") height = this.height;
      callback({ width: width, height: height });
    };
    img.src = this.css("background-image").replace(urlRegex, "$1");
    return this;
  };
})(jQuery);

function _getBackgroundSize(element) {
  return new Promise((resolve) => element.getBackgroundSize(resolve));
}
