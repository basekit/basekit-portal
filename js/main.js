
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
