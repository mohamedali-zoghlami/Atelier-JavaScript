const couleur=document.querySelector(".couleur");
const taille=document.querySelector(".taille");
const fontee=document.querySelector(".fontee");
const element=document.querySelector("p");
couleur.addEventListener('change',change_color);
taille.addEventListener('change',change_taille);
fontee.addEventListener('change',change_font);
function change_color()
{   element.style.color = couleur.value;
}

function change_taille()
{   
    element.style.fontSize=taille.value + "px";
}

function change_font()
{  
    element.style.fontFamily = fontee.value;
}