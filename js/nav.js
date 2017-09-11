(function () {
    'use strict';

    $(document).ready(function () {
        $('header ul').css('cursor', 'pointer');   

        var target, previous;
        $('[data-related-panel]').click(function () {
            
            target = $(this).data('related-panel');
            $('#dropdown').find('section').hide();
            $('#' + target).show();
            if (target !== previous){
                $('#dropdown').slideDown('slow');
            }               
            else {
                $('#dropdown').slideUp('slow');
                target = '';
            }                        
            previous = target;
        });
    });

})();
