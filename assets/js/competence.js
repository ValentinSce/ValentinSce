jQuery(document).ready(function( $ ) {
});
var typed = $(".typed");

$.fn.jQuerySimpleCounter = function( options ) {
  var settings = $.extend({
    start:  0,
    end:    100,
    easing: 'swing',
    duration: 8500,
    complete: ''
  }, options );
  var thisElement = $(this);
  $({count: settings.start}).animate({count: settings.end}, {
    duration: settings.duration,
    easing: settings.easing,
    step: function() {
      var mathCount = Math.ceil(this.count);
      thisElement.text(mathCount);
    },
    complete: settings.complete
  });
};
$('#number1').jQuerySimpleCounter({end: 80,duration: 9000});
$('#number2').jQuerySimpleCounter({end: 75,duration: 7000});
$('#number3').jQuerySimpleCounter({end: 65,duration: 6000});
$('#number4').jQuerySimpleCounter({end: 80,duration: 9000});
$('#number5').jQuerySimpleCounter({end: 60,duration: 6000});
$('#number6').jQuerySimpleCounter({end: 65,duration: 6000});
$('#number7').jQuerySimpleCounter({end: 65,duration: 6000});
$('#number8').jQuerySimpleCounter({end: 80,duration: 9000});
$('#number9').jQuerySimpleCounter({end: 85,duration: 9500});
$('#number10').jQuerySimpleCounter({end: 65,duration: 6000});
$('#number11').jQuerySimpleCounter({end: 70,duration: 7000});
$('#number12').jQuerySimpleCounter({end: 55,duration: 5000});
$('.about-me-img').hover(function(){
  $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
}, function(){
  $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
});
