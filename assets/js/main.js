
$(document).ready(() => {

  (function ($) {
    $(function () {
      
      $('.button-collapse').sideNav({
        closeOnClick: true
      });
      

      $('.parallax').parallax();
      
    }); // end of document ready
  })(jQuery); // end of jQuery name space
  
  $("#getStarted").on("click", function() {
    let btn = $(this);

    btn.attr("style", "display: none;");
  })

  $("#enterButton").on("click", function() {
    
    $('#hero').animate({
      opacity: ".15"
    }, 1000);

  })




  
  $(document).ready(function () {
    $('.carousel').carousel();
  });
  
  $(document).ready(function () {
    $('.collapsible').collapsible();
  });
  
  $("#sendMessage").on("click", function (e) {});
  
  $(".button-collapse").sideNav();
  
  // Modal function

  $(document).ready(function () {
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('#login-modal').modal();
  });

  $('#mobile-nav-trigger').on('click', function () {
    console.log("hello");
    $('.navigation').css({
      '-webkit-transform': 'translateX(0%)',
      'transform': 'translateX(0%)'
    });
    $('body').addClass('js-modal-visible');
    $('#mobile-nav-trigger').addClass('js-modal-shown');
  });

  $('.js-modal-shown').on('click', function () {

    console.log("ldffol");
    $('.navigation').css({
      '-webkit-transform': 'translateX(-100%)',
      'transform': 'translateX(-100%)'
    });
  });

  $(document).ready(function () {
    console.log("lol");
    $('.statistic__number').animate({
      opacity: '1'
    }, "slow");

  });

  $(document).ready()
  var width = function(checkWidth) {
    if(window.width>768){
      $("#mobile-demo").hide()
    } else{
      $("#mobile-demo").show()
    }
  };
  width;
  
  $('#mobile-nav-trigger').on('click', function () {
    console.log("hello");
    $('.navigation').css({
      '-webkit-transform': 'translateX(0%)',
      'transform': 'translateX(0%)'
    });
    $('body').addClass('js-modal-visible');
    $('#mobile-nav-trigger').addClass('js-modal-shown');
  });
  
  $('.js-modal-shown').on('click', function () {
    
    console.log("ldffol");
    $('.navigation').css({
      '-webkit-transform': 'translateX(-100%)',
      'transform': 'translateX(-100%)'
    });
  });
  
  $(document).ready(function () {
    $('.statistic__number').animate({
      opacity: '1'
    }, "slow");
  });
    
  
  
})