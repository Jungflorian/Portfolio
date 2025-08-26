import Booki from './Booki.jsx';
import '../CSS/Projet.css';
import Azuly from './Azuly.jsx';

function Mesprojets() {
    return (
        <div id="projets" className="projets">
            <div className='projet'>
                <h2>Projet 1 : Booki</h2>
                <Booki/>
            </div>
            <div className='projet'>
                <h2>Projet 2 : Azuly piscine Stage</h2>
                <Azuly/>
            </div>
        </div>
    );
}

export default Mesprojets;
