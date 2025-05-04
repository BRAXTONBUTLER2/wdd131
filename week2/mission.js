
const themeSelector = document.querySelector('#theme-selector');
const body = document.body;
const logo = document.querySelector('#logo');


function changeTheme() {
  const currentTheme = themeSelector.value;

  if (currentTheme === 'dark') {
    body.classList.add('dark');
    logo.setAttribute('src', 'images/BYUILOGOWHITE.png');
  } else {
    body.classList.remove('dark');
    logo.setAttribute('src', 'images/BYUILOGOBLACK.png');
  }
}


themeSelector.addEventListener('change', changeTheme);
