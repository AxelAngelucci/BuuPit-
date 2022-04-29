const skills = ['React.js', 'Node.js', 'Python', 'Angular', 'Swift', 'Android', 'Java', 'Ruby',
                 'GoLang', 'Vue.js', 'Php', 'DevOps', 'Machine Learning', 'Data engineering',
                  'Scala', 'TypeScript', 'Cloud', 'Flutter', 'IOS', 'SalesForce'];
const gallery = document.querySelector('.tecnologies');

for(let i = 0; i < skills.length; i++){
    const item = document.createElement('div');
    let image = document.createElement('img');
    const name = document.createElement('p');
    image.src = `assets/img/work/skills/${skills[i]}.svg`;
    item.appendChild(image);
    name.textContent = skills[i];
    item.appendChild(name);
    gallery.appendChild(item);
}


