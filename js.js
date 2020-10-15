// adding click event listener to the humburger;

document
  .getElementsByClassName('humburger')[0]
  .addEventListener('click', () => {
    document
      .getElementsByClassName('mobile-menu')[0]
      .classList.add('mobile-menu-off');
  });
