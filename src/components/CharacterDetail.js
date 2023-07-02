import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAllergies } from "@fortawesome/free-solid-svg-icons";

function CharacterDetail({ characterData }) {
  const getSpeciesIcon = () => {
    if (characterData.species === "Human") {
      return <FontAwesomeIcon icon={faUser} />;
    } else if (characterData.species === "Alien") {
      return <FontAwesomeIcon icon={faAllergies} />;
    } else {
      return null;
    }
  };

  const getStatusIcon = () => {
    if (characterData.status === "Dead") {
      return <FontAwesomeIcon icon={faUser} />;
    } else if (characterData.status === "Alive") {
      return <FontAwesomeIcon icon={faUser} />;
    } else {
      return null;
    }
  };

  if (characterData) {
    return (
      <div className="detailCardBorder">
        <Link to="/">Volver</Link>
        <div className="detailCard">
          <img
            className="detailCard__img"
            src={characterData.image}
            alt="Imagen del personaje"
          />
          <section>
            <h3>{characterData.name}</h3>
            <p>Status: {getStatusIcon()}</p>
            <p>Species: {getSpeciesIcon()}</p>
            <p>Origin: {characterData.origin}</p>
            <p>Episodes: {characterData.episode.length}</p>
          </section>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p className="error">Lo sentimos, ese personaje no existe. </p>
        <Link to="/">Volver</Link>
      </div>
    );
  }
}

export default CharacterDetail;
