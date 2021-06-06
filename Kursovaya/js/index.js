// Слайдер Hero
let swiper = new Swiper('.hero__swiper', {
  loop: true,
  autoplay: {
    delay: 30000,
},

});

//Бургер меню
window.addEventListener('DOMContentLoaded', function () {
  $(document).ready(function () {
    $('.header__burger').click(function (event) {
      $('.header__burger,.header__menu,.header__logo,.header__svg').toggleClass('push');
      $('body').toggleClass('lock')
    });
  });
});

// Показ поиск по сайту
window.addEventListener('DOMContentLoaded', function () {
  $(document).ready(function () {
    $('.header__search-btn').click(function (event) {
      $('.header__input,.header__search-btn,.header__logo,.header__burger,.header__svg,.header__body,.header').toggleClass('active');
      $('body').toggleClass('lock')
    });
  });
});


// Плавный переход якорь
$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});


//Выпадающее меню
window.addEventListener('DOMContentLoaded', function () {
  $(document).ready(function () {
    $('.submenu-link1').click(function (event) {
      $('.submenu1').toggleClass('active');
      $('body').toggleClass('lock')
    });
  });
});
$('.submenu-link1').click(function(event) {
  $('.submenu2,.submenu3,.submenu4,.submenu5').removeClass('active');
});

window.addEventListener('DOMContentLoaded', function () {
  $(document).ready(function () {
    $('.submenu-link2').click(function (event) {
      $('.submenu2').toggleClass('active');
      $('body').toggleClass('lock')
    });
  });
});
$('.submenu-link2').click(function(event) {
  $('.submenu1,.submenu3,.submenu4,.submenu5').removeClass('active');
});

window.addEventListener('DOMContentLoaded', function () {
  $(document).ready(function () {
    $('.submenu-link3').click(function (event) {
      $('.submenu3').toggleClass('active');
      $('body').toggleClass('lock')
    });
  });
});
$('.submenu-link3').click(function(event) {
  $('.submenu1,.submenu2,.submenu4,.submenu5').removeClass('active');
});

window.addEventListener('DOMContentLoaded', function () {
  $(document).ready(function () {
    $('.submenu-link4').click(function (event) {
      $('.submenu4').toggleClass('active');
      $('body').toggleClass('lock')
    });
  });
});
$('.submenu-link4').click(function(event) {
  $('.submenu1,.submenu2,.submenu3,.submenu5').removeClass('active');
});

window.addEventListener('DOMContentLoaded', function () {
  $(document).ready(function () {
    $('.submenu-link5').click(function (event) {
      $('.submenu5').toggleClass('active');
      $('body').toggleClass('lock')
    });
  });
});
$('.submenu-link5').click(function(event) {
  $('.submenu1,.submenu2,.submenu3,.submenu4').removeClass('active');
});

//Селект
window.addEventListener('DOMContentLoaded', function () {
const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
});
});

// Swiper в Галереи
let swiper2 = new Swiper('.gallery__swiper-container', {
speed: 400,
spaceBetween: 50,
slidesPerView: 3,
slidesPerGroup: 3,
slidesPerColumn: 2,
slidesPerColumnFill: 'row',

pagination: {
  el: '.gallery__swiper_pagination',
  type: 'fraction',
},

navigation: {
  prevEl: '.gallery__swiper-button-prev',
  nextEl: '.gallery__swiper-button-next',
  var: appendNumber = 5,
  var: prependNumber = 1,
},
breakpoints: {
  1680: {
    slidesPerView: 3,
    slidesPerGroup: 3,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
  },
  768: {
    spaceBetween: 34,
    slidesPerView: 2,
    slidesPerGroup: 2,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
  },
320: {
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerColumn: 1,
  slidesPerColumnFill: 'row',
},
}
});


// Accord
  $(function () {
    $("#accordion").accordion({
      active: 0,
      collapsible: true,
      heightStyle: "content",
      icons: false,
    });
  });

  document.querySelectorAll(".tabs__btn").forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll(".tab-content").forEach(function (tabContent) {
        tabContent.classList.remove("active");
      });
      document.querySelector(`[data-target="${path}"]`).classList.add("active");
    });
  });

  document.querySelectorAll(".art__btn").forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (event) {
      const path = event.currentTarget.dataset.path;

    document.querySelectorAll(".tab-art").forEach(function (tabContent) {
      tabContent.classList.remove("active");
    });
    document.querySelector(`[data-target="${path}"]`).classList.add("active");
    });
  });

