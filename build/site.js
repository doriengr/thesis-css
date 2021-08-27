(function () {
  let navItems = document.querySelectorAll('.js-link');
  let checkbox = document.getElementById('navigation-open');
  
  function closeMenu() {
    for(let i = 0; i < navItems.length; i++) {
      navItems[i].addEventListener('click', () => {
        if(window.matchMedia('(max-width: 1024px)').matches) {
          checkbox.checked = false;
        }
      });
    }
  }
  
  closeMenu();
})();

(function () {
  let listItems = document.querySelectorAll('.products__list-item');
  let sublists = document.querySelectorAll('.products__sublist');
  let labels = document.querySelectorAll('.products__list-label');
 
  function toggleNavigation(index) {
    if (window.matchMedia('(max-width: 1024px)').matches) {
      sublists[index].classList.toggle('products__list-item--hidden');
      labels[index].classList.toggle('products__list-label--rotate');
    } else {
      return;
    }
  }
 
  function addEventListenerToToggle(listItem, index) {
      listItem.addEventListener('click', () => {
      toggleNavigation(index);
    });
  }
 
  function hideAllSublists() {
    for (let i = 0; i < sublists.length; i++ ) {
      sublists[i].classList.add('products__list-item--hidden');
      labels[i].classList.add('products__list-label--rotate');
    }
  }
  
  function initDropdown() {
    for (let i = 0; i < listItems.length; i++ ) {
      hideAllSublists();
      addEventListenerToToggle(listItems[i], i);
    }
  }
  initDropdown();
})();

(function () {
  let navItems = document.querySelectorAll('.js-link');
    
  function initSmoothScrolling() {
    navItems.forEach(trigger => {
      trigger.onclick = function(e) {
        e.preventDefault();
        
        let hash = this.getAttribute('href');
        let target = document.querySelector(hash);
        let headerOffset = 0;
        if(window.matchMedia('(max-width: 1024px)').matches) {
          headerOffset = 75;
        } else {
          headerOffset = 150;
        }
        let elementPosition = target.offsetTop;
        let offsetPosition = elementPosition - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
      });
      }
    });
  }
  initSmoothScrolling();
})();
