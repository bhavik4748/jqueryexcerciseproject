(function () {
    'use strict';

    var slideshow = [{
        'image': 'images/slideshow_1.jpeg',
        'caption': 'Cloudy with a chance of moon'
    }, {
        'image': 'images/slideshow_2.jpeg',
        'caption': 'Half moon mountain'
    }, {
        'image': 'images/slideshow_3.jpeg',
        'caption': 'Moonrise'
    }];

    $.each(slideshow, function (index, value) {
        var img = $('<img />', {
            src: value.image,
            alt: value.caption,
            title: value.caption  ,
            id:'img' + index
        });

        img.appendTo($('.slideshow-wrapper'));

    })

    setTimeout(function () {
        $('#img0').show();
    }, 500);

   
    $('#prev').attr("disabled", "disabled");

    var counter = 0;
    $('#next').click(function () {
        $('#prev').attr("disabled", false);
        $('#img' + counter).hide();
        ++counter;
        $('#img' + counter).show();
        if(counter === 2)
            $('#next').attr("disabled", "disabled");

    })

})();
