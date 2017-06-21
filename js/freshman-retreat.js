// On load/resize, resize the YT Video
$( document ).ready(loadIframe);

// TODO: determine how to resize video if resize window
//$( window ).resize(resizeIframe);

// Resize YouTube iFrame
function loadIframe(obj) {
  var width = window.innerWidth*.75;
  obj.style.width =  width+ 'px';
  obj.style.height = width*9/16 + 'px';
}
