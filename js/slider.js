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
        item.style.height = 'auto';
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
}());
