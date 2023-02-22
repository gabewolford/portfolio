// DARK MODE MESS
const toggleSwitch = document.querySelector('.slider');
console.log(toggleSwitch);
const emailIcon = document.querySelector('#email');
console.log(emailIcon);
const linkedinIcon = document.querySelector('#linkedin');
console.log(linkedinIcon);
const githubIcon = document.querySelector('#github');
console.log(githubIcon);


function changeToDark() {
    document.body.style.backgroundColor = "var(--black)"
    document.body.style.color = "var(--white)"
    emailIcon.src = '/assets/email-circle-dark.png'
    linkedinIcon.src = '/assets/linkedin-circle-dark.png'
    githubIcon.src = '/assets/github-circle-dark.png'
}

toggleSwitch.addEventListener('click', changeToDark);