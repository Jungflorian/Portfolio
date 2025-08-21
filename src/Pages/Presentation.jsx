import '../CSS/Presentation.css';
import Pdp from '/pdp.jpg';

function Presentation() {
    return (
        <div section id="presentation" className="presentation">
            <img src={Pdp} alt="Ma photo" className='pdp'/>
            <h1>Qui suis-je ?</h1>
            <h2>Florian Jung</h2>
            <p>Developpeur web junior de 26 ans en fin de formation professionel,
            je suis passioné par le developpement de site et d'application web. </p>
            <p>J'utilise differents outils et technologies pour créer des sites web modernes, dynamiques et responsives.</p>
            <p>Au cours de ma formation j'ai accumulé divers compétences que j'ai renseigné juste ici.</p>
        </div>
    );
}
export default Presentation 