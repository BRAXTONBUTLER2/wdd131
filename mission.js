const themeSelector = document.querySelector('#theme-selector');
const body = document.body;
const logo = document.querySelector('#logo');

function changeTheme() {
  const currentTheme = themeSelector.value;

  if (currentTheme === 'dark') {
    body.classList.add('dark');
    body.classList.remove('light');
    logo.setAttribute('src', 'images/BYUILOGOWHITE.png');
  } else {
    body.classList.add('light');
    body.classList.remove('dark');
    logo.setAttribute('src', 'images/BYUILOGOBLACK.png');
  }
}

// Set initial theme on page load
changeTheme();

// Listen for changes
themeSelector.addEventListener('change', changeTheme);
