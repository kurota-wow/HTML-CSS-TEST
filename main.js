'use strict';

{
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const modal = document.querySelector('.modal');

  open.addEventListener('click', () => {
    open.classList.add('hide');
    close.classList.remove('hide');
    modal.classList.add('show');
  });
  close.addEventListener('click', () => {
    open.classList.remove('hide');
    close.classList.add('hide');
    modal.classList.remove('show');
  });


}