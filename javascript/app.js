const toggleSwitch = document.querySelector('#toggle-button');
console.log(toggleSwitch);
const stylesheet = document.querySelector('[href="/css/styles-light.css"]');
console.log(stylesheet);
const blurb = document.querySelector('src="/assets/blurb-photo.png"]')

toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        stylesheet.href = '/css/styles-dark.css';
        blurb.src = '/assets/blurb-photo.png';
    } else {
        stylesheet.href = '/css/styles-light.css';
    }
});
