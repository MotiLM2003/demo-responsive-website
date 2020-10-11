window.addEventListener('DOMContentLoaded', (event) => {
  // setting form-group class listeners
  const forumGrups = document.querySelectorAll('.form-group');
  console.log(forumGrups.children);
  Array.from(forumGrups.children).forEach((el) => {
    console.log(el.classList);
    if (el.classList.contains('fg-input')) {
      el.addEventListener('click', (e) => {
        alert('test');
      });
    }
  });
});
