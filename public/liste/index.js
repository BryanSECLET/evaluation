"use strict";

// -----------------------------------------------------------------------------------
// Import des fonctions nécessaires
// -----------------------------------------------------------------------------------

import {creerLigneEtudiants} from "../etudiants.js";
import {activerTri } from "/composant/fonction/tableau.js";
import { getData } from "/composant/fonction/page.js";

// -----------------------------------------------------------------------------------
// Déclaration des variables globales
// -----------------------------------------------------------------------------------

const lesLignes = document.getElementById('lesLignes');
const nb = document.getElementById('nb');
const search = document.getElementById('search');

// Récupération des données injectées par Vue
const lesEtudiants = getData('lesEtudiants');

// -----------------------------------------------------------------------------------
// Procédures évènementielles
// -----------------------------------------------------------------------------------

search.oninput = () => afficher(lesEtudiants);

// -----------------------------------------------------------------------------------
// Fonctions de traitement
// -----------------------------------------------------------------------------------

function afficher(lesEtudiants) {
    const valeur = search.value.toLowerCase();

    lesLignes.innerHTML = '';
    let count = 0;

    for (const coureur of lesEtudiants) {
        // Si une valeur de recherche est saisie et qu'aucun champ ne correspond, on passe
        if (valeur &&
            !coureur.licence.toLowerCase().includes(valeur) &&
            !coureur.nomPrenom.toLowerCase().includes(valeur) &&
            !coureur.nomClub.toLowerCase().includes(valeur)
        ) {
            continue; // on passe au suivant
        }

        count++;

        lesLignes.appendChild(creerLigneEtudiants(Etudiants));
    }

    nb.innerText = count;
}


// -----------------------------------------------------------------------------------
// Programme principal
// -----------------------------------------------------------------------------------

afficher(lesEtudiants);

activerTri({
    idTable: "leTableau",
    getData: () => lesEtudiants,
    afficher: afficher,
    triInitial: {
        colonne: 'licence',
        ordre: "asc"
    }
});


