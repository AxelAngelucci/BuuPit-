const skills = ['React.js', 'Node.js', 'Python', 'Angular', 'Swift', 'Android', 'Java', 'Ruby on Rails',
                 'GoLang', 'Vue.js', 'Php', 'DevOps', 'Machine Learning', 'Data engineering', 'Scala', 'TypeScript'];
const gallery = document.querySelector('.tecnologies');

for(let i = 0; i < skills.length; i++){
    const item = document.createElement('div');
    let image = document.createElement('img');
    const name = document.createElement('p');
    image.src = `assets/img/work/skills/${skills[i]}.svg`;
    item.appendChild(image);
    name.textContent = skills[i];
    item.appendChild(name);
    gallery.appendChild(item)
    console.log(skills[i])
}

const sponsorsImg = [1,2,3,4,5,6,7,8];
const sponsors = document.getElementById("sponsors");

for(let i = 0; i < sponsorsImg.length; i++){
    const item = document.createElement('div');
    let image = document.createElement('img');
    image.src = `assets/img/sponsors/${sponsorsImg[i]}.svg`;
    item.appendChild(image);
    sponsors.appendChild(item);
    console.log(sponsorsImg[i])
}
