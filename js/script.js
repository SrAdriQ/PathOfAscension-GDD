$(document).ready(function () {

  // - Change the class of the navbar to change the color and border with a little transition on css - //
  updateNavStyle();
  $(window).scroll(function () {
    updateNavStyle();
  });

  // - When the web is in responsive mode hide the navbar-collapse when you click an option -//
  $('.collapse-check>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });

    // Makes the sub navigation stick when scrolling down
    (new IntersectionObserver(function(e,o){
        if (e[0].intersectionRatio > 0){
            document.documentElement.removeAttribute('class');
        } else {
            document.documentElement.setAttribute('class','stuck');
        };
    })).observe(document.querySelector('.trigger'));

  $(".scroll-link").click (function (e) {
    e.preventDefault();
    var id = $(this).attr("href");
    $('html,body').animate({ scrollTop: $(id).offset().top - 62 }, 100);
  });

  var video = $("#video-keyb")
  $("#W-button").click (function () {
    video.attr('src',"src/videos/forward.mp4");
  });

  $("#A-button").click (function () {
    video.attr('src',"src/videos/left.mp4");
  });

  $("#S-button").click (function () {
    video.attr('src',"src/videos/backward.mp4");
  });

  $("#D-button").click (function () {
    video.attr('src',"src/videos/right.mp4");
  });

  $("#space-button").click (function () {
    video.attr('src',"src/videos/jump.mp4");
  });

  $("#shift-button").click (function () {
    video.attr('src',"src/videos/run.mp4");
  });

  $("#Q-button").click (function () {
    video.attr('src',"src/videos/basicSpell.mp4");
  });

  $("#E-button").click (function () {
    video.attr('src',"src/videos/ultimateSpell.mp4");
  });

  $("#Left-button").click (function () {
    video.attr('src',"src/videos/attackCombo.mp4");
  });
  
  $("#Right-button").click (function () {
    video.attr('src',"src/videos/block.mp4");
  });
});

function updateNavStyle() {
  if ($(this).scrollTop() > 200) {
    $('.navbar').removeClass('navbar-top-transparent');
    $('.navbar').addClass('navbar-top-bg');
    $('.dropdown-menu').removeClass('dropdown-transparent');
    $('.dropdown-menu').addClass('dropdown-bg');
    $('#scroll-down').addClass('hide');
    $('.arrow-down').addClass('hide');
  } else {
    $('.navbar').removeClass('navbar-top-bg');
    $('.navbar').addClass('navbar-top-transparent');
    $('.dropdown-menu').removeClass('dropdown-bg');
    $('.dropdown-menu').addClass('dropdown-transparent');
    $('#scroll-down').removeClass('hide');
    $('.arrow-down').removeClass('hide');
  }
}