import Booki from './Booki.jsx';
import '../CSS/Projet.css';
import Azuly from './Azuly.jsx';

function Mesprojets() {
    return (
        <div id="projets" className="projets">
            <div className='projet'>
                <h2>Projet 1 : Booki</h2>
                <Booki/>
                <p>Booki est un projet sur la recherche et la réservation de logements qui permet aux utilisateurs de trouver et de réserver des hébergements en ligne.
                   <br/> Projet qui m'a initié sur les bases du HTML et CSS et de la création de site web responsive.
                </p>
            </div>
            <div className='projet'>
                <h2>Projet 2 : Azuly piscine Stage</h2>
                <Azuly/>
                <p>Azuly piscine est un projet de refonte de site web pour une entreprise spécialisée dans la vente, la rénovation et l'installation de piscines.<br/>
                    Ce projet m'a permis de mettre en pratique mes compétences globales et de perfectionner mes connaissances sur la mise en ligne d'un site web.<br/>
                    C'est un projet que j'ai réalisé en stage et qui m'a permis de réaliser un projet concret et professionnel.
                </p>
            </div>
        </div>
    );
}

export default Mesprojets;
