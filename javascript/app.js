// hamburger nav functionality #1
const hamburgerIcon = document.querySelector('.hamburger-icon');
const closeIcon = document.querySelector('.close-icon')
const navMenu = document.querySelector('.nav-menu');

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

// dark mode functionality #2
const introImage = document.querySelector('.intro-image')
const hamburgerImage = document.querySelector('.hamburger-image');
const darkModeToggle = document.querySelector('.slider')
const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
const navItems = document.querySelectorAll('.nav-item');
console.log(navItems);

console.log(toggleSwitch);
toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(event) {
    if (event.target.checked) {
        // dark mode is on
        navItems.forEach(item => item.classList.add('dark-mode-nav'));
        introImage.src = '/assets/mobile blurb dark.png';
        hamburgerImage.src = '/assets/white-hamburger.png';
    } else {
        // dark mode is off
        navItems.forEach(item => item.classList.remove('dark-mode-nav'));
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


// link hover effects #3
const linkDefault = document.querySelectorAll('.link-default');

linkDefault.forEach(linkDefault => {
    const originalImg = linkDefault.querySelector('img').src;
    const newImg = '/assets/hover check it out right arrow.png';

    linkDefault.addEventListener('mouseenter', () => {
        linkDefault.querySelector('img').src = newImg;
    });

    linkDefault.addEventListener('mouseleave', () => {
        linkDefault.querySelector('img').src = originalImg;
    })
})

