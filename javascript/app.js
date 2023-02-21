const toggleSwitch = document.querySelector('#toggle-button');
console.log(toggleSwitch);
const stylesheet = document.querySelector('[href="/css/styles-light.css"]');
console.log(stylesheet);
const blurb = document.querySelector('img[src="/assets/blurb-photo.png"]');
console.log(blurb);

toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        stylesheet.href = '/css/styles-dark.css';
        blurb.src = '/assets/blurb-photo-dark.png';
    } else {
        stylesheet.href = '/css/styles-light.css';
    }
});

toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        const home = document.querySelector(".home");
        console.log(home)
        home.innerHTML = 'ET phone home'
    } else {
        stylesheet.href = '/css/styles-light.css';
    }
});
