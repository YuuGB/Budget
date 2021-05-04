////////////////////////////////////// Recupération des éléments

nameA = document.getElementById("nameA");
labelRevenu1 = document.getElementById("labelRevenu1");
labelSolde1 = document.getElementById("labelSolde1");
legend1 = document.getElementById("legend1");
submit1 = document.getElementById("submit1");
Revenu1 = document.getElementById("Revenu1");
revenu1 = document.getElementById("revenu1");
span1 = document.getElementById("span1");
solde1 = document.getElementById("solde1");
Solde1 = document.getElementById("Solde1");
p1 = document.getElementById("p1");

nameB = document.getElementById("nameB");
labelRevenu2 = document.getElementById("labelRevenu2");
labelSolde2 = document.getElementById("labelSolde2");
legend2 = document.getElementById("legend2");
submit2 = document.getElementById("submit2");
Revenu2 = document.getElementById("Revenu2");
revenu2 = document.getElementById("revenu2");
span2 = document.getElementById("span2");
solde2 = document.getElementById("solde2");
Solde2 = document.getElementById("Solde2");
p2 = document.getElementById("p2");


aides = document.getElementById("aides");
Aides = document.getElementById("Aides");
Frais = document.getElementById("Frais");
RevenuTotaux = document.getElementById("RevenuTotaux");
soldeJoint = document.getElementById("soldeJoint");
SoldeJoint = document.getElementById("SoldeJoint");
areCompteJoint = document.getElementById("areCompteJoint");
joint = document.getElementById("joint");
titreFrais = document.getElementById("divTitre");
valeurFinale = document.getElementById("valeurFinale");


/////////////////////////////////////// Variable

let revenuA = 0;
let soldeA = 0;
let tauxA = 0;
let fraisA = 0;
let partA = 0;
let resteA = 0;

let revenuB = 0;
let soldeB = 0;
let tauxB = 0;
let fraisB = 0;
let partB = 0;
let resteB = 0;

let revenuTotaux = 0;
let montantAides = 0;
let montantFrais = 0;
let montantSoldeJoint = 0;
let fraisJoint = 0;
let nombreDeFrais = 0;
let totalFrais = 0;
let newValue = 0;
let nombreFraisSupprimer = 0;


////////////////////////////////// Saisie

nameA.addEventListener("input" , function(){

    labelRevenu1.innerHTML = "Revenu" + " " + nameA.value + ":";
    Revenu1.innerHTML =  "Revenu" + " " + nameA.value + ":";
    labelSolde1.innerHTML = "Solde" + " " + nameA.value + ":";
    legend1.innerHTML = nameA.value;
    submit1.innerHTML = "Compte" + " " + nameA.value;
});

nameB.addEventListener("input" , function(){

    labelRevenu2.innerHTML = "Revenu" + " " + nameB.value + ":";
    Revenu2.innerHTML =  "Revenu" + " " + nameB.value + ":";
    labelSolde2.innerHTML = "Solde" + " " + nameB.value + ":";
    legend2.innerHTML = nameB.value;
    submit2.innerHTML = "Compte" + " " + nameB.value;
});

revenu1.addEventListener("change", function(){
    revenuA = Number(revenu1.value);
    revenuTotaux += revenuA;
    span1.innerHTML = revenuA;
    RevenuTotaux.innerHTML = "Revenu totaux: "+ " " + revenuTotaux;
})

revenu2.addEventListener("change", function(){
    revenuB = Number(revenu2.value);
    revenuTotaux += revenuB;
    span2.innerHTML = revenuB;
    RevenuTotaux.innerHTML = "Revenu totaux: "+ " " + revenuTotaux;
})

aides.addEventListener("change", function(){
    montantAides = Number(aides.value);
    montantFrais -= montantAides;
    fraisJoint -= montantAides;

    Aides.innerHTML = "Montant des aides :" + " " + montantAides;
    Frais.innerHTML = "Montant total des frais :" + " " + montantFrais;
    
})

solde1.addEventListener("change", function(){
    soldeA = Number(solde1.value);
    revenuA += soldeA;
    revenuTotaux += soldeA;
    Solde1.innerHTML = "Solde" + " " + nameA.value + ":" + " " + soldeA;
    RevenuTotaux.innerHTML = "Revenu totaux: "+ " " + revenuTotaux;
    span1.innerHTML = revenuA;

    
})

solde2.addEventListener("change", function(){
    soldeB = Number(solde2.value);
    revenuB += soldeB;
    revenuTotaux += soldeB;
    Solde2.innerHTML = "Solde" + " " + nameB.value + ":" + " " + soldeB;
    RevenuTotaux.innerHTML = "Revenu totaux: "+ " " + revenuTotaux;
    span2.innerHTML = revenuB;

    
})

soldeJoint.addEventListener("change", function(){
    montantSoldeJoint = Number(soldeJoint.value);
    
    SoldeJoint.innerHTML = "Solde Joint : " + " " + montantSoldeJoint;
    RevenuTotaux.innerHTML = "Revenu totaux: "+ " " + revenuTotaux;
    
})

areCompteJoint.onchange = function(){
    if (areCompteJoint.checked == true){
        joint.innerHTML= '<legend id="legendJoint">Compte Joint</legend><div id="p3"></div>';
    } else {
        joint.innerHTML = "Pas de compte joint";
    }
};
///////////////////////////////////////// Calcul et Partage

function partage(value){
   let valeurFrais  = document.getElementById("valeur").value;
   let montantFraisSaisi = Number(valeurFrais);

   
    switch(value){
        case '1':
            fraisA += montantFraisSaisi;
            montantFrais += montantFraisSaisi;
            break;
        case '2':
            if(areCompteJoint.checked == true){
            fraisJoint += montantFraisSaisi;
            montantFrais += montantFraisSaisi;
            } else {
                alert("Vous n'avez pas coché l'option Compte joint !")
            }
            break;
        case '3':
            fraisB += montantFraisSaisi;
            montantFrais += montantFraisSaisi;
            break;
        default:
            console.log("Erreur");
    }
}

function Calcul(){
    let dépenseTotale = montantFrais - soldeJoint - soldeA - soldeB;
    if (revenuTotaux > dépenseTotale){
        alert ("Vos revenus totaux sont inférieurs au montant total de vos frais")
    }

        if (soldeA < 0){
            montantFrais -= soldeA;
            fraisA -= soldeA;
        }

        if (soldeB < 0){
            montantFrais -= soldeB;
            fraisB -= soldeB;
        }

        

        tauxA = (revenuA*100)/revenuTotaux;
        tauxB = (revenuB*100)/revenuTotaux;

        partA += montantFrais*tauxA/100;
        partB += montantFrais*tauxB/100;

        

        

        if (montantSoldeJoint < 0){
            fraisJoint -= montantSoldeJoint;
            partA -= montantSoldeJoint*tauxA/100;
            partB -= montantSoldeJoint*tauxB/100;
        } else {
            fraisJoint -= montantSoldeJoint;
            resteA -= montantSoldeJoint*tauxA/100;
            resteB -= montantSoldeJoint*tauxB/100;

            if (resteA < 0){
                resteB += resteA;
            }
        
            if (resteB < 0){
                resteA += resteB;
            }
            
        }

        resteA = partA - fraisA;
        resteB = partB - fraisB;

        p1.innerHTML=   "Revenu " + nameA.value + " :" + revenuA + "<br>"+
                        "Taux " + nameA.value + " :" + tauxA + "<br>"+
                        "Part " + nameA.value +  " :" + partA + "<br>"+
                        "Montant payé " + nameA.value + " :" + fraisA + "<br>"+
                        "Reste à payer " + nameA.value + " :" + resteA;

        p2.innerHTML=   "Revenu " + nameB.value + " :" + revenuB + "<br>"+
                        "Taux " + nameB.value + " :" + tauxB + "<br>"+
                        "Part " + nameB.value +  " :" + partB + "<br>"+
                        "Montant payé " + nameB.value + " :" + fraisB + "<br>"+
                        "Reste à payer " + nameB.value + " :" + resteB;

        if (areCompteJoint.checked == true){
            p3 = document.getElementById("p3");
            p3.innerHTML=   "Montant à payer sur compte joint: " + fraisJoint + "<br>" +
                            "Montant des aides: " + montantAides;


        }
    
                
}

/////////////////////////////////////////////// Frais
class frais{
    constructor (id, type, montant){

    this.id = id;
    this.type = type;
    this.montant = montant
    }
}

let fraisArray = [];

function makeArray(){
    total = document.getElementById("valeurFinale");
    nombreDeFrais = 0;
    
    titreFrais.innerHTML =" ";

    for(i=0 ; i < fraisArray.length ; i++){
        titreFrais.innerHTML += "<button id='div' onclick='removeFrais(this.id , this.value)'></button>";
        div = document.getElementById("div");
        div.innerHTML = fraisArray[nombreDeFrais].type + " " + fraisArray[nombreDeFrais].montant;
        div.setAttribute("id", nombreDeFrais);
        div.setAttribute("value", fraisArray[nombreDeFrais].montant );
        nombreDeFrais++;
        valeurFinale.innerHTML = "Total des frais: " + montantFrais;
    };
    

}

function addFrais(){
    valeurFrais  = document.getElementById("valeur").value;
    typeFrais = document.getElementById("titre").value;


    
    fraisArray.push(new frais ( nombreDeFrais+1, typeFrais, valeurFrais));
    makeArray();
}

function removeFrais(id,value){
    montantFrais -= Number(value);
    boutonSupprime = document.getElementById(id);
    titreFrais.removeChild(boutonSupprime);
    fraisArray.splice(id,1);
    if ( montantFrais == 0){
        valeurFinale.innerHTML = " ";
    }
    makeArray();
}




