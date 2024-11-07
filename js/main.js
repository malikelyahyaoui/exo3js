// Prendre tout les carrés
const square = document.querySelectorAll('.carre');

// Boucle pour chaque carré
square.forEach(square => {
    square.addEventListener('click', () => {
        // au clique le carré se modifie
        if (square.classList.contains('modifie')) {
            // au 2eme clique il revient à son état initiale
            square.classList.remove('modifie');
        } else {
            // si le carré n'a pas les modifs css on lui ajoute
            square.classList.add('modifie');
        }
    });
});
