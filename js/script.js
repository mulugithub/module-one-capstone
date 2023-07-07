const mobileMenu = document.querySelector('header .mobile-menu');
const hamburger = document.querySelector('header .mobile-menu-icon img');
const closeMenu = document.querySelector('header .mobile-menu .close-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

const seeMore = document.querySelector('.speakers #see-more');
const seeLess = document.querySelector('.speakers .see-less');
const speakers = document.querySelector('.speakers');

seeMore.addEventListener('click', () => {
// Show all child elements except the see less section
  speakers.querySelectorAll(':scope > div:not(.see-less)')
    .forEach((speaker) => {
      speaker.style.display = 'flex';
    });
  // Hide the see more section and show the see less section
  seeMore.style.display = 'none';
  seeLess.style.display = 'flex';
});

seeLess.addEventListener('click', () => {
  // Hide all speakers before the see more section
  speakers.querySelectorAll(':scope > div:not(.see-more):nth-child(n+4)')
    .forEach((speaker) => {
      speaker.style.display = 'none';
    });
  // Show the see more section and hide the see less section
  seeMore.style.display = 'flex';
  seeLess.style.display = 'none';
});
