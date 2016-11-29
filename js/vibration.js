

  window.alert("sometext");

  // support for all navigator vibrate veriants
  navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;



  // vibrate on tap
  $('.vib').click(function() {
    navigator.vibrate(500);
  });
