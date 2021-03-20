let revenuTotaux = 0 ;
let revenu1 = document.getElementById("revenu1");
let Revenu1 = document.getElementById("Revenu1");
let montantRevenu1 ;
let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let montantAides = 0;
let montantDettes = 0;
let montantFrais = 0 - Number(montantAides) +Number(montantDettes);
console.log(montantFrais);

revenu1.addEventListener("input", function(event){

    span1.innerHTML = event.target.value;
    montantRevenu1 = parseInt(event.target.value);
    Calcul();

})

let revenu2 = document.getElementById("revenu2");
let Revenu2 = document.getElementById("Revenu2");
let montantRevenu2 ;
revenu2.addEventListener("input", function(event){

    span2.innerHTML = event.target.value;
    montantRevenu2 = parseInt(event.target.value);
    Calcul();

})

let aides = document.getElementById("aides");
let Aides = document.getElementById("Aides");
aides.addEventListener("change", function(event){

    Aides.innerHTML ="Montant des aides:" + " " + event.target.value;
    montantAides = Number(event.target.value);
    montantFrais -= Number(montantAides);
    Calcul();
    

})

let dettes = document.getElementById("dettes");
let Dettes = document.getElementById("Dettes");
dettes.addEventListener("change", function(event){

    Dettes.innerHTML ="Montant divers:" + " " + event.target.value;
    montantDettes = Number(event.target.value);
    montantFrais += Number(montantDettes);
    Calcul();
    

})

let fraisTotaux = document.getElementById("valeurFinale");



function Calcul(){
    revenuTotaux = parseInt(montantRevenu1 + montantRevenu2) ;
    let taux1 = Math.round((montantRevenu1*100)/revenuTotaux);
    let taux2 = Math.round((montantRevenu2*100)/revenuTotaux);

    let part1 = Math.round((montantFrais*taux1)/100);
    let part2 = Math.round((montantFrais*taux2)/100);



    if (part1 < montantRevenu1){
        p1.innerHTML = "Taux:" + " " + taux1 + "<br>" + "Part" + " "  + part1;

    } else {
        let report1 = part1 - montantRevenu1;
        part2 += report1;
        p1.innerHTML ="Taux" + " " + taux1 + "<br> " + "Part" + " " + part1 - report1;
    }
    
    if (part2 < montantRevenu2){
        p2.innerHTML = "Taux" + " " + taux2 + "<br> " + "Part"+ " " + part2;
    } else {
        let report2 = part2 - montantRevenu2;
        console.log(report2)
        part1 += report2;
        console.log(part1);
        p2.innerHTML = "Taux" + " " + taux2 + "<br> " + "Part"+ " " + part2 - report2;
    }
    

    
}

let nameA = document.getElementById("nameA");
let label1 = document.getElementById("lRevenu1");
let legend1 = document.getElementById("legend1");

nameA.addEventListener("input" , function(){

    let nameAValue = nameA.value;
    Revenu1.innerHTML = "Revenu" + " " + nameAValue+ " " + ":";
    label1.innerHTML = "Revenu " + nameAValue+ " " + ":";
    legend1.innerHTML = nameAValue;
    
})

let nameB = document.getElementById("nameB");
let label2 = document.getElementById("lRevenu2");
let legend2 = document.getElementById("legend2");

nameB.addEventListener("input" , function(){

    let nameBValue = nameB.value;
    Revenu2.innerHTML = "Revenu" + " " + nameBValue+ " " + ":";
    label2.innerHTML = "Revenu " + nameBValue+ " " + ":";
    legend2.innerHTML = nameBValue;
    
})

class frais {
    constructor (titre , valeur){

    this.titre = titre;
    this.valeur = valeur;
    }
}

let FraisArray = [
    new frais("Titre" , "Montant"),
]

let submit = document.getElementById("submit");
let titre = document.getElementById("titre");
let valeurFrais = document.getElementById("valeur");
let divTitre = document.getElementById("divTitre");
let divValeur = document.getElementById("divValeur");

let fraisEngages = 0;
let fraisRecherche = FraisArray[fraisEngages];


    submit.addEventListener("click", function(){

        let titreInscrit = titre.value;
        let valeurInscrite = valeurFrais.value;

        FraisArray.push(new frais (titreInscrit , valeurInscrite));
        if (fraisEngages == 0){
            
            divTitre.innerHTML += fraisRecherche.titre + "<br>";
            divValeur.innerHTML += fraisRecherche.valeur + "<br>";
            fraisEngages++;
            fraisRecherche = FraisArray[fraisEngages];
            divTitre.innerHTML += fraisRecherche.titre + "<br>";
            divValeur.innerHTML += fraisRecherche.valeur + "<br>";
            montantFrais += Number(fraisRecherche.valeur);
        } else {
        fraisEngages ++;
        fraisRecherche = FraisArray[fraisEngages];
        divTitre.innerHTML += fraisRecherche.titre + "<br>";
        divValeur.innerHTML += fraisRecherche.valeur + "<br>";
        montantFrais += Number(fraisRecherche.valeur);
        }
        
        fraisTotaux.innerHTML = "Frais totaux:" + " " +montantFrais + "<br>" + "Revenus totaux:" + " " + revenuTotaux;
        Calcul();
        
        
    })
