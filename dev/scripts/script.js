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
  video.pause();
});

//Close video
closeButton.addEventListener("click", function () {
  videoPopup.style.display = "none";
  document.body.style.overflow = "auto";
  video.pause();
});

//End of Video Popup Script

//Start of News Slider
var breakpoint = 500;
var slider = $(".news-slider");
var slickSettings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  pauseOnFocus: false,
  pauseOnHover: false,
  variableWidth: false,
  mobileFirst: false,
  arrows: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    { breakpoint: 500, settings: "unslick" },
  ],
};

slider.slick(slickSettings);

$(window).on("resize", function () {
  if ($(this).width() >= breakpoint) {
    if (slider.hasClass("slick-initialized")) {
      return;
    }
    slider.slick(slickSettings);
  }
});
// End of News Slider
