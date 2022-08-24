$(function () {
    let reivewW = $('.review_list li').width();
    let bestW = $('.best_slide li').width();
    let winW = $(window).outerWidth();

    $(window).resize(function () {
        reivewW = $('.review_list li').width();
        // console.log(reivewW);
        bestW = $('.best_slide li').width();
        winW = $(window).outerWidth();
        
        if(winW >= 800) {
            $('.ham').removeClass('on');
            $('.menu').removeClass('on');
            $('.menu>li').removeClass('on');
        }
    });

    let intv = setInterval(function () {
        nextAni()
    }, 3000)

    $('.top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    })

    let intv2 = setInterval(function () {
        nextAni2()
    }, 3000)

    let intv3 = setInterval(function () {
        nextAni3()
    }, 3000)







    $('.ham').on('click', function () {
        $('.ham').toggleClass('on');
        $('.menu').toggleClass('on');

        // 햄버거 메뉴 on 되었을 때도, pc버전 전환 시 메뉴창 닫아짐
        // if ($('.menu').attr('class') != 'on') {
        //     $('.menu>li').removeClass('on');
        // }
    })

    $('.menu>li>a').click(function () {
        e.preventDafault()
    })

    // $('.menu.on>li>a').click(function(){
    //     e.preventDafault()
    // })

    $('.menu>li').on('click', function () {
        $('.menu>li').removeClass('on');
        $(this).toggleClass('on');
    })




    // $('.menu.on>li').on('click',function(){
    //     $(this).toggleClass('on')
    // })

    // $('.menu>li').click(function(){
    //     if($(this).attr('class') != 'on'){
    //         $('.menu>li .sub_menu').slideUp()
    //         $(this).find('.sub_menu').slideToggle()
    //         $('.menu>li').removeClass('on')
    //         $(this).addClass('on')
    //     } else {
    //         $(this).find('.sub_menu').slideToggle()
    //         $('.menu>li').removeClass('on');
    //     }
    // })

    // $('.menu.on>li').click(function () {
    //     if ($(this).attr('class') != 'on') {
    //         $('.menu.on>li .sub_menu').slideUp()
    //         $(this).find('.sub_menu').slideToggle()
    //         $('.menu.on>li').removeClass('on')
    //         $(this).addClass('on')
    //     } else {
    //         $(this).find('.sub_menu').slideToggle()
    //         $('.menu.on>li').removeClass('on');
    //     }
    // })


    // $('.menu.on>li').click(function(){
    //     if($(this).attr('class') != 'on'){
    //         $('.menu.on > li.on .sub_menu').slideUp()
    //         $(this).find('.sub_menu').slideToggle()
    //         $('.menu.on>li').removeClass('on')
    //         $(this).addClass('on')
    //     } else {
    //         $(this).find('.sub_menu').slideToggle()
    //         $('.menu.on>li').removeClass('on');
    //     }
    // })



    function nextAni() {
        $('.slide_start').not(':animated').animate({
            right: 0
        }, 700, function () {
            $('.slide_start li').eq(0).appendTo('.slide_start')
            $('.slide_start li').removeClass('on')
            $('.slide_start li:nth-of-type(1)').addClass('on');

            $('.slide_count span').eq(0).appendTo('.slide_count')
            $('.slide_count span').removeClass('on')
            $('.slide_count span:nth-of-type(1)').addClass('on')
        })
    }

    function nextAni2() {
        $('.review_list').not(':animated').animate({
            marginLeft: -reivewW
        }, 700, function () {
            $('.review_list li').eq(0).appendTo('.review_list')
            $('.review_list').css({
                marginLeft: 0
            })
        })
    }

    function nextAni3() {
        $('.best_slide').not(':animated').animate({
            marginLeft: -bestW
        }, 700, function () {
            $('.best_slide li').eq(0).appendTo('.best_slide')
            $('.best_slide').css({
                marginLeft: 0
            })
        })
    }

})