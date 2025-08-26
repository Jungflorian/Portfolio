import '../CSS/Competences.css';
import BElogo from '/BElogo.jpg';
import FElogo from '/FElogo.png';
import DBlogo from '/dblogo.png';
import Autreslogo from '/autreslogo.png';

function Competences() {
    return (
        <div id="competences" className="competences">
            <h1>Mes compétences</h1>
            <div className='comp'>
                <div className='Front'>
                    <img src={FElogo} alt="Front-End Logo" />
                    <h2>Front-end</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                </div>
                <div className='Back'>
                    <img src={BElogo} alt="Back-End Logo" />
                    <h2>Back-end</h2>
                    <ul>
                        <li>Node.js</li>
                        <li>Express</li>
                        
                    </ul>
                </div>
                <div className='Base-de-donnees'>
                    <img src={DBlogo} alt="Base de données Logo" />
                    <h2>Base de données</h2>
                    <ul>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div className='Autres'>
                    <img src={Autreslogo} alt="Autres Logo" />
                    <h2>Autres</h2>
                    <ul>
                        <li>Figma</li>
                        <li>UI/UX Design</li>
                        <li>Git</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Competences;
