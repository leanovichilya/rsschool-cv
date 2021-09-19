(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const contacts = {
      phone: {
        link: 'tel:+375257414527',
        text: 'Phone - +375-25-7414527',
      },
      skype: {
        link: 'skype:leanovich.ilya?chat',
        text: 'Skype - +375-25-7414527 / leanovich.ilya',
      },
      email: {
        link: 'mailto:leanovich.ilya@gmail.com',
        text: 'Email - leanovich.ilya@gmail.com',
      },
    }

    const contactsVisible = document.querySelector('.contacts__visible');
    const contactLinks = document.querySelectorAll('.info__link');
    const contact = Object.keys(contacts);
    let visible = false;

    contactsVisible.addEventListener('click', evt => {
      if(visible){
        for (let i = 0; i < contactLinks.length; i += 1) {
          contactLinks[i].removeAttribute('href');
          contactLinks[i].innerHTML = '&#10059;'.repeat(12);
        }

        visible = false;
      } else {
        for (let i = 0; i < contactLinks.length; i += 1) {
          contactLinks[i].href = contacts[contact[i]].link;
          contactLinks[i].textContent = contacts[contact[i]].text;
        }

        visible = true;
      }
    });
  })
})();

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.slider .slider__line img');
    const sliderLine = document.querySelector('.slider__line');
    let count = 0;
    let width = 0;

    function rollSlider() {
      sliderLine.style.transform = `translate(-${count * width}px)`;
    }

    function init() {
      width = document.querySelector('.slider').offsetWidth;
      sliderLine.style.width = `${width * images.length}px`;
      images.forEach((item) => {
        item.style.width = `${width}px`;
        item.style.height = '100%';
      });
      rollSlider();
    }

    window.addEventListener('resize', init);
    init();

    document.querySelector('.button__prev').addEventListener('click', () => {
      count -= 1;
      if (count < 0) {
        count = images.length - 1;
      }

      rollSlider();
    });

    document.querySelector('.button__next').addEventListener('click', () => {
      count += 1;
      if (count >= images.length) {
        count = 0;
      }

      rollSlider();
    });
  });
})();

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');
    const navigation = document.querySelector('.navigation');

    menu.addEventListener('click', () => {
      menu.classList.toggle('menu__switch');
      navigation.classList.toggle('navigation__hide');
    });
  })
})();

(function () {
  console.log('вёрстка валидная +10 - https://validator.w3.org/');
  console.log('вёрстка семантическая +20');
  console.log('для оформления СV используются css-стили +10');
  console.log(
    'контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы +10',
  );
  console.log(
    'вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10',
  );
  console.log(
    'есть меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным. Внешний вид адаптивного меню можно скопировать с макета музея +10',
  );
  console.log(
    'на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10',
  );
  console.log(
    'контакты для связи и перечень навыков оформлены в виде списка ul > li +10',
  );
  console.log(
    'CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10',
  );
  console.log(
    'CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода. Для подсветки кода может использоваться js-библиотека, например, highlight.js +10',
  );
  console.log(
    'CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. +10',
  );
  console.log('CV выполнено на английском языке +10');
  console.log(
    'выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) +10',
  );
  console.log(
    'нету видеорезюме автора CV на английском языке. Видеорезюме встраивается в страницу CV как видео, а не в виде кнопки или ссылки. +0',
  );
  console.log(
    'дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию (это дополнительные 10 баллов, поэтому некоторый субъективизм в оценке может присутствовать) +10',
  );
})();
