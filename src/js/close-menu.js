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