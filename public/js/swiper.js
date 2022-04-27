const swiper = new Swiper(".swiper", {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1.5,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swipe-right',
        prevEl: '.swipe-left'
    },
    breakpoints: {
        600: {
            loop: false,
            slidesPerView: 2,
            spaceBetween: 30
        },
        1024: {
            loop: false,
            slidesPerView: 3,
            spaceBetween: 50
        },

    }
});

const readMore = document.getElementById("readMore");
const readMoreTarget = document.getElementById("readMoreTarget");
const textBox = document.getElementById("textBox");

const read = () => {
    readMore.classList.replace("d-none", "d-block");
}
readMore.addEventListener("click", ()=>{
    if(readMoreTarget.classList.contains("d-none")){
        readMore.textContent = "Back";
        textBox.classList.replace("job-desc", "job__desc-more");
        readMoreTarget.classList.replace("d-none", "d-block");
    }else{
        readMore.textContent = "Read more";
        textBox.classList.replace("job__desc-more", "job-desc");
        readMoreTarget.classList.replace("d-block", "d-none");
    }
});