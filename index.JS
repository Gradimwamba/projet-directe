//Afficher message de bienvenue dans le console.log
let message = "Bienvenue dans votre gestionnaire de tâches!"
console.log(message);

// Créer une variable de nombre entier et l'afficher

let nbTache = [11,12,13,16]
let nombreGestion = nbTache.length

console.log(nombreGestion);


//Déclaration d'un tableau de tâches
let nombreDeTâches = []
let nbTaches = nombreDeTâches.length
if (nbTaches===0){

    console.log("Aucune tâche à faire.");
    
} else {

    console.log("nombre de tâches :" + nbTaches); 
}

//Création d'un tableau vide et ajouter une tâche

const taches =["Tache 1", "Tache 2", "Tache 3"]
taches.push("Faire les courses");


// console.log(taches);

for (i = 0; i < taches.length; i++) {

    console.log(taches[i]);
    
}

//La fonction pour ajouter une tâche
function ajouterTache(values) {
    let listDetache =[]
    listDetache.push(values)

   console.log(`faire la lessive : ${listDetache}`);
   
}


ajouterTache(taches)

//Créer une tâche qui supprime le dernier élément du tableau

let listDetacheAsupprimer =["tache 1","tache2", "tache3", "tache4"]

function supprimerDerniereTache() {
    let supperssion = listDetacheAsupprimer.pop();

    console.log(listDetacheAsupprimer);
    
}

supprimerDerniereTache(listDetacheAsupprimer)

//Modification d'une tâche spécifique dans le tableau à l'aide de son index

let modificationDuTableau = ["faire à manger", "dormir à temps", "Etre prudent", "Etre à l'école"]
modificationDuTableau.splice(1, 1, "aller se coucher")

console.log(modificationDuTableau);

//Crée une fonction qui vérifie les taches dans le tableau
function verifierTAche(monTableau, tacheRecherchee) {
   if (monTableau.includes(tacheRecherchee)) {
    return "Tache retrouvée";
    
   } else {
    return "Tache non trouvée";
    
   }
    
};

verifierTAche

console.log(monTableau);


let monTableau = ["Faire à manger", "Sortir diner", "Faire la laissive"];
// console.log(verifierTAche(monTableau, "Faire à manger"));
// console.log(verifierTAche(monTableau, "Aller jouer au foot"));





















