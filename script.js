// top bar menu item slide
$('.tab-bar_manu > li').on('mouseover', function(){
    $('.item').stop().slideUp(200)
    $(this).children('.item').stop().slideDown(130);
});

$('.tab-bar_manu > li').on('mouseleave', function(){
    $(this).children('.item').stop().slideUp(130);
});

$('.item').hide();

// Main page slide
var swiper = new Swiper(".mySwiper", {
    speed:800,
    loop:true,
    // touchRatio: 0,
    autoplay:{
        delay:3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
        slideChange: function() {
            console.log(this.realIndex);
            $('.Main-tit h2 strong').eq(this.realIndex).addClass('on').siblings().removeClass('on');
            $('.Main-tit h2 small span').eq(this.realIndex).find('em').addClass('on');
            $('.Main-tit h2 small span').eq(this.realIndex).siblings().find('em').removeClass('on');
        }
      }

});

var swiper = new Swiper('.slide_mask3', {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    speed: 800,
    pagination: {
      el: '.slide_mask3 .pager',
      type: 'fraction',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
});

// Fred Best Menu 페이지 swiper
var swiper = new Swiper(".my-Swiper-1", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination-1",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next-1",
        prevEl: ".swiper-button-prev-1",
    },
  });

// scroll 했을 때, top bar background color 변경
$(function(){
    var $header = $('.top-bar-box'); //헤더를 변수에 넣기
    var $page = $('.Best-menu'); //색상이 변할 부분
    var $window = $(window);
    var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기
    
    $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
      pageOffsetTop = $page.offset().top;
    });
    
    $window.on('scroll', function(){ //스크롤시
      var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
      $header.toggleClass('down', scrolled); //클래스 토글
    });
});

//s4 swiper
let se04swiper = new Swiper(".se04sw", {
  slidesPerView: 2,
  spaceBetween: 12,
  speed: 800,
  loop: true,
  navigation: {
      nextEl: ".sec4 .swiper-button-next_3",
      prevEl: ".sec4 .swiper-button-prev_3",
  },
  breakpoints: {
      700: {
          slidesPerView: 1.12,
          spaceBetween: 24,
      },
  },
  on: {
      slideChange : function() {
          let wp = $(window).innerWidth();

          if(wp > 700){
              $('.main .s4._add .absol').addClass('down');
          }

      },
      slideChangeTransitionEnd : function () {
          let wp = $(window).innerWidth();
          
          if(wp > 700){
              $('.main .s4._add .absol').removeClass('down');
          }
          
      }
  },
});

