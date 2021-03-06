const hamburgerCheckbox = document.getElementById('hamburger-menu-checkbox');
const mobileMenu = document.querySelector('.mobile-menu');

// removing mobile menu on  background click
document
  .querySelector('.mobile-menu, .close-mobile-menu')
  .addEventListener('click', () => {
    const event = new Event('change');
    hamburgerCheckbox.checked = false;
    hamburgerCheckbox.dispatchEvent(event);
  });

// opening/closing mobile menu.
hamburgerCheckbox.addEventListener('change', (me) => {
  const isChecked = me.target.checked;
  if (mobileMenu.classList.contains('mobile-menu-on')) {
    mobileMenu.classList.remove('mobile-menu-on');
  } else {
    mobileMenu.classList.add('mobile-menu-on');
  }
});
