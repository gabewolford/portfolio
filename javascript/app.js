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
const introImage = document.querySelector('.intro-image');
const hamburgerImage = document.querySelector('.hamburger-image');
const darkModeToggle = document.querySelector('.slider');
const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
const navItems = document.querySelectorAll('.nav-item');
const introBlurb = document.querySelector('.h1-text');


toggleSwitch.addEventListener('change', switchTheme, false);


function switchTheme(event) {
    if (event.target.checked) {
        // dark mode is on
        navItems.forEach(item => item.classList.add('dark-mode-nav'));
        introImage.src = '/assets/mobile blurb dark.png';
        introBlurb.src = '/assets/hover desktop blurb dark.png';
        hamburgerImage.src = '/assets/white-hamburger.png';
    
    } else {
        // dark mode is off
        navItems.forEach(item => item.classList.remove('dark-mode-nav'));
        introImage.src = '/assets/mobile blurb light.png';
        introBlurb.src = '/assets/hover desktop blurb light.png';
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
const linkDefaultLeft = document.querySelectorAll('.link-default-left');

linkDefaultLeft.forEach(linkDefaultLeft => {
    const originalImgLeft = linkDefaultLeft.querySelector('img').src;
    const newImgLeft = '/assets/hover left arrow check it out.png';

    linkDefaultLeft.addEventListener('mouseenter', () => {
        linkDefaultLeft.querySelector('img').src = newImgLeft;
    });

    linkDefaultLeft.addEventListener('mouseleave', () => {
        linkDefaultLeft.querySelector('img').src = originalImgLeft;
    })
})

const linkDefaultRight = document.querySelectorAll('.link-default-right');

linkDefaultRight.forEach(linkDefaultRight => {
    const originalImgRight = linkDefaultRight.querySelector('img').src;
    const newImgRight = '/assets/hover check it out right arrow.png';

    linkDefaultRight.addEventListener('mouseenter', () => {
        linkDefaultRight.querySelector('img').src = newImgRight;
    });

    linkDefaultRight.addEventListener('mouseleave', () => {
        linkDefaultRight.querySelector('img').src = originalImgRight;
    })
})

linkDefaultRight.forEach(linkDefaultRight => {
    const originalImgRight = linkDefaultRight.querySelector('img').src;
    const newImgRight = '/assets/hover check it out right arrow.png';

    linkDefaultRight.addEventListener('mouseenter', () => {
        linkDefaultRight.querySelector('img').src = newImgRight;
    });

    linkDefaultRight.addEventListener('mouseleave', () => {
        linkDefaultRight.querySelector('img').src = originalImgRight;
    })
})
