$(document).ready(function(){
     //topscroll
    $('.top a,.myicon a').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop:0
        }, 1000);
    });
    //menuscroll
    $('.scrollTop').click(function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top;
        $('html,body').animate({scrollTop:targetPos},1000);
    });
    var showSkill = false;
    $(window).scroll(function(){  
        //menu&top animate
        var topscroll=$(window).scrollTop();   
        var menu = $('.header');     
        if(topscroll > 50){
            $('.top').slideDown(1000); 
            menu.addClass('active'); 
                    
        }else{
            $('.top').slideUp(500);    
            menu.removeClass('active');   
            $('.about-bor').removeClass('active');       
        };
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        $('.scrollTop').each(function(){
            var target = $(this).attr('href');
            var targetPos = $(target).offset().top;
            var targetHeight = $(target).outerHeight();
            if(targetPos - 1 <= scrollPos && (targetPos + targetHeight) > scrollPos){
            $('.scrollTop').removeClass('active');
            $(this).addClass('active');
            }else{
            $(this).removeClass('active');
            }               
        });
        //animated
        $('.animated').each(function(){
            var thisPos = $(this).offset().top; 
            if((windowHeight + scrollPos) >= thisPos){
            $(this).addClass('fadeIn');
            $('.about-bor').addClass('active');     
            }else{
            $(this).removeClass('fadeIn');
            
            }
        })
        //progress bar        
        var skillTop = $('#skills').position().top;
        if(skillTop <= (scrollPos+windowHeight/2) && !showSkill){
            showSkill = true;
            $('#skills .progress-bar').each(function(){
                var thisValue = $(this).data('progress');
                //console.log('thisValue',thisValue)
                $(this).css('width',thisValue + '%');
            })
        };
    });     
    // swiper
    var swiper = new Swiper('.swiper-container', {
        slideNextClass:'skills-button-next',
        slidePrevClass:'skills-button-prev',
        navigation: { 
          nextEl: '.skills-button-next',
          prevEl: '.skills-button-prev',
        },
    }); 
    var worksSwiper = new Swiper('.works-swiper-container', {
        pagination: {
            el: '.works-pagination',
            dynamicBullets: true,
		},
    }); 
    //works-image
    var wimg = $('#w-img');
    var wimg2 = $('#w-img2');
    var wimg3 = $('#w-img3');
    wimg.mouseenter(function(e){ 
        $('#link,#w1-zoom').addClass('active');   
    });
    wimg.mouseleave(function(e){ 
        $('#link,#w1-zoom').removeClass('active');
    });
    wimg2.mouseenter(function(e){ 
        $('#link2,#w2-zoom').addClass('active');
    });
    wimg2.mouseleave(function(e){ 
        $('#link2,#w2-zoom').removeClass('active'); 
    });
    wimg3.mouseenter(function(e){ 
        $('#link3,#w3-zoom').addClass('active'); 
    });
    wimg3.mouseleave(function(e){ 
        $('#link3,#w3-zoom').removeClass('active');
    });

    /* 響應式選單動畫 */
    // 打開右側選單
    $('.m-link').click(function(e) {
        e.preventDefault();
        $('body').addClass('open');
    });
    // 關閉右側選單
    $('.m-close').click(function(e) {
        e.preventDefault();
        $('body').removeClass('open');
    });
    //點擊後效果
    $('.m-menu a').click(function(e){
        $(this).addClass('active').siblings().removeClass('active'); 
    })    
    //動畫移除
    var w = $(window).width();
    console.log(w)
    if (w < 769 && w > 569){
        $('.swiper-container').removeClass('animated');
    }else if (w < 569){
        $('.swiper-container').removeClass('animated');
        $('.round-bg').removeClass('round-bg');
    }else{
        $('.swiper-container').addClass('animated');
    }
    //
    $('.m-experience h3').click(function(event){
        //點選到的 h3 亮起，其他h3移除active樣式
        $(this).toggleClass('active');
        //點選到的 h3 找到父元素，再找裡面的 P 判斷收闔
        $(this).parent().find('p').stop().fadeToggle();
        
        //自己以外的 p 隱藏
        $(this).parent().siblings().find('p').slideUp();
        
        //自己以外的 h3 移除樣式
        $(this).parent().siblings().find('h3').removeClass('active');
    })
})
