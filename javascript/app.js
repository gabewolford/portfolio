const hamburgerIcon = document.querySelector('.hamburger-icon');
const closeIcon = document.querySelector('.close-icon')
const navMenu = document.querySelector('.nav-menu');

// hamburger nav functionality
hamburgerIcon.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburgerIcon.style.display = 'none';
    closeIcon.style.display = 'block';
})

closeIcon.addEventListener('click', () => {
    navMenu.classList.remove('open');
    closeIcon.style.display = 'none';
    hamburgerIcon.style.display = 'block';
})

// dark mode functionality
const introImage = document.querySelector('.intro-image')
const hamburgerImage = document.querySelector('.hamburger-image');
const darkModeToggle = document.querySelector('.slider')
const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');

console.log(toggleSwitch);
toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(event) {
    if (event.target.checked) {
        // dark mode is on
        introImage.src = '/assets/mobile blurb dark.png';
        hamburgerImage.src = '/assets/white-hamburger.png';

    } else {
        // dark mode is off
        introImage.src = '/assets/mobile blurb light.png'
        hamburgerImage.src = '/assets/black-hamburger.png';
    }
}

function darkMode() {
    document.body.classList.toggle('dark-mode');
    const hamburgerImage = document.querySelector('.hamburger-image');
    if (document.body.classList.contains('dark-mode')) {
        hamburgerImage.src = '/assets/white-hamburger.png';
    } else {
        hamburgerImage.src = '/assets/black-hamburger.png';
    }
}

darkModeToggle.addEventListener('click', darkMode);