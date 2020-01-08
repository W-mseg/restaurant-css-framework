# Prérequis

## Extensions 
* live sass compiler
    - configuration :
    
    {
    "files.autoSave": "afterDelay",
    "liveServer.settings.donotShowInfoMsg": true,
    "liveServer.settings.donotVerifyTags": true,
    "window.zoomLevel": -1,
    "liveSassCompile.settings.formats": [
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": "/assets/css"
        }
    ],
}

## Pages 

* Accueil (Necessite un Jumbotron et deux panneaux , exemple : promotion , news , evenements de la semaine etc...)
* Carte (menu présentés sous formes de listes)
* Photos (Galerie photos min 10 photos et pagination de max 3 photos par pages) pagination : 

![Pagination](/ressources/pagination.png)

* Restaurants (adresse du resto , pland 'acces et heures d'ouverture d'au moins deux resto car c'est une franchise)

* Contact (Formulaire de contact)

## Methode de travail :

* Definir un persona du client 
* Definir Comment on va faire les pages sur papier 
* Creer les modeles demos sur adobe XD (ou logiciel de prototypage) (optionnel)
* Definir qui travaillera sur quoi 

## Regles de travail

* faire des commit sur git tout les X temps 
* a definir ( chacun sa stylesheet , une seule stylesheet ? )

### contraintes + liens 

* Pas de theme prefait
* sass obligatoire
* Responsive a tout prix (minimum pour tablette et telephone (md & sm))
* Utiliser Bootstrap 4
* Faire un Readme utile
