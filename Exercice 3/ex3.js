const nom=document.querySelector(".nom");
const content=document.querySelector(".contenu");
const boutton=document.querySelector(".boutton");
boutton.addEventListener("click",addtodo);
const first=document.querySelector(".first");
const last=document.querySelector(".last");
const ajout=document.querySelector(".mmt");
first.addEventListener("click",suppfir);
last.addEventListener("click",supplas);
function suppfir()
{
    ajout.removeChild(ajout.firstElementChild);
}
function supplas()
{
    ajout.removeChild(ajout.lastElementChild);
}
function addtodo()
{
    const todo=document.createElement("div");
    
    let t=nom.value+" : "+content.value;
    todo.innerHTML+=t;

    ajout.appendChild(todo);
}