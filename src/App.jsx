import Header from "./Pages/Header.jsx";
import Footer from "./Pages/Footer.jsx";
import Presentation from "./Pages/Presentation.jsx";
import Competences from "./Pages/Competences.jsx";
import Mesprojets from "./Pages/Projet.jsx";
import Contact from "./Pages/Contact.jsx";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Presentation />
      <Competences />
      <Mesprojets />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
