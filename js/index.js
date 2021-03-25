// Слайдер Hero
window.addEventListener('DOMContentLoaded', function () {
const swiper1 = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
})

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

window.addEventListener('DOMContentLoaded', function () {
  $(document).ready(function () {
    $('.submenu-link2').click(function (event) {
      $('.submenu2').toggleClass('active');
      $('body').toggleClass('lock')
    });
  });
});

window.addEventListener('DOMContentLoaded', function () {
  $(document).ready(function () {
    $('.submenu-link3').click(function (event) {
      $('.submenu3').toggleClass('active');
      $('body').toggleClass('lock')
    });
  });
});

window.addEventListener('DOMContentLoaded', function () {
  $(document).ready(function () {
    $('.submenu-link4').click(function (event) {
      $('.submenu4').toggleClass('active');
      $('body').toggleClass('lock')
    });
  });
});

window.addEventListener('DOMContentLoaded', function () {
  $(document).ready(function () {
    $('.submenu-link5').click(function (event) {
      $('.submenu5').toggleClass('active');
      $('body').toggleClass('lock')
    });
  });
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


window.addEventListener('DOMContentLoaded', function () {
  const swiper2 = new Swiper('.gallery__swiper-container', {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 30,
    pagination: {
      el: '.gallery__swiper-pagination',
      type: 'fraction',
      slidesPerGroup: 3,
    },
  })
  })

