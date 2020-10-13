window.addEventListener('DOMContentLoaded', (event) => {
  // setting form-group class listeners
  const forumGrups = document.querySelectorAll('.form-group');

  forumGrups.forEach((el) => {
    // set bubble event listener to parent container
    el.addEventListener('click', (click) => {
      // loop on childrens
      Array.from(el.children).forEach((child) => {
        console.log('tests');
      });
    });
  });
});
