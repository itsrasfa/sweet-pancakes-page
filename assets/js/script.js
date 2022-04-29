const open = document.querySelector('#open');
const openLinks = document.querySelectorAll('.openLinks');
const modal = document.getElementById('modal-container');
const close = document.querySelector('#close');


openLinks.forEach((item) => {
  item.addEventListener('click', () => {
    modal.classList.add('show');
  });
})

open.addEventListener('click', () => {
  modal.classList.add('show');
});

close.addEventListener('click', () => {
  modal.classList.remove('show');
});