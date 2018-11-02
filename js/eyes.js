/*$("body").mousemove(function(event) {
    var eye = $(".eye");
    var x = (eye.offset().left) + (eye.width() / 2);
    var y = (eye.offset().top) + (eye.height() / 2);
    var rad = Math.atan2(event.pageX - x, event.pageY - y);
    var rot = (rad * (180 / Math.PI) * -1) + 90;
    eye.css({
      '-webkit-transform': 'rotate(' + rot + 'deg)',
      '-moz-transform': 'rotate(' + rot + 'deg)',
      '-ms-transform': 'rotate(' + rot + 'deg)',
      'transform': 'rotate(' + rot + 'deg)'
    });
  });*/

var lefteye = document.querySelector('#leftEye'),
x = (lefteye.offset().left) + (eye.width() / 2),
y = (lefteye.offset().top) + (eye.height() / 2),
rad = Math.atan2(event.pageX - x, event.pageY - y),
rot = (rad * (180 / Math.PI) * -1) + 90;





lefteye.addEventListener('mousemove', moveLeftEye, false);
