// Write your JavaScript here...

$(".hamburger").click(() => {
  $(".hamburger").toggleClass("active");
  $(".nav-bar").toggleClass("active");
});

// Toggle search bar

$(".search-button").click(() => {
  $(".search-bar").toggleClass("active");
});

$(".close-button").click(() => {
  $(".search-bar").toggleClass("active");
});

// Shop By Room
$(".show-slider").slick({
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
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
playButton.addEventListener("click", function() {
  videoPopup.style.display = "block";
  video.play();
});

//Close video
closeButton.addEventListener("click", function() {
  videoPopup.style.display = "none";
  video.pause();
});


//End of Video Popup Script