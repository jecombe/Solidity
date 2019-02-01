# Backend Js and solidity
Les projets fonctionnent avec node

## Ce qu'il faut
- Node
- Compte metamask (adresse public et private key de l'account) ou autre
- Une clé infura
- remix ide (http://remix.ethereum.org)

### Première étape
- Aller sur remix, copier coller le fichier.sol, cliquer sur Start to compile
- Aller dans Run et cliquer sur deploy, le compte metamask doit etre relié a remix IDE.
- Copier coller l'abi et l'adresse du contract
- Coller tout ca dans les fichiers get.js et set.js à l'emplacement voulus
- De plus copier coller la key infura, l'adresse public du compte metamask ainsi que sa private key dans les fichier get.js et set.js à l'emplacement voulus

### run script
- Ouvrir un terminal dans le dossier oú se trouvent les fichiers .js

Pour inscrire dans la blockchain:
 - Se rendre dans le fichier set.js, changer à la ligne 117 les infos à enregistrer dans la blockchain
 - Ensuite faire la commande:

```
node set.js
```

Pour obtenir le résultat, faire la commande suivante:

```
node get.js
```

## Auteur

* **Jérémy Combe**
