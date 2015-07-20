$('section').waypoint(function (direction) {
    // select section
    setTimeout(function () {
        $('section').addClass('show');
    }, i * 150); // alert('Top of thing hit top of viewport.');
}, {offset: '95%'});