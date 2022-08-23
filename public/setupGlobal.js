let globalContainer;
let globalBody;


const numberImage = 7;

window.onresize = function (event) {
  document.location.reload(true);
};

/* -----------------Auto change image infomation---------------- */
async function updateImageInfomation(element, src) {
  let { bytes } = await fetch(src)
    .then((response) => response.arrayBuffer())
    .then((buf) => {
      return { bytes: buf.byteLength };
    });

  let size = Math.round((bytes / 1024) * 100) / 100;

  $(element).text(size);
}


