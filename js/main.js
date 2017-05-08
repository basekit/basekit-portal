
// Navigation toggle
// ------------------------------

$( ".nav-icon" ).click(function() {
    $( "html" ).toggleClass( "nav-open" );
});


// Vacancy toggle
// ------------------------------

$(function() {
    $(".vacancies--expand").on( "click", function() {
        $('.vacancies--view-more').find('a:first')
        .toggleClass( "vacancy-open" );
    });
});


// Smooth scroll
// ------------------------------

$(document).ready(function(){

    $('a[href*=#]').bind('click', function(e) {
        e.preventDefault();

        var target = $(this).attr("href");

        $('html, body').stop().animate({ scrollTop: $(target).offset().top}, 1000, function() {
            location.hash = target;
        });

        return false;
    });

});


// Nav folder dropdown
// ------------------------------

$( ".nav-item-folder--text" ).on( "click", function()
{
        $( ".nav-folder" ).stop().fadeToggle( "fast" );
});


// Slick Slideshow for Home/Hosting/Telcos
// ---------------------------------------

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay:true,
  responsive: [
    {
      breakpoint: 1140,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 860,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
