let menuIcon = document.getElementById("menu__icon");
        let menuMobile = document.getElementById("menu");
        menuIcon.onclick = function(){
            if(menuMobile.classList.contains("hideMenu")){
                menuMobile.classList.replace("hideMenu", "showMenu");
                menuIcon.classList.add("open");
            }else{
                menuMobile.classList.replace("showMenu", "hideMenu");
                menuIcon.classList.remove("open");
            }
        }