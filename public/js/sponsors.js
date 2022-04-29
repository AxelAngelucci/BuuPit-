const sponsorsImg = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
const sponsors = document.getElementById("sponsors");

for(let i = 0; i < sponsorsImg.length; i++){
    const item = document.createElement('div');
    let image = document.createElement('img');
    image.classList.add('sponsorImg');
    image.src = `assets/img/sponsors/${sponsorsImg[i]}.svg`;
    item.appendChild(image);
    sponsors.appendChild(item);
}


//Change image src on mouse hover
const sponsorImg = document.querySelectorAll(".sponsorImg");
for(let i = 0; i<sponsorImg.length; i++){
    sponsorImg[i].addEventListener("mouseenter", function(){
        const actualImg = sponsorImg[i].getAttribute('src');
        const actualImgCut = actualImg.substring(0, actualImg.length - 4);
        sponsorImg[i].setAttribute('src', `${actualImgCut}-Color.svg`);
        
    });
}

for(let i = 0; i<sponsorImg.length; i++){
    sponsorImg[i].addEventListener("mouseout", function(){
        const actualImg = sponsorImg[i].getAttribute('src');
        const actualImgCut = actualImg.substring(0, actualImg.length - 10);
        sponsorImg[i].setAttribute('src', `${actualImgCut}.svg`);
    });
}