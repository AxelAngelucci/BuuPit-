const sponsorsImg = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
const sponsors = document.getElementById("sponsors");

for(let i = 0; i < sponsorsImg.length; i++){
    const item = document.createElement('div');
    let image = document.createElement('img');
    image.src = `assets/img/sponsors/${sponsorsImg[i]}.svg`;
    item.appendChild(image);
    sponsors.appendChild(item);
    console.log(sponsorsImg[i])
}