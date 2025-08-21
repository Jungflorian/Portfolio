import '../CSS/Header.css';

function Header() {
  return (
    <div id="header" className="header">
      <ul>
        <li><a href="#presentation">Présentation</a></li>
        <li><a href="#competences">Compétences</a></li>
        <li><a href="#projets">Projets</a></li>
        <li><a href="#contact">Me contacter</a></li>
      </ul> 
      <h1>Mon portfolio </h1>
      <a href="/Portfolio/cv.pdf"target="_blank" rel="noopener noreferrer" className="cv-button">
        Voir mon CV
      </a>
    </div>
  );
}

export default Header;