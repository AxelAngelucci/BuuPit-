if (screen.width < 1000) {
    let animation = bodymovin.loadAnimation({
        container: document.getElementById('intro'),
        path: './assets/anim/IntroVertical.json',
        renderer: 'svg',
        loop: true,
        autoplay: true,
        name: "Demo Animation",
    });
} else {
    let animation = bodymovin.loadAnimation({
        container: document.getElementById('intro'),
        path: './assets/anim/IntroHorizontal.json',
        renderer: 'svg',
        loop: true,
        autoplay: true,
        name: "Demo Animation",
    });
}

function animDelete() {
    let intro = document.getElementById('intro');
    intro.classList.replace('intro', 'd__none')
}
setTimeout(animDelete, 3000);