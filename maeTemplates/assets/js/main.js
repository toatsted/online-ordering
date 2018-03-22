
$('#mobile-nav-trigger').on('click', function() {
  console.log("hello");
  $('.navigation').css({'-webkit-transform': 'translateX(0%)', 'transform': 'translateX(0%)'});
  $('body').addClass('js-modal-visible');
  $('#mobile-nav-trigger').addClass('js-modal-shown');
});

$('.js-modal-shown').on('click', function() {
  
  console.log("ldffol");
  $('.navigation').css({'-webkit-transform': 'translateX(-100%)', 'transform': 'translateX(-100%)'});
});

$( document ).ready(function() {
  console.log("lol");
    $('.statistic__number').animate({opacity: '1'}, "slow");
});
