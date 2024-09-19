# Introduction Git

## Contributeurs

> Jérôme ZHAO ([TerukiIIM](https://github.com/TerukiIIM))

> Émilie XU ([emoliie](https://github.com/emoliie))

> Thomas DURAND ([t-drnd](https://github.com/t-drnd))

## Convertisseur de Devises

Bienvenue dans le convertisseur de devises ! Cette application vous permet de convertir des montants entre différentes devises en utilisant les taux de change en temps réel. Que vous souhaitiez convertir des euros en dollars, des livres sterling en yen, ou toute autre combinaison de devises, cet outil est conçu pour vous offrir une solution simple et rapide.

### Fonctionnalités

- **Conversion en temps réel** : Obtenez instantanément le montant converti en fonction des taux de change les plus récents.
- **Liste des devises** : Sélectionnez parmi une large gamme de devises supportées.
- **Interface intuitive** : Utilisez une interface utilisateur simple pour entrer un montant et choisir les devises de conversion.

### Comment Ça Marche

1. **Entrez un Montant** : Saisissez le montant que vous souhaitez convertir.
2. **Sélectionnez les Devises** : Choisissez la devise de départ et la devise de destination.
3. **Obtenez le Résultat** : Visualisez le montant converti ainsi que le taux de change utilisé.

### Installation

1. **Clonez le Répertoire**

   ```bash
   git clone https://github.com/TerukiIIM/Semaine_Git.git

### ⚠️Important⚠️
Vous devez configurer une clé API pour que l'application puisse accéder aux taux de change. Voici comment faire :

1. Ouvrez les fichiers `BACK/index.js` et `FRONT/JS/script.js` dans un éditeur de texte.
2. Recherchez la ligne contenant `const apiKey = "API_KEY"`.
3. Remplacez `"API_KEY"` par votre propre clé API que vous pouvez obtenir en vous inscrivant sur le site de l'API [ExchangeRate](https://www.exchangerate-api.com).