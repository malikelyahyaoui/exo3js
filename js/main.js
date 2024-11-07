// prendre tout les carrés
const square = document.querySelectorAll('.carre');

// boucle pour chaque carré
// square.forEach(square => {
//     square.addEventListener('click', () => {
//         // vérifie si l'élement a bien la classe "modifie"
//         if (square.classList.contains('modifie')) {
//             // supprimer la classe "modifie" de l'élément square
//             square.classList.remove('modifie');
//         } else {
//             // si la classe "modifie" n'est pas présente, on l'ajoute
//             square.classList.add('modifie');
//         }
//     });
// });

square.forEach(square => {
    square.addEventListener('click', () => {
      square.classList.toggle('modifie');
    });
  });


