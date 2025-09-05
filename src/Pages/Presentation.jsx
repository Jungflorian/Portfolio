import '../CSS/Presentation.css';
import Pdp from '/pdp.jpg';

function Presentation() {
    return (
        <div id="presentation" className="presentation">
            <img src={Pdp} alt="Ma photo" className='pdp'/>
            <div className='description'>
                <h1>Qui suis-je ?</h1>
                <h2>Florian Jung</h2>
                <p>Développeur web junior de 26 ans en fin de formation professionnelle dans la formation Developpeur web et web mobile avec OpenClassrooms,
                je suis passionné par le développement de site et d'application web. </p>
                <p>J'utilise différents outils et technologies pour créer des sites web modernes, dynamiques et responsives.</p>
                <p>Au cours de ma formation, j'ai accumulé diverses compétences que j'ai renseignées juste ici.</p>
            </div>
        </div>
    );
}
export default Presentation 