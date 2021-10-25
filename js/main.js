document.addEventListener('DOMContentLoaded', function() {
  // const menuIcon = document.querySelector('.menu-icon');
  // const body = document.querySelector('body')
  
  // menuIcon.addEventListener('click', () => {
  //   menuIcon.classList.toggle('menu-open');
  // });

  const slide = function(element, isIntersecting) {
    if(isIntersecting) {
      element.classList.add('inview');
    }
  };

  const scroll = new ScrollObserver('.cover-slide', slide);
})



