//Инициализация слайдера
if (document.body.classList.contains('index')) {
  document.addEventListener('DOMContentLoaded', function () {
    new SimpleAdaptiveSlider('#slider-1', {
      loop: true,
      autoplay: true,
      interval: 3500,
      swipe: true,
    });
  });
}

//Функция для открытия окна выбора языков
function onLangChange() {
  document.getElementById('langMenu').classList.toggle('show');
}

//Функция для поиска на сайте
function onSearch() {
  document.getElementById('search').style.display = 'none';
  document.querySelector('.nav__block').style.width = '165px';
  document.querySelector('.input__search').style.display = 'block';
}

document.querySelector('.input__search').addEventListener('blur', function() {
  document.getElementById('search').style.display = 'block';
  document.querySelector('.nav__block').style.width = '165px';
  document.querySelector('.input__search').style.display = 'none';
})

//===============================Tablet/Mobile========================================

//Открыть меню
function openMobileMenu() {
  document.querySelector('.mobile__menu').style.display = 'block';

  document.querySelector('header').style.display = 'none';
  document.querySelector('main').style.display = 'none';
  document.querySelector('footer').style.display = 'none';
  document.querySelector('.body__inner').style.display = 'none';
}

//Закрыть меню
function cancelMobileMenu() {
  document.querySelector('.mobile__menu').style.display = 'none';

  document.querySelector('header').style.display = 'block';
  document.querySelector('main').style.display = 'block';
  document.querySelector('footer').style.display = 'block';
  document.querySelector('.body__inner').style.display = 'block';
}

document.querySelector('.input__search__mobile').addEventListener('focus', onFocus);
document.querySelector('.input__search__mobile').addEventListener('blur', onFocus);

//Убрать и добавить placehloder
function onFocus() {
  if (document.querySelector('.input__search__mobile').placeholder == 'Искать...') {
    document.querySelector('.input__search__mobile').placeholder = '';
  } else {
    document.querySelector('.input__search__mobile').placeholder = 'Искать...';
  }
}

//Скрытие кнопки поиска при изменении ширины окна
window.addEventListener('resize', () => {
  if (window.outerWidth <= 768) {
    document.getElementById('search').style.display = 'none';
  } else {
    document.getElementById('search').style.display = 'block';
  }
})