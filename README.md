# Gestion de session dans une application React

Ce projet démontre l'implémentation de mécanismes de session et de cookies sécurisés dans une application React pour gérer les sessions utilisateur.

## Aperçu

L'objectif de ce projet est de présenter comment la gestion de session peut être réalisée dans une application frontend utilisant React. Il inclut des fonctionnalités telles que :

- Stockage des données de session en utilisant `localStorage`.
- Définition et suppression de cookies sécurisés HttpOnly en utilisant `js-cookie`.
- Simulation de tentative de détournement de session pour démontrer les mesures de sécurité.

## Fonctionnalités

- **Gestion de session :** Utilisation de `localStorage` pour stocker et récupérer les données de session.
- **Sécurité des cookies :** Configuration de cookies sécurisés HttpOnly pour gérer les sessions utilisateur.
- **Simulation :** Simule une tentative de détournement de session à des fins de test.

## Utilisation

1. **Installation :** Clonez le dépôt et installez les dépendances en utilisant `npm install`.

2. **Lancer l'application :** Démarrez l'application React en exécutant `npm start`.

3. **Tester les sessions et les cookies :**
   - Accédez à la page de test pour interagir avec les fonctionnalités de session.
   - Cliquez sur "Login" pour simuler une connexion utilisateur et définir des données de session.
   - Cliquez sur "Logout" pour effacer les données de session.
   - Utilisez "Simuler un détournement" pour tester l'accès non autorisé aux données de session.

## Structure des fichiers

cookies-session/
├── src/
│ ├── components/
│ │ ├── SessionTestPage.js
│ │ └── ... (autres composants)
│ ├── utils/
│ │ └── SessionManager.js
│ ├── App.js
│ └── index.js
└── package.json


## Dépendances

- `React` : Bibliothèque frontend pour la création d'interfaces utilisateur.
- `js-cookie` : Bibliothèque pour la manipulation de cookies navigateur en JavaScript.

## Remarques

Ce projet se concentre sur l'implémentation frontend. Une évaluation de sécurité complète pourrait nécessiter des tests backend pour une évaluation complète de la sécurité des sessions.


Pour toute question ou clarification supplémentaire, veuillez me contacter à [maxime.lombard@live.com.mx].

