const speakersDetail = [
  {
    photo: './images/speaker_01.png',
    name: 'Yohai Benkler',
    profession: `
    Berkman Professor of Entrepreneurial Legal Studies at Harvard
    Law School 
    `,
    bio: `
    Benkler studies commons-based peer production, and published his
    seminal book, The Wealth of Networks in 2006
    `,
  },
  {
    photo: './images/speaker_02.png',
    name: 'Soyoung Noh',
    profession: 'Director of Art Centre Nabi and a board member of CC Korea',
    bio: `
    As the main venue for new media art production in Korea, Nabi
    promotes cross-disciplinary collaboration and understanding
    among science technology, humanities, and the arts.
    `,
  },
  {
    photo: './images/speaker_03.png',
    name: 'Lila tretikov',
    profession: 'Executive Director of the Wikimedia Foundation',
    bio: `
    Lila Tretikov is the Executive of the Wikimedia Foundation, the
    nonprofit organization that operates Wikipedia. Wikipedia is
    freely available in 290 languag-es and used by nearly half a
    billion people around the world every month.
    `,
  },
  {
    photo: './images/speaker_04.png',
    name: 'Kilnam Chon',
    profession: '',
    bio: `
    Kilnam Chon helped bring the internet to Asia and is an
    outspoken advocate for the open web and digital com-mons. In
    2012. he was inducted into the inaugural class of the Internet
    Society’s (ISOC) Internet Hall of Fame
    `,
  },
  {
    photo: './images/speaker_05.png',
    name: 'Julia Leda',
    profession: 'President of Young Pirates of Europe',
    bio: `
    European ingetration, political democracy and participation of
    youth through online as her major condern, Reda’s report
    outlining potential changes to EU copyright law was approved by
    the Parliament in July
    `,
  },
  {
    photo: './images/speaker_06.png',
    name: 'Ryan Merkly',
    profession: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    bio: `
    Ryan had been leading open-source projects at the Mozilla
    Foundation such as the open-source move-ment
    `,
  },
];

const speakers = document.querySelector('.speakers-wrapper .speakers');

// Create featured speakers dynamically
window.onload = () => {
  speakersDetail.forEach((speaker, index) => {
    speakers.innerHTML += `
    <div class="speaker-container">
    <div class='speaker-photo'>
    <img src="${speaker.photo}" alt="speaker photo here" />
  </div>
  <article class="speaker-intro">
    <h3 class="speaker-name">${speaker.name}</h3>
    <p class="speaker-profession">
    ${speaker.profession}
    </p>
    <hr class="title-underline" />
    <p class="speaker-bio">
    ${speaker.bio}
    </p>
  </article>
    </div>
    `;
    speakers.innerHTML += index === 1 ? '<div id="see-more" class="see-more"> MORE <img src="../images/arrow_down.png" alt=" arrow down image" /></div>' : '';
  });
  speakers.innerHTML += '<div class="see-less" id="see-less"> LESS <img src="../images/arrow_up.png" alt=" arrow down image" /></div>';
  const seeMore = document.querySelector('.speakers #see-more');
  const seeLess = document.querySelector('.speakers .see-less');

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
};

const mobileMenu = document.querySelector('header .mobile-menu');
const hamburger = document.querySelector('header .mobile-menu-icon img');
const closeMenu = document.querySelector('header .mobile-menu .close-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});
