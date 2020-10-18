const hamburgerCheckbox = document.getElementById('hamburger-menu-checkbox');

hamburgerCheckbox.addEventListener('change', (me) => {
  const isChecked = me.target.checked;
  const mobileMenu = document.querySelector('.mobile-menu');
  if (mobileMenu.classList.contains('mobile-menu-on')) {
    mobileMenu.classList.remove('mobile-menu-on');
  } else {
    mobileMenu.classList.add('mobile-menu-on');
  }
});
