// donne moi des exercices difficile pour me permetre d'etudier les map et les set
// ChatGPT
// Bien sûr, voici quelques exercices plus avancés pour vous aider à approfondir vos connaissances sur les objets Map et Set en JavaScript. Ces exercices vous permettront d'explorer davantage les fonctionnalités de ces structures de données. Vous pouvez essayer de résoudre ces exercices et consulter les solutions si vous rencontrez des difficultés.

// Exercice 1 : Manipulation d'un Map
// Créez un objet Map appelé fruits et ajoutez les paires clé-valeur suivantes :

// "pomme" -> 3
// "banane" -> 5
// "kiwi" -> 2
// "fraise" -> 7
// Ajoutez un nouveau fruit "orange" avec une valeur de 4.

// Parcourez le Map et affichez toutes les paires clé-valeur.

// Affichez la quantité de fraises.

// Supprimez le fruit "kiwi" du Map.

// Exercice 2 : Utilisation d'un Set
// Créez un ensemble Set appelé nombres et ajoutez les nombres de 1 à 10.

// Créez un autre ensemble Set appelé nombresPairs et ajoutez les nombres pairs de 2 à 10.

// Créez un troisième ensemble Set appelé nombresImpairs et ajoutez les nombres impairs de 1 à 9.

// Utilisez des opérations Set pour trouver l'intersection des ensembles nombres et nombresPairs. Affichez le résultat.

// Utilisez des opérations Set pour trouver la différence entre les ensembles nombres et nombresImpairs. Affichez le résultat.

// Exercice 3 : Combiner Map et Set
// Créez un Map appelé stock qui stocke les quantités de produits en stock. Chaque produit est représenté par une chaîne de caractères (nom du produit), et la quantité en stock est un nombre.

// Créez un Set appelé produitsEnPromotion qui contient les noms des produits actuellement en promotion.

// Affichez la quantité en stock de chaque produit qui est en promotion. Vous devrez parcourir l'ensemble produitsEnPromotion et utiliser le Map stock pour obtenir les quantités correspondantes.

// Ajoutez un nouveau produit en promotion au Set et mettez à jour le Map stock en conséquence.

// Ces exercices devraient vous aider à renforcer vos compétences dans la manipulation des objets Map et Set en JavaScript. N'hésitez pas à consulter la documentation JavaScript si vous avez des questions sur l'utilisation de ces structures de données.




// User
// plus difficiles 
// ChatGPT
// Bien sûr, voici des exercices plus avancés pour vous permettre d'approfondir vos compétences en utilisant les objets Map et Set en JavaScript :

// Exercice 1 : Création d'un index inversé avec Map
// Un index inversé est une structure de données qui stocke des informations sur les occurrences de mots dans un ensemble de documents. Vous pouvez créer un index inversé en utilisant un objet Map. Voici l'exercice :

// Créez une classe IndexInversé qui a une méthode ajouterDocument(documentId, contenu) pour ajouter un document à l'index inversé. Le documentId est une chaîne de caractères unique pour chaque document, et le contenu est une chaîne de caractères contenant le texte du document.

// La méthode ajouterDocument devrait analyser le contenu du document pour extraire les mots individuels. Pour chaque mot, créez une entrée dans le Map où la clé est le mot et la valeur est un ensemble Set contenant les documentId des documents dans lesquels le mot apparaît.

// Ajoutez une méthode rechercherMot(mot) qui renvoie la liste des documentId des documents contenant ce mot.

// Exercice 2 : Implémentation d'un Set personnalisé
// Créez votre propre implémentation d'un ensemble (Set) personnalisé en utilisant un objet JavaScript. Votre ensemble doit prendre en charge les opérations suivantes :

// ajouter(element): Ajoute un élément à l'ensemble s'il n'existe pas déjà.

// supprimer(element): Supprime un élément de l'ensemble s'il existe.

// taille(): Renvoie le nombre d'éléments dans l'ensemble.

// contient(element): Vérifie si l'ensemble contient un élément donné.

// union(autreEnsemble): Retourne un nouvel ensemble qui est l'union de l'ensemble actuel et d'un autre ensemble donné.

// intersection(autreEnsemble): Retourne un nouvel ensemble qui est l'intersection de l'ensemble actuel et d'un autre ensemble donné.

// différence(autreEnsemble): Retourne un nouvel ensemble qui est la différence entre l'ensemble actuel et un autre ensemble donné.

// Implémentez cette classe d'ensemble personnalisée en utilisant un objet JavaScript, en vous assurant de gérer correctement les opérations.

// Ces exercices plus avancés devraient vous offrir un défi supplémentaire dans la manipulation des objets Map et la création de structures de données personnalisées à l'aide des objets JavaScript. Bonne chance !