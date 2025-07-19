// Theme toggle with persistence
const toggle = document.getElementById('theme-toggle');
if (toggle) {
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
  }

  toggle.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}

// Slideshow logic ONLY if slideshow elements exist
const imgEl = document.getElementById('slideshow-image');
if (imgEl) {
  const slides = [
    {
      src: 'images/chrono_rift_boss.jpg',
      desc: 'Chrono Rift’s final boss “Aeternus” unleashes time-warped shadow strikes—players coordinate dodges and counterattacks in rhythm, exploiting brief vulnerability windows to chip away at its energy core.'
    },
    {
      src: 'images/minecraft_speedrun.jpg',
      desc: 'Minecraft’s top speedrunners tackled the Ender Dragon in under 10 minutes—record holders share strategies on glitch exploits and precise pearl placements to shave off precious seconds.'
    },
    {
      src: 'images/new_game_alert.jpg',
      desc: 'Subnautica 2 drops players into a frozen ocean world, introducing thermal vents and ice-bound caverns—divers will need new drones and heat suits to harvest rare resources beneath the waves.'
    },
    {
      src: 'images/sea_of_thieves.jpg',
      desc: 'Sea of Thieves’ new Reaper season pits crews against shadowy pirates under a crimson moon—renowned captains report epic ship-to-ship gunfights, cursed treasures, and vendettas across the seas.'
    },
    {
      src: 'images/top_clutch_moments.jpg',
      desc: 'Last week in Call of Duty, players pulled off insane 1v4 clutch plays—one ace on Shipment had viewers on edge, while another sniper duo locked down the final hill with perfect teamwork.'
    }
  ];

  const descEl = document.getElementById('slide-description').querySelector('p');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentIndex = 0;
  let slideInterval;

  function showSlide(index) {
    imgEl.classList.add('fade-out');
    setTimeout(() => {
      currentIndex = (index + slides.length) % slides.length;
      imgEl.src = slides[currentIndex].src;
      descEl.textContent = slides[currentIndex].desc;
      imgEl.classList.remove('fade-out');
    }, 800);
  }

  function startAutoSlide() {
    slideInterval = setInterval(() => showSlide(currentIndex + 1), 7000);
  }

  prevBtn.addEventListener('click', () => {
    clearInterval(slideInterval);
    showSlide(currentIndex - 1);
    startAutoSlide();
  });

  nextBtn.addEventListener('click', () => {
    clearInterval(slideInterval);
    showSlide(currentIndex + 1);
    startAutoSlide();
  });

  // Initialize slideshow
  showSlide(0);
  startAutoSlide();
}
