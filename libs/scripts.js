


$(document).ready(function() {

  window.scrollTo = function(id) {

    debugger;
    alert('sss');
    $('html, body').animate({
      scrollTop: $("#" + id).offset().top
    }, 2000);
  };

  $('.faq .row').click(function(elem){
    $(this).next().toggle(1000);
  });

  $('.box').responsiveEqualHeightGrid();

  $('.button-collapse').sideNav({
      menuWidth: 300,
      closeOnClick: true,
      edge: 'right'
    });

  $('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    margin:10,
    dots:true,
    autoplay:true,
    autoplayTimeout:17000,
    smartSpeed:2000
  });

  $('.col-md-4, .col-md-2, .col-md-10, .col-md-6, .col-md-3, img').addClass('wow fadeIn');

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  $('.overlay-menu a').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       100,          // distance to the element when triggering the animation (default is 0)
      mobile:       false,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();

  setNavMenuColor();
  $(window).scroll(setNavMenuColor);
  function setNavMenuColor(){
    if(window.location.pathname === '/'){
      if ($(window).scrollTop() <= 100) {
        $('.navbar-fixed nav').css("background-color","transparent");
      }
      else if($(window).scrollTop() > 100) {
        $('.navbar-fixed nav').css("background-color","#07121b");
      }

    }
  }

});