'use strict';

// modal elements
const modalEl = document.querySelector('.modal');

// overlay modal
const overlayEl = document.querySelector('.overlay');

// close modal button
const btnCloseModalEl = document.querySelector('.close-modal');

//open modal
const btnsOpenModalEl = document.querySelectorAll('.show-modal');

console.log('Open buttons:', btnsOpenModalEl.length);

const openModal = function () {
  // remove hidden classname from modal
  modalEl.classList.remove('hidden');

  // remove the hidden keyword classname in overlay
  overlayEl.classList.remove('hidden');
};

btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
