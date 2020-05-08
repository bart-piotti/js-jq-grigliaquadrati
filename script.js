function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

for (var i = 0; i < 25; i++) {
    $('.griglia').append('<div class="quadrato"><span class="numero"></span></div>')
}

$( ".quadrato .numero" ).each(function() {
  $(this).text(getRandom(0, 10));
  
  if ($(this).text() == 0) {
    $(this).addClass('verde')
  }
  else if ($(this).text() % 2 == 0) {
    $(this).addClass('rosso')
  }
});
