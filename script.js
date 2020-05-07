function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

console.log(getRandom());
for (var i = 0; i < 25; i++) {
    $('.griglia').append('<div class="quadrato"></div>')
}

$( ".quadrato" ).each(function() {
  $( this ).text(getRandom(0, 10));
});
