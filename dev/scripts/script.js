// Write your JavaScript here...

// hamburger
$(".hamburger").click(() => {
  $(".hamburger").toggleClass("active");
  $(".nav-bar").toggleClass("active");
  $("#main").toggleClass("active");
});

// Toggle search bar
$(".search-button").click(() => {
  $(".search-bar").toggleClass("active");
});

$(".close-button").click(() => {
  $(".search-bar").toggleClass("active");
});

// Banner carousel
$(".banner").slick({
  fade: true,
  speed: 1000,
  dots: true,
  slidesToShow: 1,
});

// Shop By Room
$(".show-slider").slick({
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: false,
      },
    },


    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {

        slidesToShow: 8,
        slidesToScroll: 1,


      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

function scrollToTop() {
  window.scrollTo(0, 0);
}

// Start of Video Popup Script

//Video element
var video = document.querySelector("#video-id");
var playButton = document.getElementById("play-button");
var closeButton = document.getElementById("close-button");
var videoPopup = document.getElementById("video-popup");

//Play video
playButton.addEventListener("click", function () {
  videoPopup.style.display = "block";
  document.body.style.overflow = "hidden";
  video.play();
});

//Close video
closeButton.addEventListener("click", function () {
  videoPopup.style.display = "none";
  document.body.style.overflow = "auto";
  video.pause();
});

//Click outside video
videoPopup.addEventListener("click", function () {
  videoPopup.style.display = "none";
  document.body.style.overflow = "auto";
  video.pause();
});

//End of Video Popup Script

// Start of Video Popup Script

//Video element
var video = document.querySelector("#video-id");
var playButton = document.getElementById("play-button");
var closeButton = document.getElementById("close-button");
var videoPopup = document.getElementById("video-popup");

//Play video
playButton.addEventListener("click", function () {
  videoPopup.style.display = "block";
  document.body.style.overflow = "hidden";
});

//Close video
closeButton.addEventListener("click", function () {
  videoPopup.style.display = "none";
  document.body.style.overflow = "auto";
  video.pause();
});

//End of Video Popup Script

// Start of In the News Slider //
$(".news-slider").slick({
  prevArrow: $(".news-prev"),
  nextArrow: $(".news-next"),
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: true,
      },
    },
    {
      breakpoint: 500,
      settings: "unslick"
    },
  ],
});


// $(window).resize(function () {
//   $('.js-slider').not('.slick-initialized').slick('resize');
// });

// $(window).on('orientationchange', function () {
//   $('.js-slider').not('.slick-initialized').slick('resize');
// });

//End of Video Popup Script