(function(window) {

  function Tabs(options) {
    this.activeIndex = 0;
    this.el = document.querySelector(options.el);
    this.tabnavs = this.el.querySelectorAll('.c-tabs-nav__link');
    this.tabContent = this.el.querySelectorAll('.c-tab');
  }

  Tabs.prototype.init = function() {
    handleClick.call(this);
  }

  Tabs.prototype.goTo = function(index) {
    //remove active
    this.tabnavs[this.activeIndex].classList.remove('is-active');
    this.tabContent[this.activeIndex].classList.remove('is-active');

    //add active
    this.tabnavs[index].classList.add('is-active');
    this.tabContent[index].classList.add('is-active');

    //reset value
    this.activeIndex = index;
  }

  function handleClick() {
    var _this = this;
    for(var i = 0; i < this.tabnavs.length; i++) {
      (function(i) {
        _this.tabnavs[i].addEventListener('click', function() {
          _this.goTo(i);
        });
      })(i);
    }
  }

  window.Tabs = Tabs;

})(window);