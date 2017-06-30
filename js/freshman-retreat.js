// $(document).ready(function(){
//
// });

$("#welcomeNav").click(function() {
    $('html, body').animate({ scrollTop:$("#welcome").offset().top}, 500);
});

// Resize YouTube iFrame
function loadIframe(obj) {
  var width = document.getElementById("welcome").clientWidth
  width -= 2*parseInt($("#welcome").css('padding-left'), 10)
  obj.style.width =  width + 'px';
  obj.style.height = width*9/16 + 'px';
}
