document.addEventListener('DOMContentLoaded', function() {
  const logo = document.querySelector('.logo');
  logo.addEventListener('click', () => {
    window.scroll({top: 0, behavior: 'smooth'});
  });

  const slide = function(element, isIntersecting) {
    if(isIntersecting) {
      element.classList.add('inview');
    }
  };

  const slide2 = function(element, isIntersecting) {
    if(isIntersecting) {
      element.classList.add('fadeIn');
    }
  };

  const scroll = new ScrollObserver('.cover-slide', slide);
  const scroll2 = new ScrollObserver('.service-menu', slide2);
});
