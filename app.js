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

function switchTheme() {
    if (localStorage.theme === 'dark') {
        // dark mode is on
        navItems.forEach(item => item.classList.add('dark-mode-nav'));
        document.body.classList.add('dark-mode');
        if (location.pathname === '/' || location.pathname === '/portfolio/index.html') {
            introImage.src = '../assets/mobile blurb dark.png'; 
            introBlurb.src = '../assets/hover desktop blurb dark.png'; 
        }
        hamburgerImage.src = '../assets/white-hamburger.png';
    } else {
        // dark mode is off
        navItems.forEach(item => item.classList.remove('dark-mode-nav'));
        document.body.classList.remove('dark-mode');
        if (location.pathname === '/' || location.pathname === '/portfolio/index.html') {
            introImage.src = '../assets/mobile blurb light.png';
            introBlurb.src = '../assets/hover desktop blurb light.png';
        }
        hamburgerImage.src = '../assets/black-hamburger.png';
    }
}

// reset switch based on which theme is in local storage
if (localStorage.theme === 'dark') {
    toggleSwitch.checked = true;
}
else {
    toggleSwitch.checked = false;
}

switchTheme();

function darkMode() {
    if (localStorage.theme === 'light') {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
    switchTheme();
}

darkModeToggle.addEventListener('click', darkMode);

// link hover effects #3
const linkDefaultLeft = document.querySelectorAll('.link-default-left');

linkDefaultLeft.forEach(linkDefaultLeft => {
    const originalImgLeft = linkDefaultLeft.querySelector('img').src;
    const newImgLeft = 'assets/hover left arrow check it out.png';

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
    const newImgRight = 'assets/hover check it out right arrow.png';

    linkDefaultRight.addEventListener('mouseenter', () => {
        linkDefaultRight.querySelector('img').src = newImgRight;
    });

    linkDefaultRight.addEventListener('mouseleave', () => {
        linkDefaultRight.querySelector('img').src = originalImgRight;
    })
})

// resume modal functionality #4 (special thanks to jquery and chatGPT)
$(document).ready(function() {
    $('.download-resume, .download-arrow').click(function() {
        // get the resume URL from the "href" attribute of the "download resume" link
        var resumeUrl = $(this).prev().find('a').attr('href');
        
        // set the URL of the iframe to the resume URL
        $('#resume-frame').attr('src', resumeUrl);

        // display the modal window
        $('.modal').css('display', 'block');
    });

    $('.close-modal').click(function() {
        // hide the modal window when the "x" button is clicked
        $('.modal').css('display', 'none');
    });
});
