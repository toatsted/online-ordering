$(document).ready(() => {

  (function ($) {
    $(function () {

      $('.button-collapse').sideNav();
      $('.parallax').parallax();

    }); // end of document ready
  })(jQuery); // end of jQuery name space

  // Modal function

  $(document).ready(function () {
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('#login-modal').modal();
  });

  $(document).ready(function () {
    $('.carousel').carousel();
  });

  $(document).ready(function () {
    $('.collapsible').collapsible();
  });

  $("#sendMessage").on("click", function (e) {});

  $(".button-collapse").sideNav();


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



  // SAM'S MAIN.JS STARTS HERE

  var olo = window.olo || {};

  olo.checkIfLarge = {

  }

  olo.headerColor = {
    init: function () {
      var header = $('header');
      $(window).on('scroll', function () {
        if ($(window).scrollTop() > 0) {
          $('body').addClass('js-header-scrolled');
        } else {
          $('body').removeClass('js-header-scrolled');
        }
      });
    }
  };

  olo.hideOverScroll = {
    init: function () {
      $(window).on('scroll', function () {
        if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
          $('body').addClass('page-bottom');
        } else {
          $('body').removeClass('page-bottom');
        }
      })
    }
  }

  // Toggle mobile navigation modal
  olo.mobileNav = {
    init: function () {
      $('#mobile-nav-trigger').on('click', function (event) {
        event.preventDefault();
        toggleNav();
      });

      $(document).keyup(function (event) {
        if (event.keyCode == 27) {
          closeNav();
        }
      });

      function toggleNav() {
        $('body').toggleClass('js-nav-visible');
      }

      function closeNav() {
        $('body').removeClass('js-nav-visible');
      }
    }
  };

  // Scroll to position on page
  olo.scrollNav = {
    init: function () {
      $('#nav-global-menu').on('click', '.js-scroll-link', function (event) {
        var target = $(this).data('target');
        $('body').toggleClass('js-nav-visible');
        $('html, body').animate({
          scrollTop: $('#' + target).offset().top
        }, 200);
      });
    }
  };

  olo.modal = {
    init: function () {
      $('body').on('click', '.js-modal-trigger', function (event) {
        var modalTarget = $(this).data('modal');
        event.preventDefault();
        showModal(modalTarget);
      });

      $('.modal').on('click', '.js-modal-hide', function (event) {
        hideModal();
      });

      $(document).keyup(function (event) {
        if (event.keyCode == 27) {
          hideModal();
        }
      });

      function showModal(target) {
        var modalTarget = target;
        $('body').addClass('js-modal-visible');
        $('#' + target).addClass('js-modal-shown');
      }

      function hideModal() {
        $('body').removeClass('js-modal-visible');
        $('.js-modal-shown').removeClass('js-modal-shown');
      }
    }
  };

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

  // SAM'S MAIN.JS ENDS HERE




})