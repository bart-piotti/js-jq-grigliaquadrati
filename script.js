function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

console.log(getRandom());
for (var i = 0; i < 25; i++) {
    $('.griglia').append('<div class="quadrato"><span class="numero"></span></div>')
}

$( ".quadrato .numero" ).each(function() {
  $(this).text(getRandom(0, 10));
  console.log(parseInt($(this).text()));
  if (parseInt($(this).text()) == 0) {
    $(this).addClass('verde')
  }
  else if (parseInt($(this).text()) % 2 == 0) {
    $(this).addClass('rosso')
  }
});
