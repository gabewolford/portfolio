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
// const emailBug = document.querySelector('#github');
// const linkedInBug = document.querySelector('#linkedin');
// const githubBug = document.querySelector('#github');
// console.log(emailBug);
// console.log(linkedInBug);
// console.log(githubBug);

toggleSwitch.addEventListener('change', switchTheme, false);


function switchTheme(event) {
    let emailBug = document.querySelector('#github');
    console.log(emailBug);
    let linkedInBug = document.querySelector('#linkedin');
    console.log(linkedInBug);
    let githubBug = document.querySelector('#github');
    console.log(githubBug);
    if (event.target.checked) {
        // dark mode is on
        navItems.forEach(item => item.classList.add('dark-mode-nav'));
        introImage.src = '/assets/mobile blurb dark.png';
        introBlurb.src = '/assets/default desktop blurb dark.png';
        hamburgerImage.src = '/assets/white-hamburger.png';
        emailBug.src = '/assets/email-circle.png';
        linkedInBug.src = '/assets/linkedin-circle.png';
        githubBug.src ='/assets/github-circle.png';
    } else {
        // dark mode is off
        navItems.forEach(item => item.classList.remove('dark-mode-nav'));
        introImage.src = '/assets/mobile blurb light.png';
        introBlurb.src = '/assets/default desktop blurb light.png';
        hamburgerImage.src = '/assets/black-hamburger.png'; 
        emailBug.src = '/assets/email-circle.png';
        linkedInBug.src = '/assets/linkedin-circle.png';
        githubBug.src = '/assets/github-circle.png';
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
    const newImg = '/assets/hover left arrow check it out.png';

    linkDefault.addEventListener('mouseenter', () => {
        linkDefault.querySelector('img').src = newImg;
    });

    linkDefault.addEventListener('mouseleave', () => {
        linkDefault.querySelector('img').src = originalImg;
    })
})

