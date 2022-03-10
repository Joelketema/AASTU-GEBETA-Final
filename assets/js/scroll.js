var Animation = function({ offset } = { offset: 10 }) {
    var _elements;
  
  
    var windowTop = offset * window.innerHeight / 100;
    var windowBottom = window.innerHeight - windowTop;
    var windowLeft = 0;
    var windowRight = window.innerWidth;
  
    function start(element) {
 
      element.style.animationDelay = element.dataset.animationDelay;
      element.style.animationDuration = element.dataset.animationDuration;
  
      element.classList.add(element.dataset.animation);

      element.dataset.animated = "true";
    }
  
    function isElementOnScreen(element) {
  
      var elementRect = element.getBoundingClientRect();
      var elementTop =
        elementRect.top + parseInt(element.dataset.animationOffset) ||
        elementRect.top;
      var elementBottom =
        elementRect.bottom - parseInt(element.dataset.animationOffset) ||
        elementRect.bottom;
      var elementLeft = elementRect.left;
      var elementRight = elementRect.right;
  
 
      return (
        elementTop <= windowBottom &&
        elementBottom >= windowTop &&
        elementLeft <= windowRight &&
        elementRight >= windowLeft
      );
    }
  

    function checkElementsOnScreen(els = _elements) {
      for (var i = 0, len = els.length; i < len; i++) {
     
        if (els[i].dataset.animated) continue;
  
        isElementOnScreen(els[i]) && start(els[i]);
      }
    }
  
    function update() {
      _elements = document.querySelectorAll(
        "[data-animation]:not([data-animated])"
      );
      checkElementsOnScreen(_elements);
    }
  
    
    window.addEventListener("load", update, false);
    window.addEventListener("scroll", () => checkElementsOnScreen(_elements), { passive: true });
    window.addEventListener("resize", () => checkElementsOnScreen(_elements), false);
  
    
    return {
      start,
      isElementOnScreen,
      update
    };
  };
  
  
  var options = {
    offset: 20 
  };
  var animation = new Animation(options);