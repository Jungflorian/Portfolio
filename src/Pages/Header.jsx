import '../CSS/Header.css';

function Header() {
  return (
    <div className="header">
      <ul>
        <li><a href="#presentation">Présentation</a></li>
        <li><a href="#competences">Compétences</a></li>
        <li><a href="#projets">Projets</a></li>
        <li><a href="#contact">Me contacter</a></li>
      </ul> 
      <h1>Mon portfolio </h1>
      <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="cv-button">
        Voir mon CV
      </a>
    </div>
  );
}

export default Header;