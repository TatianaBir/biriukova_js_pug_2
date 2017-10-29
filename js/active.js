$(document).ready(function () {
        var location = window.location.href;
        var cur_url = '/' + location.split('/').pop();

        $('.menu-item').each(function () {
            var link = $(this).find('a').attr('href');
            $(this).removeClass('active');
            if (cur_url == link)
            {
                $(this).addClass('active');
            }
        });
    });


	