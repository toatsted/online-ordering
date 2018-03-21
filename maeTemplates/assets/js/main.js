var olo = window.olo || {};

olo.checkIfLarge = {
    init: function() {
        var sizeElem = $('.hide-small').css('display');

        return sizeElem == 'block' ? true : false;
    }
}

<<<<<<< HEAD

// Modal function

$(document).ready(function () {
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});

$(document).ready(function () {
  $('.carousel').carousel();
});

$(document).ready(function(){
  $('.collapsible').collapsible();
});
=======
olo.headerColor = {
    init: function() {
        var header = $('header');
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 0) {
                $('body').addClass('js-header-scrolled');
            } else {
                $('body').removeClass('js-header-scrolled');
            }
        });
    }
};

olo.hideOverScroll = {
    init: function() {
        $(window).on('scroll', function() {
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
    init: function() {
        $('#mobile-nav-trigger').on('click', function(event) {
            event.preventDefault();
            toggleNav();
        });

        $(document).keyup(function(event) {
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
    init: function() {
        $('#nav-global-menu').on('click', '.js-scroll-link', function(event) {
            var target = $(this).data('target');
            $('body').toggleClass('js-nav-visible');
            $('html, body').animate({
                scrollTop: $('#' + target).offset().top
            }, 200);
        });
    }
};

olo.modal = {
    init: function() {
        $('body').on('click', '.js-modal-trigger', function(event) {
            var modalTarget = $(this).data('modal');
            event.preventDefault();
            showModal(modalTarget);
        });

        $('.modal').on('click', '.js-modal-hide', function(event) {
            hideModal();
        });

        $(document).keyup(function(event) {
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
>>>>>>> a10f81f43179cf35af650c42357f0e04b19aaef0
      