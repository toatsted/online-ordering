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
    $('.modal').modal();
  });

  $(document).ready(function () {
    $('.carousel').carousel();
  });

  $(document).ready(function () {
    $('.collapsible').collapsible();
  });

  $("#sendMessage").on("click", function (e) {

    $(".resetForm").empty();
    alert("Your message has been sent to Healthy Gorilla. Thank you.")
  });

})  