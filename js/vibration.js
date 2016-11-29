$(document).ready(function (){

  // support for all navigator vibrate veriants
  navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

  // does the device support vibration
  if (!navigator.vibrate) {
    return;
  };

  // vibrate on tap
  $('.vib').click(function() {
    navigator.vibrate(500);
  });


});
