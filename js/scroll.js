class ScrollObserver {
  constructor(elements, slide, options) {
    this.elements = document.querySelectorAll(elements);
    const Options = {
      root: null,
      threshold: 0,
      rootMargin: "0px",
      once: true
    };
    this.slide = slide;
    this.options = Object.assign(Options, options);
    this.once = this.options.once;
    this._init();
    console.log(this.elements)
  }
  _init() {
    const slideIn = function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.slide(entry.target, true);
          if(this.once) {
            observer.unobserve(entry.target)
          }
        } else {
          this.slide(entry.target, false)
        }
      });
    }

    this.animation = new IntersectionObserver(slideIn.bind(this), this.options);
    
    this.animation.POLL_INTERVAL = 100;
    
    this.elements.forEach(element => this.animation.observe(element));
  }

  destroy() {
    this.animation.disconnect();
  }
};