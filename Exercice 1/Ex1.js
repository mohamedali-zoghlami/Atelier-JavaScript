
let reponse="n";
do
{
    do
    {
        var  nbr_tent=prompt("Saisir le nombre de tentative :");
    }while(0>nbr_tent || nbr_tent>10)

    let num=Math.floor(Math.random()*11);
    test=false;
    for (i=0;i<nbr_tent;i++)
    {
        let essai=prompt("Devinez Le Nombre :")
        if (essai==num)
        {
            test=true;
            break;
        }
    }
    if(test==true)
    alert("Bien Jouer");
    else 
    alert("Desolé Tu a perdu!");
    do
    {
        let w=prompt("Vous voulez rejouer o/n?");
    }
    while(w!="o" && w!="n" && w.length!=1)
    reponse=w;
}
while(reponse=="o");
