$(function () {
    "use strict";

    $("#menuToggle, .btn-close").on("click", function (e) {
        e.preventDefault();
    });

    $('.dropdown-menu a').click(function(e) {
        e.stopPropagation();
        $('.navmenu').offcanvas('toggle');
    });

    function getGridSize() {
        return (Modernizr.mq('(max-width:490px)')) ? 1 :
            (Modernizr.mq('(max-width:705px)')) ? 2 :
                (Modernizr.mq('(max-width:768px)')) ? 3 : 4;
    }

    /* ---------------------------------------------------------
     *	Background
     */

    $.backstretch([
        "../images/background/joe1.jpg",
        "../images/background/joe2.jpg",
        "../images/background/joe3.jpg"
    ], {duration: 3800, fade: 1500});


    /* ---------------------------------------------------------
     *	WOW
     */

    new WOW({
        mobile: false
    }).init();


});